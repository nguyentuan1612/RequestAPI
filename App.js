import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View, Image } from "react-native";

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
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator size="large" style={{ flex: 1 }} />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Text>
              {item.rating.rate}, {item.rating.count}
            </Text>
          )}
        />
      )}
    </View>
  );
};
