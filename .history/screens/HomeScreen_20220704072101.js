import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";

const HomeScreen = () => {
  return (
    <View>
      <Text style={tw`text-2xl p-4 font-semibold text-green-400`}>
        SHUGNIMAKH
      </Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
