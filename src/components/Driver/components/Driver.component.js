import { View, StyleSheet, Image } from "react-native";
import { Text, Avatar, Badge } from "react-native-paper";
import {styles} from "./styles"
//TODO: Externalize Styles

export function Driver(props) {
  var file = props.file;

  return (
    <View style={{ flex: 1, alignItems: "center", marginTop: 5 }}>
      <Image style={
        styles(props).img
      } source={file}/>

      <Text
        style={styles(props).txt}
      >
        {props.DriverName}
      </Text>
    </View>
  );
}


