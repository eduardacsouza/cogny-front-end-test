import { useState } from "react";
import "./productCard.css";

const ProductCard = ({ product, onAddToCart }) => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (event) => {
        const value = Math.max(1, parseInt(event.target.value, 10) || 1);
        setQuantity(value);
    };

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">
                    R${Number(product.price).toFixed(2)}
                </p>
            </div>
            <div className="product-actions">
                <button className="add-to-cart" onClick={() => onAddToCart(product, 1)}>
                    <span className="quantity-value">1</span>
                    <span className="cart-text">ADICIONAR AO CARRINHO</span>
                </button>
            </div>
        </div>
    );
};

export default ProductCard;