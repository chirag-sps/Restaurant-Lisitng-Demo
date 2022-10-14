import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Dashboard/HomeScreen";
import HomeDetailScreen from "../screens/Dashboard/HomeDetailScreen";


const AfterLoginStack = createNativeStackNavigator();

const AfterLoginNavigator = () => (
  <AfterLoginStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <AfterLoginStack.Screen name="HomeScreen" component={HomeScreen}/>
    <AfterLoginStack.Screen name="HomeDetailScreen" component={HomeDetailScreen}/>
  </AfterLoginStack.Navigator>
);

export default AfterLoginNavigator;
