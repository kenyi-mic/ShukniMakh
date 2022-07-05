import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { Provider } from "react-redux";

import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
    <Provider>
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
