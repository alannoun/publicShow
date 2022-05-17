import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#175851",
    },
    txt : {
      color: "#FFF056",
      fontFamily: "Optima",
      fontSize: 20,
      marginTop: 20
    },
    btn : { borderRadius: 10, width: 320, marginTop: 100 },
    imgContainer: {
      overflow: "hidden"
    },
    img : { width: 250, height: 150, resizeMode: "cover" },
    img2 : { width: 300, height: 200, resizeMode: "cover", marginTop: 30, borderWidth: 1, borderColor: "#FFF056" }
    
  }
  );