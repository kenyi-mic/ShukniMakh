import { StyleSheet, Text, View } from "react-native";
import React from "react";

const NavFavorites = () => {
  const data = [
    {
      id: "123",
      icon: "home",
      location: "Home",
      destination: "C & B street Barisal",
    },
    {
      id: "456",
      icon: "briefcase",
      location: "work",
    },
  ];
  return (
    <View>
      <Text>NavFavorites</Text>
    </View>
  );
};

export default NavFavorites;

const styles = StyleSheet.create({});
