import "./cartPopup.css";
import { useCart } from "../../hooks/useCart";
import { useEffect } from "react";

const CartPopup = ({ onClose }) => {
    const { cartItems, clearCart } = useCart();

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleCheckout = () => {
        alert("Pedido finalizado com sucesso!");
        clearCart();
    };

    useEffect(() => {
        // Desabilita o scroll da página quando o popup for aberto
        document.body.style.overflow = "hidden";

        // Restaura o scroll da página quando o popup for fechado
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div className="cart-overlay" onClick={onClose}>
            <div className="popup" onClick={(e) => e.stopPropagation()}>
                <div className="cart-header">
                    <span>PRODUTO</span>
                    <span>QTD</span>
                    <span>PREÇO</span>
                </div>
                <div className="cart-items">
                    {cartItems.length === 0 ? (
                        <p className="empty-cart">Seu carrinho está vazio.</p>
                    ) : (
                        cartItems.map((item) => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-item-image" />
                                <div className="cart-item-info">
                                    <span className="cart-item-name">{item.name}</span>
                                    <strong>R${item.price}</strong>
                                </div>
                                <input type="number" value={item.quantity} className="cart-item-quantity" readOnly />
                                <span className="cart-item-price">R${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        ))
                    )}
                </div>
                <div className="cart-footer">
                    <button className="checkout-button" onClick={handleCheckout}>FINALIZAR PEDIDO</button>
                    <div className="cart-total">
                        <span>TOTAL</span>
                        <strong>R$ {totalPrice.toFixed(2)}</strong>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPopup;
