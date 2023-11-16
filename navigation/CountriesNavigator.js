import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CountryDetailScreen from "../screens/CountryDetailScreen";
import CountriesScreen from "../screens/CountriesScreen";

const Stack = createStackNavigator();

const CountriesNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Countries List" component={CountriesScreen} />
      <Stack.Screen name="Country Details" component={CountryDetailScreen} />
    </Stack.Navigator>
  );
};

export default CountriesNavigator;
