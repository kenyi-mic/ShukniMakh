import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import tw from "twrnc";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Provider>
      <HomeScreen />
      </Provider>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
