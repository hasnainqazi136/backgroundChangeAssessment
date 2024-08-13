import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 200,
    width: 200,
    marginVertical: 20,
  },
  blueHollowContainer: {
    borderColor: "#1886DF",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
  },
  blueHollowTitle: {
    fontWeight: "700",
    color: "#1886DF",
  },
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
