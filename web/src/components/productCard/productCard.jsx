import React, { useState } from "react";
import { View, Text, Image, Button, StyleSheet, TextInput } from "react-native";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (value) => {
    setQuantity(Math.max(1, parseInt(value, 10) || 1));
  };

  const handleAddToCart = () => {
    console.log(`Produto ${product.name} adicionado ao carrinho! Quantidade: ${quantity}`);
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>R${product.price.toFixed(2)}</Text>
      </View>
      <View style={styles.productActions}>
        <TextInput
          style={styles.quantityInput}
          value={String(quantity)}
          onChangeText={handleQuantityChange}
          keyboardType="numeric"
        />
        <Button title="Adicionar ao Carrinho" onPress={handleAddToCart} />
      </View>
    </View>
  );
};


export default ProductCard;