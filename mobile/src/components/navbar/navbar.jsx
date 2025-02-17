import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import styles from "./styles";

export default function Navbar() {
  return (
    <View style={styles.navbar}>
      {/* Logo */}
      <Image source={require("../../assets/logo.png")} style={styles.logo} />
      
      {/* Botão */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Carrinho</Text>
      </TouchableOpacity>
    </View>
  );
}
