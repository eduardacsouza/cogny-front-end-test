import React, { useState } from "react";
import { View, Text, Image, Button, StyleSheet, TextInput } from "react-native";

const ProductCard = () => {
  const [quantity, setQuantity] = useState(1);

  const product = {
    name: "Produto Exemplo",
    price: 29.99,
    image: "https://via.placeholder.com/150", // URL de uma imagem fictícia
  };

  const handleQuantityChange = (value) => {
    setQuantity(Math.max(1, parseInt(value, 10) || 1));
  };

  const handleAddToCart = () => {
    // Aqui você pode chamar a função que adiciona o produto ao carrinho
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

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  productImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
  },
  productInfo: {
    marginTop: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 16,
    color: "#2c3e50",
  },
  productActions: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  quantityInput: {
    width: 50,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ddd",
    textAlign: "center",
  },
});

export default ProductCard;
