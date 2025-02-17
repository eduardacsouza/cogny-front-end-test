import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, Text, Button } from "react-native";
import ProductCard from "../productCard/productCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Mock dos dados do produto
    const mockProducts = [
      {
        id: "1",
        name: "Produto 1",
        price: 29.99,
        image: "https://via.placeholder.com/150",
      },
      {
        id: "2",
        name: "Produto 2",
        price: 49.99,
        image: "https://via.placeholder.com/150",
      },
      {
        id: "3",
        name: "Produto 3",
        price: 19.99,
        image: "https://via.placeholder.com/150",
      },
    ];

    setProducts(mockProducts);
  }, []);

  const addToCart = (product, quantity) => {
    // Função mockada de adicionar ao carrinho
    console.log(`Adicionado ao carrinho: ${product.name}, Quantidade: ${quantity}`);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            key={item.id}
            product={item}
            onAddToCart={addToCart}
          />
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
