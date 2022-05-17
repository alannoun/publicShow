import React, { useContext } from "react";
import { Text } from "react-native";
import { Button } from "react-native-paper";
import { ProductDetailCard } from "../components/Configuration/components/components/ProductDetail.Component";
import { LeaderBoardDetail } from "../components/Configuration/components/LeaderBoard/LeaderBoardDetail.Component";
import { Profile } from "../components/Configuration/components/Profile/Profile.Component";



export const LeaderBoardDetailView = ({ navigation, route }) => {
  const { user } = route.params;

  return (
    <Profile user={user} />
  )

};


  // return (
  //   <>
  //     <LeaderBoardDetail product={product} />
  //     <Button
  //       mode="contained"
  //       //labelStyle={{ fontSize: 18 }}
  //       color="#FFF056"
  //       contentStyle={{ height: 44 }}
  //       style={{ borderRadius: 10, width: 320 }}
  //       onPress={() => {
  //         navigation.navigate("LeaderBoard", {});
  //       }}
  //     >
  //       Back to Leaderboard!
  //     </Button>
  //   </>
  // );