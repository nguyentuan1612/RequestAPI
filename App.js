import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  View,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
import { NavigationContainer } from "@react-navigation/native";
import Home from "./components/screens/home/home";
import FavoriteScreen from "./components/screens/favorite/favorite";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
export default App = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <NavigationContainer>
        {
          <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
              tabBarStyle: { backgroundColor: "#4F4F4F" },
              tabBarShowLabel: false,
            }}
          >
            <Tab.Screen
              name="Home"
              component={Home}
              options={{
                tabBarActiveTintColor: "green",
                tabBarIcon: ({ color }) => {
                  return (
                    <MaterialCommunityIcons
                      name="home"
                      size={30}
                      color={color}
                    />
                  );
                },
              }}
            />
            <Tab.Screen name="Favorite" component={FavoriteScreen} />
          </Tab.Navigator>
        }
      </NavigationContainer>
    </View>
  );
};
