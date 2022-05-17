import {
    createNativeStackNavigator,
    TransitionPresets,
  } from "@react-navigation/native-stack";
  
  import { useIsFocused } from '@react-navigation/native';
  import {Image} from 'react-native'
  
  import { ProductView } from "../../Views/Products.View";
  import { ProductDetailView } from "../../Views/ProductDetail.View";
import { LeaderBoardView } from "../../Views/LeaderBoard.View";
import { LeaderBoardDetailView } from "../../Views/LeaderBoardDetail.View";
import { Profile } from "../../components/Configuration/components/Profile/Profile.Component";
  
  const ProductStack = createNativeStackNavigator();
  
  export const LeaderBoardNavigation = ({ navigation }) => {
    
    
    return (
      <ProductStack.Navigator
        screenOptions={{
          //...TransitionPresets.ModalPresentationIOS,
          headerShown: false,
        }}
      >
        <ProductStack.Screen name="LeaderBoard" component={LeaderBoardView} />
        <ProductStack.Screen name="LeaderBoardDetail" component={LeaderBoardDetailView} />
      </ProductStack.Navigator>
    );
  };
  