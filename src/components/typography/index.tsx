import { View, Text } from "react-native";
import React from "react";

interface IProps {
  color: string;
}

const Typography = ({ color }: IProps) => {
  return (
    <Text
      style={{
        fontSize: 20,
        color: "#" + color === "#ffffff" ? "#00000" : "#ffffff",
        fontWeight: "bold",
      }}
    >
      Hello There !
    </Text>
  );
};

export default Typography;
