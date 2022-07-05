import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navSlice";

const store = configureStore({
  reducer: {
    nav: navReducer,
  },
});

export default store;

const styles = StyleSheet.create({});
