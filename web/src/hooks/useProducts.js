import { useState, useEffect } from "react";
import { db } from "../firebase.js";
import { collection, getDocs } from "firebase/firestore";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "products"));
                const productList = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProducts(productList);
            } catch (err) {
                setError("Erro ao carregar produtos.");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return { products, loading, error };
};

export default useProducts;
