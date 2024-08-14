import { View, Text } from "react-native";
import React from "react";
import { calculateBrightness } from "../../hooks/useGenerateRandomColor";
import styles from "./typography.styles";

interface IProps {
  backgroundColor: string;
}

const Typography = ({ backgroundColor }: IProps) => {
  const color = calculateBrightness(backgroundColor);
  return (
    <Text
      style={{
        ...styles.text,
        color: color,
      }}
    >
      Hello There !
    </Text>
  );
};

export default Typography;
