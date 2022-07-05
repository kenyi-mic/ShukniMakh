import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-web";
import tw from "twrnc";

const NavOptions = () => {
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
    <FlatList
      data={data}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
          <View>
            <Image
              style={{
                width: 120,
                height: 120,
                resizeMode: "contain",
              }}
              source={{ uri: item.image }}
            />
          </View>
          <Text>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
