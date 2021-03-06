import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView from "react-native-maps";
import tw from "twrnc";
import { selectOrigin } from "../slices/navSlice";

const Map = () => {
  const origin = useSelector(selectOrigin);
  return (
    <MapView
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin.location.latitude,
        longitude: origin.location.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    />
  );
};

export default Map;

const styles = StyleSheet.create({});
