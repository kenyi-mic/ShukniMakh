import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import { GOOGLE_PLACES_API_KEY } from "@env";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const NavigateCard = () => {
  return (
    <SafeAreaView style={tw`bg-white flex-1 `}>
      <Text style={tw`text-center py-5 text-xl`}>Good Morning, Michael</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            styles={toInputBoxStyle}
            enablePoweredByContainer={false}
            fetchDetails={true}
            placeholder="Where to?"
            query={{
              key: GOOGLE_PLACES_API_KEY,
              language: "en",
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const toInputBoxStyle = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
