import { TouchableOpacity, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import { NavOptions } from "../components/navOptions";

const HomeScreen = () => {
  return (
    <View style={tw`w-full h-full flex-1`}>
      <View>
        {/*Logo */}
        <Text style={tw`font-semibold p-4 text-gray-500 text-2xl`}>
          SHUKNI-MAHK
        </Text>
      </View>
      <NavOptions />
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
