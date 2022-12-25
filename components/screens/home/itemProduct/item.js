import { View, Text, StyleSheet,Image } from "react-native";
import React from "react";

const ItemProduct = (Props) => {
  return (
    <View style={styles.container}>
      <Image source={{uri:"https://cdn.lorem.space/images/fashion/.cache/640x480/wesley-tingey-3mGnYRUNIck-unsplash.jpg" }} style={{width:"100%", height: 160 , borderRadius: 8}}/>
      <Text style={styles.title} numberOfLines={1}>Namammamams</Text>
      <Text style={{fontWeight:"bold"}}>33.5</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 171,
    height: 230,
    marginRight: 25
  },
  title : {
    marginVertical: 10,
    fontWeight: 'bold'
  }
});
export default ItemProduct;
