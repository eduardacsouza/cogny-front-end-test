import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Navbar from "../components/navbar/navbar";
import ProductList from "../components/productList/productList";

export default function MainScreen() {
  return (
    <View>
        <Navbar/>
        <ProductList/>
    </View>
  );
}


