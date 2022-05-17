import React, { useContext } from "react";
import { FlatList, TouchableOpacity, View, Image, StyleSheet, Text,   Platform,
  StatusBar,
  Dimensions } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator, Colors } from "react-native-paper";




import { ProductsContext } from "../Services/Product/product.context";
import { ProductCard } from "../components/Configuration/components/components/ProductCard.Component";


const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const ProductView = ({ navigation }) => {
  const { isLoading, isError, products } = useContext(ProductsContext);
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
                        NFT Market Place
                    </Text>
      </View>
      <FlatList
        data={products}
        style={{marginBottom: 50}}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ProductDetail", { product: item })
              }
            >
              <ProductCard product={item} />
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