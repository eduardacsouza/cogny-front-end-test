import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import ProductCard from "../productCard/productCard";
import "./productList.css";
import {useCart} from "../../hooks/useCart";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const { addToCart } = useCart();

    useEffect(() => {
        const fetchProducts = async () => {
            const querySnapshot = await getDocs(collection(db, "products"));
            const productList = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            setProducts(productList);
        };

        fetchProducts();
    }, []);

    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
            ))}
        </div>
    );
};

export default ProductList;
