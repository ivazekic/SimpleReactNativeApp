import React from "react";
import { View, Text } from "react-native";

const CountryDetailScreen = ({ route }) => {
  const { name } = route.params;

  return (
    <View>
      <Text>Details for country {name} </Text>
    </View>
  );
};

export default CountryDetailScreen;
