import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { ProductsContextProvider } from "../../Services/Product/product.context";
import { SettingsView } from "../../Views/Settings.View";

import { HomeNavigator } from "./Home.Navigation";
import { ProductNavigator } from "./Product.Navigation";
import { ConfigurationNavigator } from "./Configuration.Navigation";
import { LeaderBoardNavigation } from "./LeaderBoard.Navigation";

const Tab = createBottomTabNavigator();

export const AppNavigator = () => (
  <ProductsContextProvider>
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="ConfigurationHome"
        activeColor="#FFF056"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: "#175851" }}
        
        screenOptions= {{
          tabBarStyle:{ backgroundColor: "#175851" }
        }}
        //screenOptions={createScreenOptions}
        // tabBarOptions={{
        //   activeTintColor: "tomato",
        //   inactiveTintColor: "gray",
        // }}
      >
        <Tab.Screen
          name="Home"
          component={LeaderBoardNavigation}
          options={{
            headerShown: false,
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="home-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="ProductsHome"
          component={ProductNavigator}
          options={{
            headerShown: false,
            tabBarLabel: "NFT",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="certificate-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="ConfigurationHome"
          component={ConfigurationNavigator}
          options={{
            headerShown: false,
            tabBarLabel: "My car",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="car-sports"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsView}
          options={{
            headerShown: false,
            tabBarLabel: "Profile",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="account-settings-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  </ProductsContextProvider>
);
