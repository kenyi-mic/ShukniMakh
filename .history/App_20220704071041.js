import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import tw from "twrnc";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
    <SafeAreaView>
      <Text>Hello Native Boy</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
