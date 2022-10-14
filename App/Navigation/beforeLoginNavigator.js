import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";

const BeforeLoginStack = createNativeStackNavigator();

const BeforeLoginNavigator = () => (
  <BeforeLoginStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <BeforeLoginStack.Screen name="LoginScreen" component={LoginScreen} />

  </BeforeLoginStack.Navigator>
);

export default BeforeLoginNavigator;
