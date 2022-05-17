import styled from "styled-components/native";
import { Card, Text } from "react-native-paper";
import { StyleSheet } from "react-native";
export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

export const Title = styled.Text`
  flex-direction: row;
  align-items: center;
`;

export const ProductCardLayout = styled(Card)`
  margin-bottom: 10px;
  background-color: "#175851";
`;


export const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    marginBottom: 5,
    borderRadius: 5,
    //borderColor: "#000000",
    //borderWidth: 1,
    //: "#FFF056",
  },
  cover: {
    padding: 0,
    backgroundColor: "white",
  },
  title: { padding: 0 },

  descriptiopn: {
    fontSize: 12,
    color: "#175851",
  },
  title: { color: "#175851" },
  subTitle: { color: "#175851",  marginTop: -10 },
  txt: { color: "#175851", fontSize: 24, paddingRight: 20 }
});