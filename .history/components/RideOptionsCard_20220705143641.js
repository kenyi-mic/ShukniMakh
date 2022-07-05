import { StyleSheet, Text, SafeAreaView, FlatList } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import tw from "twrnc";

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
          style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
        >
          <Icon name="chevron-left" type="fontawesome" style={tw``} />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>Select a Ride</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier, image } }) => (
          <TouchableOpacity
            style={tw`flex-row justify-between items-center px-10`}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
              }}
              source={{ uri: image }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>Travel Time</Text>
            </View>
            <Text style={tw`text-xl`}>$98</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
