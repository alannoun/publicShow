import { createContext, useState, useContext } from "react";
import {styles} from './Configuration.styles'
import { View, Image, TouchableOpacity, Alert } from "react-native";
import { Text, Button } from "react-native-paper";
import { Driver } from "../../Driver/components/Driver.component"
import { Variables } from "../components/Variables/Variables.component"
import { StyleSheet } from "react-native";
//import { withNavigation } from "react-navigation";


//"../../../../Services/Product/product.context";
//TODO: Externalize Styles
export const ConfigurationContext = createContext();
import { useIsFocused } from '@react-navigation/native';
import { ProductsContext } from "../../../Services/Product/product.context";

function reducer(state, item) {
  return [...state, item]
}

export function Configuration({ navigation }) {
  const [driver, setDriver] = useState("");
  const [tire, setTire] = useState(0);
  const [pitStrategy, setpitStrategy] = useState(0);
  const [pitCount, setPitCount] = useState(0);
 
 // console.log("navigation " + navigation);

  const {config} = useContext(ProductsContext)
 // console.log(config)
  // //TODO: Not the right method, pass as params to manage this. Quick and dirty progress at ths point
  // const onPress1 = () => setDriver("Sebastian Vettel");
  // const onPress2 = () => setDriver("Lance Stroll");

 
    return (
      <ConfigurationContext.Provider value = {
        {
          driver,
          tire,
          pitStrategy,
          pitCount
        }
        
      }>
        <>
        <View style={{marginTop: 0, backgroundColor: "#175851"}}>
        {/* <Image
              source={require("../../../../assets/app.png")}
              style={styles.image}
            /> */}
        </View>
        <View
          style={styles.container}
        >
          
            <Text
              style={styles.txt}
            >
              CHOOSE YOUR DRIVER
            </Text>
          
          <View
            style={styles.drivers}
          >
            <TouchableOpacity onPress={() => config.setDriver("Sebastian Vettel")}>
              <Driver
                size={100}
                file={require("../../../../assets/SebastianVettel.jpeg")}
                DriverName="Sebastian Vettel"
                selected={config.driver === "Sebastian Vettel"}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => config.setDriver("Lance Stroll")}>
              <Driver
                size={100}
                DriverName="Lance Stroll"
                selected={config.driver === "Lance Stroll"}
                file={require("../../../../assets/SirLancelot.png")}
              />
            </TouchableOpacity>
          </View>
          <Variables
            Name="TIRE"
            step={1}
            minValue={0}
            maxValue={5}
            minValueText="Soft"
            maxValueText="Hard"
            onValueChange={(value) => {
          
              config.setTire(value);
            }}
          />
          <Variables
            Name="PIT STRATEGY"
            step={1}
            minValue={0}
            maxValue={3}
            minValueText="UnderCut"
            maxValueText="Overcut"
            onValueChange={(value) => {
              config.setpitStrategy(value);
            }}
          />
          <Variables
            Name="NUMBER OF PITS"
            step={1}
            minValue={0}
            maxValue={3}
            minValueText="1"
            maxValueText="3"
            onValueChange={(value) => {
              config.setPitCount(value);
            }}
          />

          <View
            color={"ffffff"}
            style={styles.btnContainer}
          >

            <Button
              mode="contained"
              //labelStyle={{ fontSize: 18 }}
              color="#FFF056"
              contentStyle={{ height: 44 }}
              style={styles.button}
              onPress={() => {
                //Is the Driver Selected???
              //  console.log("Driver is " + driver);

                config.driver === ""
                  ? Alert.alert("Select a driver please!")
                  : navigation.navigate("ConfigurationConfirmation", {
                      driver: driver,
                      tire: tire,
                      pitStrategy: pitStrategy,
                      pitCount: pitCount,
                    });
              }}
            >
              Go!
            </Button>
          </View>
        </View>
        </>
      </ConfigurationContext.Provider>
    );  
}

