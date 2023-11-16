import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";

import ProfileScreen from "../screens/ProfileScreen";
import CountriesNavigator from "./CountriesNavigator";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: "white",
          height: 70,
          paddingBottom: 15,
        },
        tabBarIcon: ({ color, size }) => (
          <Icon
            name={route.name === "Countries" ? "public" : "person"}
            size={size}
            color={color}
          />
        ),
      })}
    >
      <Tab.Screen name="Countries" component={CountriesNavigator} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
