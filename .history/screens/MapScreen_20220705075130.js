import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MapScreen = () => {
  return (
    <View>
      <View style={tw`h-1/2`}>Upper </View>
      <View style={tw`h-1/2`}>Lower</View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
