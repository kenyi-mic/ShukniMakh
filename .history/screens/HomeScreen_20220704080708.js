import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";

const HomeScreen = () => {
  return (
    <View style={tw`w-full h-full flex-1`}>
      <View>
        {/*Logo */}
        <Text style={tw`font-semibold p-4 text-gray-500 text-2xl`}>
          SHUKNI-MAHK
        </Text>
      </View>
      <View style={tw`flex flex-row  `}>
        <View style={tw`bg-gray-200 p-3 m-2`}>
          <Image
            resizeMode="contain"
            style={tw`h-20 w-40`}
            source={require("../assets/car.png")}
          />
          <Text style={tw`text-lg mt-8 font-semibold`}>Get a Ride</Text>
        </View>
        <View style={tw`bg-gray-200 p-3 m-2`}>
          <Image
            resizeMode="contain"
            style={tw`h-40 w-40 `}
            source={require("../assets/gas.png")}
          />
          <Text style={tw`text-lg mt-4 font-semibold`}>Fill a gas</Text>
        </View>
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
