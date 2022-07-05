import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";

const GasScreen = () => {
  return (
    <View style={tw`flex justify-center items-center`}>
      <Text styles={tw`text-center text-3xl font-bold`}>GasScreen</Text>
    </View>
  );
};

export default GasScreen;

const styles = StyleSheet.create({});
