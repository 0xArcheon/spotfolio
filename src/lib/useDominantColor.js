"use client";
import { useEffect, useState } from "react";

const FALLBACK = [83, 83, 83];

// Average an image's colour, weighting saturated pixels so artwork (not a
// white or black backdrop) drives the header tint — the UI stays achromatic.
export default function useDominantColor(src) {
  const [color, setColor] = useState(FALLBACK);

  useEffect(() => {
    if (!src) return;
    let cancelled = false;
    const img = new window.Image();
    img.src = src;
    img.onload = () => {
      if (cancelled) return;
      const size = 24;
      const canvas = document.createElement("canvas");
      canvas.width = canvas.height = size;
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      ctx.drawImage(img, 0, 0, size, size);
      const { data } = ctx.getImageData(0, 0, size, size);

      let r = 0, g = 0, b = 0, total = 0;
      for (let i = 0; i < data.length; i += 4) {
        if (data[i + 3] < 128) continue;
        const max = Math.max(data[i], data[i + 1], data[i + 2]);
        const min = Math.min(data[i], data[i + 1], data[i + 2]);
        const weight = (max - min) / 255 + 0.05;
        r += data[i] * weight;
        g += data[i + 1] * weight;
        b += data[i + 2] * weight;
        total += weight;
      }
      if (total) setColor([r, g, b].map((v) => Math.round(v / total)));
    };
    return () => {
      cancelled = true;
    };
  }, [src]);

  return color;
}
