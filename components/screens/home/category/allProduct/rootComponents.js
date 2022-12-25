import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {MaterialIcons} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../home";
import FavoriteScreen from "../../../favorite/favorite";
import CartScreen from "../../../cart/cart";
import UserScreen from "../../../user/user";
const Tab = createBottomTabNavigator();
const RootComponents = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: "#9775FA" },
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: "#00FF47",
          tabBarInactiveTintColor:"white"
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => {
              return (
                <MaterialIcons name="home" size={30} color={color} />
              );
            },
          }}
        />
        <Tab.Screen name="Favorite" component={FavoriteScreen} options={
          {tabBarIcon:({color}) =>{
            return <MaterialIcons name="favorite" size={30} color={color}/>
          } }
        } />
<Tab.Screen name="CartScreen" component={CartScreen} options={
          {tabBarIcon:({color}) =>{
            return <MaterialIcons name="shopping-cart" size={30} color={color}/>
          } }
        } />
        <Tab.Screen name="User" component={UserScreen} options={
          {tabBarIcon:({color}) =>{
            return <MaterialIcons name="account-circle" size={30} color={color}/>
          } }
        } />
        
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
