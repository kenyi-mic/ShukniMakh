import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import tw from "twrnc";
import {
  selectDestination,
  selectOrigin,
  setDestination,
} from "../slices/navSlice";
import { useSelector } from "react-redux";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_PLACES_API_KEY } from "@env";

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  return (
    <MapView
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin?.location.latitude,
        longitude: origin?.location.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_PLACES_API_KEY}
          strokeWidth={3}
          strokeColor="red"
        />
      )}
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin?.location.lat,
            longitude: origin?.location.lng,
          }}
          title="Origin"
          description={origin?.description}
          identifier="origin"
        />
      )}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
