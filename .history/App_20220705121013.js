import {
  Platform,
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import tw from "twrnc";
import { Provider } from "react-redux";
import React from "react";
import store from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapScreen from "./screens/MapScreen";
import GasScreen from "./screens/GasScreen";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            behavior={Platform.OS === "android" ? "height" : "padding"}
            style={tw`flex-1`}
            keyboardVerticalOffset={Platform.OS === "android" ? 0 : -64}
          >
            <SafeAreaView style={styles.container}>
              <Stack.Navigator>
                <Stack.Screen
                  name="HomeScreen"
                  component={HomeScreen}
                  options={{
                    headerShown: false,
                    headerStyle: false,
                  }}
                />
                <Stack.Screen
                  name="MapScreen"
                  component={MapScreen}
                  options={{
                    headerShown: false,
                    headerStyle: false,
                  }}
                />
                <Stack.Screen
                  name="GasScreen"
                  component={GasScreen}
                  options={{
                    headerShown: false,
                    headerStyle: false,
                  }}
                />
              </Stack.Navigator>
            </SafeAreaView>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
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
