import { StyleSheet, Text, View } from "react-native";
import tw from "twrnc";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
    <View style={tw`p-5 m-15`}>
      <HomeScreen />
    </View>
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
