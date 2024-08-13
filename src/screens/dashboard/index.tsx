import React, { useState } from "react";
import {
  Text,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Dimensions,
} from "react-native";
import LottieView from "lottie-react-native";
import { StatusBar } from "expo-status-bar";

import { Card } from "../../components/card";
import { Container } from "../../components/container";
import styles from "./dashboard.style";

const Dashboard = () => {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [showFireworks, setShowFireworks] = useState(false);

  const handleTouch = () => {
    // Generate a random color
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    console.log("xx- randomColor", randomColor);
    setBackgroundColor(randomColor);

    // Trigger fireworks animation
    setShowFireworks(true);
    setTimeout(() => setShowFireworks(false), 3000); // Hide fireworks after 3 seconds
  };

  return (
    <Container backgroundColor={backgroundColor}>
      <StatusBar backgroundColor={backgroundColor} />
      <TouchableWithoutFeedback onPress={handleTouch}>
        <View style={{ ...styles.container, backgroundColor: backgroundColor }}>
          <Text
            style={{
              fontSize: 20,
              color: backgroundColor === "#ffffff" ? "#00000" : "#ffffff",
              fontWeight: "bold",
            }}
          >
            Hello There !
          </Text>
          {showFireworks && (
            <LottieView
              source={require("../../assets/fireworks.json")}
              autoPlay
              loop={false}
              style={styles.fireworks}
            />
          )}
        </View>
      </TouchableWithoutFeedback>
    </Container>
  );
};

export default Dashboard;
