import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const Tab = createMaterialTopTabNavigator();
import Clothes from "./category/clothes";
import Furniture from "./category/furniture";
import Electronics from "./category/Electronics";
import AllProduct from "./category/allProduct/allProduct";
const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.herder}>
        <Text style={styles.textHeader}>OwenNguyen Store</Text>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/2832/2832495.png",
          }}
          style={{ width: 25, height: 25 }}
        />
      </View>
      <Tab.Navigator
        initialRouteName="All Product"
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 12
          },
          swipeEnabled: false,
          tabBarIndicatorStyle: {
            backgroundColor: "#9775FA",
            width: 50,
            left: 28
          },
          tabBarInactiveTintColor: "black",
          tabBarActiveTintColor: "#9775FA",
          tabBarStyle: {
            backgroundColor: "transparent",
            elevation: 0,
            marginBottom: 20
          },
          tabBarScrollEnabled: true,

          tabBarItemStyle: {
            width: 107
          }
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
    backgroundColor: "white",
  },
  textHeader: {
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 15
  },

  herder: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
  },
});

export default Home;
