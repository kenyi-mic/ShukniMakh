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
    <SafeAreaView>
      <View>
        <Text style={[tw``, styles.logo]}>SHUKNI-M</Text>
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
  logo: {
    fontSize: 21,
    color: "darkblue",
    fontWeight: "600",
  },
});
