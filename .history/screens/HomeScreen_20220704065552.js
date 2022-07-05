import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { tw } from "twrnc";

const HomeScreen = () => {
  return (
    <View style={tw`text-5xl text-green-400`}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
