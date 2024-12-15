import { ImageBackground, Text } from "react-native";
import React from "react";

const splash = () => {
  return (
    <ImageBackground
      source={require("../../assets/images/splash.png")}
      style={{ flex: 1 }}
    >
      <Text>index</Text>
    </ImageBackground>
  );
};

export default splash;
