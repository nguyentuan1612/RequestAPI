import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../home";
import FavoriteScreen from "../../../favorite/favorite";
const Tab = createBottomTabNavigator();
const RootComponents = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: "#4F4F4F" },
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarActiveTintColor: "green",
            tabBarIcon: ({ color }) => {
              return (
                <MaterialCommunityIcons name="home" size={30} color={color} />
              );
            },
          }}
        />
        <Tab.Screen name="Favorite" component={FavoriteScreen} />
      </Tab.Navigator>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDEDED",
  },
});
export default RootComponents;
