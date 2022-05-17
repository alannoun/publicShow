import {StyleSheet} from 'react-native'
export const styles = (props) => StyleSheet.create({
    container: {
      position: "relative",
      right: props.containWidth,
      backgroundColor: "#175851",
      borderRadius: 8,
      width: props.ITEM_WIDTH,
      // paddingBottom: 40,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      
      elevation: 7,
    },
    image: {
      width: props.ITEM_WIDTH,
      height: 200,
      borderWidth: 2,
      borderColor: "#FFF056"
    },
    header: {
      color: "#FFF056",
      fontSize: 28,
      fontWeight: "bold",
      paddingLeft: 20,
      paddingTop: 20
    },
    body: {
      color: "#FFF056",
      fontSize: 18,
      paddingLeft: 20,
      paddingLeft: 20,
      paddingRight: 20
    }
  })