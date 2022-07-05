import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";

const HomeScreen = () => {
  return (
    <View>
      <View>
        <Text>Logo</Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  image: {
    width: 20,
    height: 12,
    resizeMode: "contain",
  },
});
