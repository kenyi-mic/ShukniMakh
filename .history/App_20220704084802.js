import {
  Platform,
  View,
  StatusBar,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Provider } from "react-redux";
import React from "react";
import store from "./store";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <HomeScreen />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
