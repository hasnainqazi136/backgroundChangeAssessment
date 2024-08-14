import React from "react";
import LottieView from "lottie-react-native";
import styles from "./lottieFireWorks.styles";

const LottieFireWorks = () => {
  return (
    <LottieView
      source={require("../../assets/fireworks.json")}
      autoPlay
      loop={false}
      style={styles.fireworks}
    />
  );
};

export default LottieFireWorks;
