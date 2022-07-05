import { FlatList, Image, TouchableOpacity, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import { Icon } from "react-native-vector-icons/Icon";

const NavOptions = () => {
  const data = [
    {
      id: "123",
      title: "Get a ride",
      image: "https://cutt.ly/6K4G64y",
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
          <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
          <Icon name="arrowright" type="antdesign" color="white" />
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
