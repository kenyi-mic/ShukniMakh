import { StyleSheet, Text, View } from "react-native";
import { createSlice } from "@reduxjs/toolkit/dist/createSlice";

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

//selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) =>
  state.nav.travelTimeInformation;

export default navSlice.reducer;
