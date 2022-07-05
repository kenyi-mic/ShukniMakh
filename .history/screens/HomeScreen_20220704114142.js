import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import tw from "twrnc";
import NavOptions from "../components/NavOptions";

const HomeScreen = () => {
  return (
    <SafeAreaView style={[tw`bg-white h-full`, styles.container]}>
      <View style={tw``}>
        <Text style={tw`text-xl font-bold text-blue-900`}>SHUKNI-M</Text>
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
