import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";

const HomeScreen = () => {
  return (
    <View>
      <View>
        <Text style={tw`font-semibold p-4 text-gray-400 text-2xl`}>
          SHUKNI-MAHK
        </Text>
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
