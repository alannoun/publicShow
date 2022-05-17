import { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import Slider from "@react-native-community/slider";
// import { ProductsContext } from "../../../Services/Product/product.context";
import {styles} from './styles'
import { ProductsContext } from "../../../../Services/Product/product.context";

export function Variables(props) {
  const {config} = useContext(ProductsContext)
  const [variable, setVariable] = useState(0);
  let fn;
  let varib;
  if (props.Name === "Tire") {
    fn = config.setTire
    varib = config.tire
  } 
  else if (props.Name === "Pit Strategy") {
    fn = config.setpitStrategy
    varib = config.pitStrategy
  }
  else {
    fn = config.setPitCount
    varib = config.pitCount
  }
 // console.log(config.tire)
  return (
    <View
      style={styles.container}
    >
      <Text
        style={styles.txtLrg}
      >
        {props.Name}
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={styles.txtSmall}
        >
          {props.minValueText}
        </Text>
        <Slider
          //style={{ width: 250, height: 40, transform: [{ scaleY: 3 }] }}
          style={{ width: 250, height: 60 }}
          minimumTrackTintColor="#FFF056"
          maximumTrackTintColor="#000000"
          maximumValue={props.maxValue}
          minimumValue={props.minValue}
          step={props.step}
          thumbImage={require("../../../../../assets/wheel.png")}
          trackStyle={{ height: 100 }}
          onValueChange={(value) => {
            setVariable(value);
            fn(value)
          }}
        ></Slider>
        <Text
          style={styles.txtSmall}
        >
          {props.maxValueText}
        </Text>
      </View>
    </View>
  );
}


