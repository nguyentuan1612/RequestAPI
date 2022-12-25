import { View, Text, StyleSheet, TextInput,ActivityIndicator, FlatList } from "react-native";
import React, { useState, useEffect, } from "react";
import ItemProduct from "../itemProduct/item";

const AllProduct = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const callApi = async () => {
    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const json = await response.json();
       setData(json);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    callApi();
  }, []);

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Search...." />
      {
        loading ? <ActivityIndicator style={{flex: 1}} size="large" /> : 
        <FlatList 
        data={data}
        numColumns = {2}
        renderItem = {(item) => {
          return <ItemProduct />
        }}
        />
      }
      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    paddingLeft: 15,
    borderRadius: 8,
    borderColor: "#787878",
    marginBottom: 25,
  },
});
export default AllProduct;
