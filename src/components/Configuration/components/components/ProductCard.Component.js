import React from "react";
import { styles } from "./ProductCard.styles";
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
} from "./ProductCard.styles";

export const ProductCard = ({ product = {} }) => {
  const {
    id = "0",
    name = "Product Name",
    type = "video",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    imgUrl = ["https://via.placeholder.com/500"],
    price = "$100",
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus mi eget bibendum facilisis. In interdum felis eget est bibendum.",
    rating = 4,
    isOutofSctock = false,
  } = product;

  return (
    <Card elevation={5} style={styles.card}>
      <Card.Title
        title={name}
        titleStyle={styles.title}
        subtitle={type}
        subtitleStyle={styles.subtitle}
        left={(props) => <Avatar.Icon {...props} icon={icon} />}
        // right={(props) => (
        //   <IconButton {...props} icon="dots-vertical" onPress={() => {}} />
        // )}
        right={(props) => (
          <Text style={styles.txt}>
            {price}
          </Text>
        )}
      />
      <Card.Cover
        key={id}
        resizeMode="contain"
        style={styles.cover}
        //source={{ uri: photos[0] }}
        source={imgUrl}
      ></Card.Cover>
      <Card.Content>
        <Paragraph style={styles.descriptiopn}>{description}</Paragraph>
      </Card.Content>
    </Card>
  );
};


