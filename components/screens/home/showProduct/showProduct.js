import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";

const ShowProduct = ({ route }) => {
  //Get paramaters
  const { id } = route.params;
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const callData = async () => {
    try {
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/products/" + id + ""
      );
      const Json = await response.json();
      setData(Json);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    callData();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator style={{ flex: 1 }} size={"large"} />
      ) : (
        <View>
          <ImageBackground
            source={{ uri: data.images[1] }}
            style={{ width: "100%", height: 350 }}
            resizeMode={"stretch"}
          >
            <View style={styles.back}>
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/2223/2223615.png",
                }}
                style={{ width: 50, height: 50 }}
              />
            </View>
          </ImageBackground>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  back: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    borderRadius: 100,
    margin: 20,
  },
});
export default ShowProduct;
