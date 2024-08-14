import { useState } from "react";

const useGenerateRandomColor = () => {
  const [color, setColor] = useState("");
  const generateColor = () => {
    setColor(`#${Math.random().toString(16).substr(-6)}`);
  };
  return { color, generateColor };
};
export default useGenerateRandomColor;

export const calculateBrightness = (hexColor: string) => {
  const r = parseInt(hexColor.substring(1, 3), 16);
  const g = parseInt(hexColor.substring(3, 5), 16);
  const b = parseInt(hexColor.substring(5, 7), 16);

  // Using the luminance formula
  return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "black" : "white";
};
