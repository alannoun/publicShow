import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    header:{
      backgroundColor: "#175851",
      height:200,
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
      alignSelf:'center',
      position: 'absolute',
      marginTop:130
    },
    body:{
      marginTop:40,
    },
    bodyContent: {
      flex: 1,
      alignItems: 'center',
      padding:30,
      marginBottom: 90
    },
    name:{
      fontSize:28,
      color: "white",
      fontWeight: "600",
      alignSelf:'center',
      position: 'absolute',
      marginTop: 30
    },
    info:{
      fontSize:16,
      color: "#00BFFF",
      marginTop:10
    },
    description:{
      fontSize:16,
      color: "#696969",
      marginTop:30,
      textAlign: 'center',
      alignSelf:'center',
      position: 'absolute',
      
    },
    buttonContainer: {
      marginTop:10,
      height:180,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:296,
      borderRadius:30,
      backgroundColor: "#175851",
      
    },
  });