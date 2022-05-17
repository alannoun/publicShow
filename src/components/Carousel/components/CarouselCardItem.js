import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"
import {styles} from './styles'
export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.6)
const containWidth = Dimensions.get('window').width / 10
const CarouselCardItem = ({ item, index }) => {
  
  return (
    <View style={styles({containWidth, ITEM_WIDTH, SLIDER_WIDTH}).container} key={index}>
      {/* <Text style={styles.header}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text> */}
      <Image
        source={item.imgUrl }
        style={styles(ITEM_WIDTH).image}
      />
      
    </View>
  )
}



export default CarouselCardItem