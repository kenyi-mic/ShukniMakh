import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";

const HomeScreen = () => {
  return (
    <View>
      <Text style={tw`text-2xl p-4 font-semibold text-green-400`}>
        SHUGNIMAKH
      </Text>
      <View>
        <Image style={tw`w-40 h-20`} source={{ uri: "./assets/car.png" }} />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  imageTemplate: {
    height: 400,
    width: 400,
  },
});
