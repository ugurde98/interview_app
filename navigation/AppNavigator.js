import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import UserScreen from "../screens/UserScreen";
import ComicDetailsScreen from "../screens/ComicDetailsScreen";
import MarvelLogo from "../assets/MarvelLogo";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeStack"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ComicDetails"
        component={ComicDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const UserStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="User"
        component={UserScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          headerTitle: () => <MarvelLogo />,
          headerStyle:{
            backgroundColor:"#EC1D24",
          }
        }}
      />
      <Tab.Screen
        name="Settings"
        component={UserStackNavigator}
        options={{
          headerTitle: () => <MarvelLogo />,
          headerStyle:{
            backgroundColor:"#EC1D24",
          }
        }}
      />
    </Tab.Navigator>
  );
};
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
