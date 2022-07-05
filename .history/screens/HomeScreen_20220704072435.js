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
        <Image
          style={tw`w-40`}
          source={{
            uri: "https://www.pngall.com/luxury-car-png/download/22792",
          }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
