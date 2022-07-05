import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "react-native-vector-icons";

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
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity>
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavorites;

const styles = StyleSheet.create({});
