"use client";

import { useCallback, useEffect, useRef } from "react";
import { DRAG, ROTATION_LIMITS } from "./constants";

export type AthleteRotationRefs = {
  scrollGroup: { rotation: { y: number } } | null;
  dragGroup: { rotation: { y: number } } | null;
  cursorGroup: { rotation: { x: number; y: number } } | null;
};

type Options = {
  reducedMotion: boolean;
  enabled: boolean;
};

export function useAthleteRotation({ reducedMotion, enabled }: Options) {
  const scrollRotation = useRef(0);
  const dragRotation = useRef(0);
  const cursorX = useRef(0);
  const cursorY = useRef(0);
  const targetCursorX = useRef(0);
  const targetCursorY = useRef(0);
  const velocity = useRef(0);
  const isDragging = useRef(false);
  const lastPointerX = useRef(0);
  const entranceProgress = useRef(0);

  const refs = useRef<AthleteRotationRefs>({
    scrollGroup: null,
    dragGroup: null,
    cursorGroup: null,
  });

  const setScrollRotation = useCallback((value: number) => {
    scrollRotation.current = value;
  }, []);

  const setEntranceProgress = useCallback((value: number) => {
    entranceProgress.current = value;
  }, []);

  const onPointerDown = useCallback(
    (clientX: number) => {
      if (!enabled) return;
      isDragging.current = true;
      lastPointerX.current = clientX;
      velocity.current = 0;
    },
    [enabled]
  );

  const onPointerMove = useCallback(
    (clientX: number, clientY: number, rect: DOMRect) => {
      if (!enabled) return;

      if (isDragging.current) {
        const dx = clientX - lastPointerX.current;
        lastPointerX.current = clientX;
        const delta = dx * DRAG.sensitivity;
        dragRotation.current += delta;
        velocity.current = delta;
        return;
      }

      if (reducedMotion) return;

      const nx = (clientX - rect.left) / rect.width - 0.5;
      const ny = (clientY - rect.top) / rect.height - 0.5;
      targetCursorX.current = nx * ROTATION_LIMITS.cursorX;
      targetCursorY.current = ny * ROTATION_LIMITS.cursorY;
    },
    [enabled, reducedMotion]
  );

  const onPointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const onPointerLeave = useCallback(() => {
    isDragging.current = false;
    targetCursorX.current = 0;
    targetCursorY.current = 0;
  }, []);

  const tick = useCallback(() => {
    const { scrollGroup, dragGroup, cursorGroup } = refs.current;

    if (scrollGroup) scrollGroup.rotation.y = scrollRotation.current;
    if (dragGroup) dragGroup.rotation.y = dragRotation.current;

    if (!reducedMotion && cursorGroup) {
      cursorX.current += (targetCursorX.current - cursorX.current) * 0.08;
      cursorY.current += (targetCursorY.current - cursorY.current) * 0.08;
      cursorGroup.rotation.x = cursorX.current;
      cursorGroup.rotation.y = cursorY.current;
    }

    if (!isDragging.current && Math.abs(velocity.current) > DRAG.minVelocity) {
      dragRotation.current += velocity.current;
      velocity.current *= DRAG.velocityDecay;
      if (dragGroup) dragGroup.rotation.y = dragRotation.current;
    }
  }, [reducedMotion]);

  useEffect(() => {
    if (!enabled) return;
    let raf: number;
    const loop = () => {
      tick();
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [enabled, tick]);

  return {
    refs,
    scrollRotation,
    dragRotation,
    entranceProgress,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onPointerLeave,
    setScrollRotation,
    setEntranceProgress,
    isDragging,
  };
}
