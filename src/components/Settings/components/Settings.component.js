import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
 
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {CarouselCards} from '../../Carousel/components/CarouselView'
import {styles} from './styles'
export function Settings(props) {

  
    return (
      <View >
          <View style={styles.header}><Text style={styles.name}>Briana Doe</Text></View>
          {/* <Text style={styles.name}>John Doe</Text> */}
          <Image style={styles.avatar} source={require('../../../../assets/womanDriver.png')}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
             

              <Text>sds</Text>
              <Text style={{color: "black"}}>UX Designer / Mobile developer</Text>
              <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
              
          
               
              
              {/* <TouchableOpacity style={styles.buttonContainer}>
                <Text style={{color: 'white'}}>Option 1</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={{color: 'white'}}>Option 2</Text> 
              </TouchableOpacity> */}
              
            </View>
            <CarouselCards/>
        </View>
      </View>
    );
  }



