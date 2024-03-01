import { RGBColor } from "react-color";

export const colors = {
  "base-1": "#1C1C1C",
  "base-2": "#272727",
  "base-3": "#323232",
  "base-4": "#393939",
  bg: "#1F2333",
  primary: "#7060FF",
} as const;

export function convertHex(hexCode: string, opacity = 1, string?: boolean) {
  let hex = hexCode.replace("#", "");
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  const r = parseInt(hex.substring(0, 2), 16),
    g = parseInt(hex.substring(2, 4), 16),
    b = parseInt(hex.substring(4, 6), 16);
  /* Backward compatibility for whole number based opacity values. */
  if (opacity > 1 && opacity <= 100) {
    opacity = opacity / 100;
  }
  const rgba: RGBColor = {
    r,
    g,
    b,
    a: opacity,
  };
  if (string)
    return `rgba(${r}, ${g}, ${b}, ${opacity})`
  return rgba;
}