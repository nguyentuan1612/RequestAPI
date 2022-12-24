import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Rating, AirbnbRating } from "react-native-ratings";

const Home = (Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: Props.image }}
        style={{
          width: 130,
          height: 130,
          resizeMode: "contain",
          marginTop: 15,
        }}
      />
      <Text style={styles.title} numberOfLines={1}>
        {Props.title}
      </Text>
      <View
        style={{
          width: "86%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 20,
          borderWidth: 1,
          height: 30,
        }}
      >
        <Text>{Props.price}</Text>
        <Rating
          ratingCount={5}
          imageSize={13}
          readonly= {true}
          startingValue={Props.rating}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 250,
    borderWidth: 1,
    marginRight: 16,
    marginLeft: 8,
    marginVertical: 8,
    alignItems: "center",
    padding: 6,
  },
  title: {
    fontWeight: "bold",
    marginTop: 20,
  },
});

export default Home;
