import React, { useEffect, useState } from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Container } from "../../components/container";
import styles from "./dashboard.style";
import useGenerateRandomColor from "../../hooks/useGenerateRandomColor";
import Typography from "../../components/typography";
import LottieFireWorks from "../../components/lottieFireWorks";

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
    <Container backgroundColor={color}>
      <StatusBar backgroundColor={color} />
      <TouchableWithoutFeedback onPress={handleTouch}>
        <View style={{ ...styles.container, backgroundColor: color }}>
          <Typography backgroundColor={color} />
          {showFireworks && <LottieFireWorks />}
        </View>
      </TouchableWithoutFeedback>
    </Container>
  );
};

export default Dashboard;
