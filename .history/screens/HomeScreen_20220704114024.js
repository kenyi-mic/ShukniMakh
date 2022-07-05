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
      <View style={tw`p-2`}>
        <Text style={[tw``, styles.logo]}>SHUGNI-M</Text>
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
