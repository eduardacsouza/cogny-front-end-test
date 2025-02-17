import React from "react";
import { View, FlatList, StyleSheet, ActivityIndicator, Text } from "react-native";
import ProductCard from "../productCard/productCard";
import useProducts from "../hooks/useProducts"; // Importa o hook

const ProductList = () => {
  const { products, loading, error } = useProducts();

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard key={item.id} product={item} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default ProductList;
