import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { GOOGLE_PLACES_API_KEY } from "@env";
import { useDispatch } from "react-redux";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";
import NavFavorites from "./NavFavorites";
import { Icon } from "@rneui/base";
import "react-native-gesture-handler";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
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
            returnKeyType={"search"}
            minLength={2}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                }),
                navigation.navigate("RideOptionsCard")
              );
            }}
            query={{
              key: GOOGLE_PLACES_API_KEY,
              language: "en",
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
          />
        </View>
        <NavFavorites />
        <View
          style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-gray-100 border-t`}
        >
          <TouchableOpacity
            style={tw`flex flex-row bg-black w-24 px-4 rounded-full`}
          >
            <Icon name="car" type="font-awesome" color="white" size={16} />
            <Text style={tw`text-white text-center`}>Rides</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`flex flex-row bg-white w-24 px-4 rounded-full`}
          >
            <Icon name="gas-pump" type="font-awesome" color="black" size={16} />
            <Text style={tw`text-black text-center`}>Gas</Text>
          </TouchableOpacity>
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
