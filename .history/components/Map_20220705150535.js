import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import tw from "twrnc";
import {
  selectDestination,
  selectOrigin,
  setTravelTimeInformation,
} from "../slices/navSlice";
import { useSelector } from "react-redux";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_PLACES_API_KEY } from "@env";

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!origin || !destination) return;
    //zoom
    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, left: 50, bottom: 50, right: 50 },
    });
  }, [origin, destination]);

  useEffect(() => {
    if (!destination) return;
    const getTravelTime = async () => {
      fetch(
        `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destination=${destination.description}&key=${GOOGLE_PLACES_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
        });
    };
  });
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
