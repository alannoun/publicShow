import styled from "styled-components/native";
import { Card, Text } from "react-native-paper";
import { StyleSheet } from "react-native";
export const colors = {
    primary: '#FFF056'
}
export const fontFamilies = {
    textFont: 'Optima'
}
export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

export const Title = styled.Text`
    color: ${colors.primary},
    font-family: ${fontFamilies.textFont},
    fontSize: 14,
`;

export const ProductCardLayout = styled(Card)`
  margin-bottom: 10px;
`;


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#175851",
  },
  image: {
    width: 100, height: 100, resizeMode: "cover"
  },
  txt: {       
    color: "#FFF056",
    fontFamily: "Optima",
    fontSize: 16, 
    marginTop: 70
  },
  drivers2: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#175851",
  },
  drivers: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#175851",
  },
  btnContainer: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "stretch",
    justifyContent: "center",
    
  },
  button: { borderRadius: 10, width: 320 }
});
