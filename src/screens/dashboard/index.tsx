import React, { useEffect, useState } from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import LottieView from "lottie-react-native";
import { StatusBar } from "expo-status-bar";

import { Container } from "../../components/container";
import styles from "./dashboard.style";
import useGenerateRandomColor from "../../hooks/useGenerateRandomColor";
import Typography from "../../components/typography";
import LottieFireWorks from "../../components/LottieFireWorks";

const Dashboard = () => {
  const { color, generateColor } = useGenerateRandomColor();
  const [showFireworks, setShowFireworks] = useState(false);
  useEffect(() => {
    generateColor();
  }, []);

  const handleTouch = () => {
    generateColor();
    // Trigger fireworks animation
    setShowFireworks(true);
    setTimeout(() => setShowFireworks(false), 4000);
  };

  return (
    <Container backgroundColor={"#" + color}>
      <StatusBar backgroundColor={"#" + color} />
      <TouchableWithoutFeedback onPress={handleTouch}>
        <View style={{ ...styles.container, backgroundColor: "#" + color }}>
          <Typography color={color} />
          {showFireworks && <LottieFireWorks />}
        </View>
      </TouchableWithoutFeedback>
    </Container>
  );
};

export default Dashboard;
