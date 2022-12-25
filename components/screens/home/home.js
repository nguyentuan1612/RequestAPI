import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const Tab = createMaterialTopTabNavigator();
import { NavigationContainer } from "@react-navigation/native";
import AllProduct from "./category/allProduct";
import Clothes from "./category/clothes";
import Furniture from "./category/furniture";
import Electronics from "./category/Electronics";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.herder}>
        <Text style={styles.textHeader}>OwenNguyen Store</Text>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/2832/2832495.png",
          }}
          style={{ width: 20, height: 20 }}
        />
      </View>
      <Tab.Navigator
        initialRouteName="All Product"
        screenOptions={{
          tabBarLabelStyle: {
            fontWeight: "bold",
            borderWidth: 1,
            width:"100%",
            height:"100%",
          },
          swipeEnabled: false,
          tabBarIndicatorStyle: {
            width: 30,
            backgroundColor: "red",
          },
          tabBarInactiveTintColor: "black",
          tabBarActiveTintColor: "red",
          tabBarStyle: {
            backgroundColor: "transparent",
            elevation: 0,
            borderWidth: 1,
          },
          tabBarScrollEnabled: true,
        }}
      >
        <Tab.Screen component={AllProduct} name="All Product" />
        <Tab.Screen component={Clothes} name="Clothes" />
        <Tab.Screen component={Furniture} name="Furniture" />
        <Tab.Screen component={Electronics} name="Electronics" />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    paddingHorizontal: 20,
  },
  textHeader: {
    fontWeight: "bold",
    fontSize: 15,
  },

  herder: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Home;
