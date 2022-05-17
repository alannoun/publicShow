import React from "react";
import { styles } from "./LeaderBoardCard.styles";
import {
  Card,
  Text,
  Content,
  Paragraph,
  Avatar,
  IconButton,
} from "react-native-paper";

import {
  //ProductCard,
  Title,
} from "./LeaderBoardCard.styles";

export const LeaderBoardCard = ({ user = {} }) => {
  const {
    id = "0",
    name = "Product Name",
    imgUrl = ["https://via.placeholder.com/500"],
    rank = 1,
    noOfRaces = 45,
    avgTime= '00:59',
    wins = 2,
    lapsLed = "5.3%",
    recentActivity
  } = user;

  return (
    <Card elevation={5} style={styles.card}>
      <Card.Title
        title={name}
        titleStyle={styles.title}
  
        left={(props) => <Avatar.Image {...props} source={imgUrl} />}
        // right={(props) => (
        //   <IconButton {...props} icon="dots-vertical" onPress={() => {}} />
        // )}
        right={(props) => (
          <Text style={styles.txt}>
            Rank {rank}
          </Text>
        )}
      />

      {/* <Card.Cover
        key={id}
        resizeMode="contain"
        style={styles.cover}
        //source={{ uri: photos[0] }}
        source={imgUrl}
      ></Card.Cover> */}
      
      <Card.Content>
        <Title style={{fontSize: 17}}>
        
        <Text style={{ fontWeight: "600" }}>Wins:</Text> {wins} | 
        <Text style={{ fontWeight: "600" }}> No. of Races:</Text> {noOfRaces} | 
        <Text style={{ fontWeight: "600" }}> Avg. Time:</Text> {avgTime} | 
        <Text style={{ fontWeight: "600" }}> Laps Led:</Text>  {lapsLed}
        </Title>
      </Card.Content>
    </Card>
  );
};


