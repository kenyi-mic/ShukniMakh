import { StyleSheet, Text, SafeAreaView } from "react-native";
import React from "react";

const RideOptionsCard = () => {
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity style={tw`absolute top-3 left-5 p-3 rounded-full`}>
          <Icon name="chevron-left" type="fontawesome" style={tw``} />
        </TouchableOpacity>
      </View>
      <Text style={tw`text-center py-5 text-xl`}>Select a Ride</Text>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
