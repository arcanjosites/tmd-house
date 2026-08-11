# Modelo 3D — Atleta BJJ

Arquivo principal:

```
bjj-athlete.glb
```

## Modelo integrado

**Focused Jiu-Jitsu Stance** (Meshy AI / Tulio Portela)

- Licença: **CC0** (uso comercial livre)
- URL: https://www.meshy.ai/3d-models/Focused-JiuJitsu-Stance-v2-019de5ba-43c7-742d-b65b-e0ac96ff84cd
- ~292k faces, PBR textures, postura de Jiu-Jitsu

## Substituir o modelo

1. Coloque um novo `.glb` como `public/models/bjj-athlete.glb`
2. Reinicie o dev server
3. Ajuste posições dos decals em `components/three/AthleteModel.tsx` se necessário

## Converter Meshy `.meshy` → GLB

Se baixar da Meshy em formato `.meshy`:

```bash
node scripts/convert-meshy.mjs caminho/model.meshy public/models/bjj-athlete.glb
```

## Otimização (opcional)

```bash
npx @gltf-transform/cli optimize public/models/bjj-athlete.glb public/models/bjj-athlete-opt.glb --compress meshopt
```

## Logo no kimono

Logos TMD House aplicadas via decals em runtime (`/images/logo.jpg`).
