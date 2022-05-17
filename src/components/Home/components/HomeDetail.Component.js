import React from "react";
import { ImageBackground, View } from "react-native";
//import { styles } from "./ProductCard.styles";
import { Card, Text } from "react-native-paper";
import { styles } from "./styles";
//import { ImageBackground } from "react-native-web";

//TODO: Stylize components

export const HomeDetail = ({ product = {} }) => {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  );
};


    // <View style={styles.container}>
    //   <ImageBackground
    //     style={styles.image}
    //     resizeMode="contain"
    //     source={require("../../../../assets/app.png")}
    //   >
    //     <Text
    //       style={styles.txt}
    //     >

    //     </Text>
    //   </ImageBackground>
    // </View>