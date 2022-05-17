import { useEffect, useState, useContext } from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Text, Button } from "react-native-paper";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { ConfigurationContext } from "./Configuration.component";
import { ProductsContext } from "../../../Services/Product/product.context";
import { TouchableHighlight } from "react-native-gesture-handler";
import { styles } from "./ConfigurationConfirmation.styles";
//TODO: Externalize Styles

export function ConfigurationConfirmation({ navigation, route }) {
  const configInfo = useContext(ConfigurationContext)
  const {config} = useContext(ProductsContext)
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("Test", route.params);
    } catch (e) {
      // saving error
    }
  };

  useEffect(() => {
    //storeData();
    
  }, [route.params]);
  return (
    <View
      style={styles.container}
    >
      <Image
        source={require("../../../../assets/app.png")}
        style={styles.img}
      />
      <Text
        style={styles.txt}
      >
        Your NFT is ready
      </Text>
      <Image
        source={require("../../../../assets/NFT.png")}
        style={styles.img2}
      />
      
    </View>
  );
}


