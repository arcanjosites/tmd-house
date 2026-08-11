/**
 * Converts Meshy .meshy files to standard GLB (CC0 BJJ models from meshy.ai showcase).
 * Decryption logic from meshy2glb (clean-room reverse engineering).
 */
import { createRequire } from "module";
import { readFileSync, writeFileSync } from "fs";
import { createDecipheriv } from "crypto";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const MeshoptDecoder = require(
  join(__dirname, "../node_modules/meshoptimizer/meshopt_decoder.cjs")
);

const KEY_ASCII = "JSON{\"accessors\":[{\"bufferView\":";
const ENCRYPTED_LEN = 8192;
const TAG_LEN = 16;

function meshyToGlb(buffer) {
  const bytes = new Uint8Array(buffer);
  const head = new TextDecoder().decode(bytes.subarray(0, 8));
  if (head !== "MESHY.AI") throw new Error("Not a .meshy file");

  const nonce = bytes.subarray(10, 22);
  const body = bytes.subarray(32);
  if (body.length < ENCRYPTED_LEN + TAG_LEN) throw new Error(".meshy body too small");

  const counter = Buffer.alloc(16);
  counter.set(nonce, 0);
  counter[15] = 0x02;

  const decipher = createDecipheriv("aes-256-ctr", Buffer.from(KEY_ASCII, "utf8"), counter);
  const prefix = new Uint8Array(decipher.update(body.subarray(0, ENCRYPTED_LEN)));

  if (new DataView(prefix.buffer).getUint32(0, true) !== 0x46546c67) {
    throw new Error("Decrypted prefix is not GLB");
  }

  const plaintext = body.subarray(ENCRYPTED_LEN + TAG_LEN);
  const glbLen = ENCRYPTED_LEN + plaintext.length;
  const out = new Uint8Array(glbLen);
  out.set(prefix, 0);
  out.set(plaintext, ENCRYPTED_LEN);
  new DataView(out.buffer).setUint32(8, glbLen, true);
  return out.buffer;
}

async function decompressGlb(glbBuffer) {
  await MeshoptDecoder.ready;
  const src = new Uint8Array(glbBuffer);
  const dv = new DataView(glbBuffer);

  const jsonLen = dv.getUint32(12, true);
  const json = JSON.parse(new TextDecoder().decode(src.slice(20, 20 + jsonLen)));
  const binStart = 20 + ((jsonLen + 3) & ~3) + 8;
  const binData = src.slice(binStart);

  const bvs = json.bufferViews ?? [];
  const hasMeshopt = bvs.some((bv) => bv.extensions?.EXT_meshopt_compression);
  if (!hasMeshopt) return glbBuffer;

  const decodedChunks = [];
  let decodedTotal = 0;
  const newBufferViews = [];

  for (const bv of bvs) {
    const ext = bv.extensions?.EXT_meshopt_compression;
    if (ext && (ext.buffer ?? 0) === 0) {
      const compSrc = binData.slice(ext.byteOffset, ext.byteOffset + ext.byteLength);
      const outSize = ext.count * ext.byteStride;
      const target = new Uint8Array(outSize);
      MeshoptDecoder.decodeGltfBuffer(
        target,
        ext.count,
        ext.byteStride,
        compSrc,
        ext.mode,
        ext.filter || ""
      );

      const aligned = (decodedTotal + 3) & ~3;
      while (decodedTotal < aligned) {
        decodedChunks.push(new Uint8Array([0]));
        decodedTotal++;
      }

      newBufferViews.push({
        buffer: 0,
        byteOffset: decodedTotal,
        byteLength: bv.byteLength,
        ...(bv.byteStride ? { byteStride: bv.byteStride } : {}),
        ...(bv.target ? { target: bv.target } : {}),
      });
      decodedChunks.push(target);
      decodedTotal += outSize;
    } else {
      const off = bv.byteOffset ?? 0;
      const raw = binData.slice(off, off + bv.byteLength);

      const aligned = (decodedTotal + 3) & ~3;
      while (decodedTotal < aligned) {
        decodedChunks.push(new Uint8Array([0]));
        decodedTotal++;
      }

      newBufferViews.push({
        buffer: 0,
        byteOffset: decodedTotal,
        byteLength: bv.byteLength,
        ...(bv.byteStride ? { byteStride: bv.byteStride } : {}),
        ...(bv.target ? { target: bv.target } : {}),
      });
      decodedChunks.push(raw);
      decodedTotal += raw.length;
    }
  }

  const newJson = { ...json };
  newJson.bufferViews = newBufferViews;
  newJson.buffers = [{ byteLength: decodedTotal }];
  newJson.extensionsUsed = (json.extensionsUsed ?? []).filter((e) => e !== "EXT_meshopt_compression");
  newJson.extensionsRequired = (json.extensionsRequired ?? []).filter(
    (e) => e !== "EXT_meshopt_compression"
  );
  if (newJson.extensionsUsed.length === 0) delete newJson.extensionsUsed;
  if (newJson.extensionsRequired?.length === 0) delete newJson.extensionsRequired;

  const jsonBytes = new TextEncoder().encode(JSON.stringify(newJson));
  const jsonPadded = jsonBytes.length + ((4 - (jsonBytes.length % 4)) % 4);
  const totalLen = 12 + 8 + jsonPadded + 8 + decodedTotal;
  const out = new Uint8Array(totalLen);
  const odv = new DataView(out.buffer);

  odv.setUint32(0, 0x46546c67, true);
  odv.setUint32(4, 2, true);
  odv.setUint32(8, totalLen, true);
  odv.setUint32(12, jsonPadded, true);
  odv.setUint32(16, 0x4e4f534a, true);
  out.set(jsonBytes, 20);
  for (let i = jsonBytes.length; i < jsonPadded; i++) out[20 + i] = 0x20;

  const binOff = 20 + jsonPadded;
  odv.setUint32(binOff, decodedTotal, true);
  odv.setUint32(binOff + 4, 0x004e4942, true);

  let pos = binOff + 8;
  for (const chunk of decodedChunks) {
    out.set(chunk, pos);
    pos += chunk.length;
  }

  return out.buffer;
}

const input = process.argv[2];
const output = process.argv[3];
if (!input || !output) {image.png
  console.error("Usage: node scripts/convert-meshy.mjs <input.meshy> <output.glb>");
  process.exit(1);
}

const raw = readFileSync(input);
const glb = meshyToGlb(raw);
const decompressed = await decompressGlb(glb);
writeFileSync(output, Buffer.from(decompressed));
console.log(`Converted ${input} -> ${output} (${decompressed.byteLength} bytes)`);
