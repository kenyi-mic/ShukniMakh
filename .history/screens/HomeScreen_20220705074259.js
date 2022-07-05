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
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_PLACES_API_KEY } from "@env";
import { useDispatch } from "react-redux";

const HomeScreen = () => {
  const dispatch = useDispatch;
  return (
    <SafeAreaView style={[tw`bg-white h-full`, styles.container]}>
      <View style={tw`p-2`}>
        <Text style={tw`text-3xl ml-1 font-bold text-blue-900`}>SHUKNI-M</Text>
        <GooglePlacesAutocomplete
          styles={{
            container: {
              flex: 0,
            },

            textInput: {
              fontSize: 18,
              backgroundColor: "#f1f1f1",
            },
          }}
          onPress={(data, details = null) => {
            console.log(data);
            console.log(details);
          }}
          enablePoweredByContainer={false}
          fetchDetails={true}
          minLength={2}
          query={{
            key: GOOGLE_PLACES_API_KEY,
            language: "en",
          }}
          placeholder="Where from?"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />
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