import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  fireworks: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    zIndex: 1,
  },
});

export default styles;
