import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";

const HomeScreen = () => {
  return (
    <View style={tw`w-full h-full m-auto`}>
      <View>
        {/*Logo */}
        <Text style={tw`font-semibold p-4 text-gray-500 text-2xl`}>
          SHUKNI-MAHK
        </Text>
      </View>
      <View>
        <Image
          resizeMode="contain"
          style={tw`h-20 w-40`}
          source={require("../assets/car.png")}
        />
        <Text>Get a Ride</Text>
      </View>
      <View>
        <Image
          resizeMode="contain"
          style={tw`h-40 w-40`}
          source={require("../assets/gas.png")}
        />
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
