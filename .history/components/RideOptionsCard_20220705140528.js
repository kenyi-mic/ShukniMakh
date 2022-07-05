import { StyleSheet, Text, SafeAreaView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "trans-x-123",
    title: "CarX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "trans-xl-456",
    title: "CarXL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "trans-xxl-789",
    title: "CarX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];

const RideOptionsCard = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          style={tw`absolute top-3 left-5 p-3 rounded-full`}
        >
          <Icon name="chevron-left" type="fontawesome" style={tw``} />
        </TouchableOpacity>
      </View>
      <Text style={tw`text-center py-5 text-xl`}>Select a Ride</Text>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
