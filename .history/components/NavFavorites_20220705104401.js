import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

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
    destination: "Sodo Road Barisal",
  },
];
const NavFavorites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity>
          <Text>Okay here!</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavorites;

const styles = StyleSheet.create({});
