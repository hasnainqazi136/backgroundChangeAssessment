import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native";
import styles from "./container.style";

interface ContainerProps {
  children?: ReactNode;
  backgroundColor?: string;
}

const Container: React.FC<ContainerProps> = (props) => {
  return (
    <SafeAreaView
      style={{ ...styles.container, backgroundColor: props.backgroundColor }}
    >
      {props.children}
    </SafeAreaView>
  );
};

export { Container };
