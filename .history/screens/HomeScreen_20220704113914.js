import {
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { NavOptions } from "../components/NavOptions";

const HomeScreen = () => {
  return (
    <SafeAreaView style={[tw`bg-white h-full`, styles.container]}>
      <View style={tw`p-2`}>
        <Text style={[tw``, styles.logo]}>SHUGNI-M</Text>
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  image: {
    width: 20,
    height: 12,
    resizeMode: "contain",
  },
});
