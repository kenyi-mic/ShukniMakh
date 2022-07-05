import { FlatList, Image, TouchableOpacity, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import tw from "twrnc";
import { Icon } from "@rneui/base";
import { setOrigin } from "../slices/navSlice";

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(setOrigin);
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
        <TouchableOpacity
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
          onPress={() => navigation.navigate(item.screen)}
        >
          <View style={tw`${!origin && "opacity-20"}`}>
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
          <Icon
            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
            name="arrowright"
            type="antdesign"
            color="white"
          />
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
