import React, { useContext } from "react";
import { FlatList, TouchableOpacity, View, Image, StyleSheet, Text,   Platform,
  StatusBar,
  Dimensions } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator, Colors } from "react-native-paper";



// import { ProductCard } from "../components/Configuration/components/ProductCard.Component";
import { ProductsContext } from "../Services/Product/product.context";
import { LeaderBoardCard } from "../components/Configuration/components/LeaderBoard/LeaderBoardCard.Component";



const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const LeaderBoardView = ({ navigation }) => {
  const { isLoading, isError, products, users } = useContext(ProductsContext);
 
  return (
    <>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <View>
      <View style={[styles.iOSTitleContainer]}>
                    <Text style={styles.iOSTitle}>
                        Leader Board
                    </Text>
      </View>
      <FlatList
        data={users}
        style={{marginBottom: 50}}
        renderItem={({ item }) => {
          
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("LeaderBoardDetail", { user: item })
              }
            >
              <LeaderBoardCard user={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 8 }}
        //extraData={selectedId}
      />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  iOSTitleContainer: {
    width: 100 * Dimensions.get('window').width / 100,
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: '#175851',
    backgroundColor: '#175851'
},
iOSTitle: {
    marginBottom: 13,
    marginTop: 15,
    fontSize: 20,
    lineHeight: 25,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0)'
},
});