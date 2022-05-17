import React from "react";
import { Profile } from "../components/Configuration/components/Profile/Profile.Component";
import { Settings } from "../components/Settings/components/Settings.component";

// import s from "../../assets/"
export const SettingsView = () => {
  const user = {
    id : "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba61",
    name: "Danicia Patrick",

    //photos: ["https://via.placeholder.com/100"],
    imgUrl: require("../../assets/DaniciaPatrick.png"),
    price: "$100",

    rank: 1,
    noOfRaces: 53,
    avgTime: '00:44',
    wins: 2,
    lapsLed: "6.3%",
    recentActivity: ["Won first place in Kentucky Derby", "Beat Alan Noun to become rank 1"],
    cars: [require("../../assets/Pic1.jpeg"),require("../../assets/Pic2.jpeg"), require("../../assets/Pic3.jpeg")]
  }
  let s = "."
  return (
    <Profile user={user} />
  )
};
