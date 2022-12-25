import React, { useEffect, useState } from "react";
import { View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import ShowProduct from "./components/screens/home/showProduct/showProduct";
import AllProduct from "./components/screens/home/category/allProduct/allProduct";
import RootComponents from "./components/screens/home/category/allProduct/rootComponents";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#EDEDED",
      }}
    >
      <StatusBar style="auto" />
      <NavigationContainer>
        {
          <Stack.Navigator
            initialRouteName="rootComponent"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen component={AllProduct} name="allProduct" />
            <Stack.Screen component={ShowProduct} name="showProduct" />
            <Stack.Screen component={RootComponents} name="rootComponent" />
          </Stack.Navigator>
        }
      </NavigationContainer>
    </View>
  );
};
