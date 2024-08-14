import { View, Text } from "react-native";
import React from "react";
import { calculateBrightness } from "../../hooks/useGenerateRandomColor";

interface IProps {
  backgroundColor: string;
}

const Typography = ({ backgroundColor }: IProps) => {
  const color = calculateBrightness(backgroundColor);
  return (
    <Text
      style={{
        fontSize: 20,
        color: color,
        fontWeight: "bold",
      }}
    >
      Hello There !
    </Text>
  );
};

export default Typography;
