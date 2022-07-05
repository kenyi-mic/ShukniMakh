import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-web";

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
    <FlatList
      data={data}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity>
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
        </TouchableOpacity>
      )}
    />
  );
};

export default navOptions;

const styles = StyleSheet.create({});
