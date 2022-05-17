import { View, StyleSheet, Image } from "react-native";
export const styles = (props) => StyleSheet.create({
    header:{
      backgroundColor: "#175851",
      height:200,
    },
    avatar: {
      width: 100,
      height: 100,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
      alignSelf:'center',
      marginLeft: 10,
      marginRight: 10,
      resizeMode: "contain"
    },
    img: {
      width: 100,
      height: 100,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: props.selected ? "#FFF056" : "transparent",
      marginBottom:10,
      alignSelf:'center',
      marginLeft: 10,
      marginRight: 10,
      
    },
    txt: {
      color: "#FFF056",
      fontFamily: "Optima",
      fontSize: 16,
    }
  });