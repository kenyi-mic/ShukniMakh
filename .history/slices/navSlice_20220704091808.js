import { StyleSheet, Text, View } from "react-native";
import React from "react";

const initialstate = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};
export const slice = createSlice({
  name: "nav",
  initialstate,
  reducer: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

export const {
  setOrigin,
  setDestination,
  setTravelTimeInformation,
} = navSlice.action;

const styles = StyleSheet.create({});
