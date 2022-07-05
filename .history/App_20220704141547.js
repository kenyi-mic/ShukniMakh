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
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapScreen from "./screens/MapScreen";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
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
            </Stack.Navigator>
          </SafeAreaView>
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
