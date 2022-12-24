import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View, Image } from "react-native";
import Home from "./components/home";

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{ flex: 1, padding: 5 }}>
      {isLoading ? (
        <ActivityIndicator size="large" style={{ flex: 1 }} />
      ) : (
        <FlatList
        showsVerticalScrollIndicator={false}
          numColumns = {2}
          data={data}
          renderItem={({ item }) => <Home image={item.image} title ={item.title} price ={item.price}  rating = {item.rating.rate}/>}
        />
      )}
    </View>
  );
};
