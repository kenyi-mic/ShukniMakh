import { StyleSheet, Text, View } from "react-native";
import React from "react";

const navOptions = () => {
  const data = [
    {
      id: "123",
      title: "Get a ride",
      image: "https://cutt.ly/gK4Pd7r",
      screen: "MapScreen",
    },
    {
      id: "456",
      title: "Fill gas",
      image: "https://cutt.ly/oK4PNoC",
      screen: "GasScreen",
    },
  ];
  return (
    <View>
      <Text>navOptions</Text>
    </View>
  );
};

export default navOptions;

const styles = StyleSheet.create({});
