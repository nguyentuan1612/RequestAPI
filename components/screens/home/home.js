import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const Tab = createMaterialTopTabNavigator();
import { NavigationContainer } from "@react-navigation/native";
import Clothes from "./category/clothes";
import Furniture from "./category/furniture";
import Electronics from "./category/Electronics";
import RootComponents from "./category/allProduct/rootComponents";
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
          },
          swipeEnabled: false,
          tabBarIndicatorStyle: {
            backgroundColor: "red",
          },
          tabBarInactiveTintColor: "black",
          tabBarActiveTintColor: "red",
          tabBarStyle: {
            backgroundColor: "transparent",
            elevation: 0,
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
    backgroundColor: "#EDEDED",
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
    backgroundColor: "#EDEDED",
  },
});

export default Home;
