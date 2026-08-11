/** 3D athlete section — shared constants */

export const ATHLETE_MODEL_PATH = "/models/bjj-athlete.glb";

export const ROTATION_LIMITS = {
  cursorY: 0.12, // ±~7°
  cursorX: 0.045, // ±~2.5°
  head: 0.06, // ±~3.5° (unused without rig)
} as const;

export const DRAG = {
  sensitivity: 0.005,
  damping: 0.92,
  velocityDecay: 0.95,
  minVelocity: 0.0001,
} as const;

export const SCROLL_ROTATION_MAX = Math.PI * 0.85; // ~153°

export const TMD_COLORS = {
  bg: "#07120c",
  bg2: "#0c1813",
  surface: "#0e1712",
  greenPrimary: "#163b27",
  greenSecondary: "#21563a",
  greenAccent: "#3c8c5a",
  greenHighlight: "#71c18a",
  kimono: "#0a0f0c",
  kimonoFabric: "#111a14",
} as const;

export const MODEL_ATTRIBUTION = {
  name: "Focused Jiu-Jitsu Stance",
  author: "Tulio Portela / Meshy AI",
  license: "CC0",
  url: "https://www.meshy.ai/3d-models/Focused-JiuJitsu-Stance-v2-019de5ba-43c7-742d-b65b-e0ac96ff84cd",
} as const;
