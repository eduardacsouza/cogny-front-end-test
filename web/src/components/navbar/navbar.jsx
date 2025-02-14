import "./navbar.css";
import logo from "./logo.png";
import { useState } from "react";  
import CartPopup from "../cartPopup/cartPopup";
import {useCart} from "../../hooks/useCart";

const Navbar = () => {
    const { cartCount } = useCart(); // Pegando a contagem diretamente do contexto
    const [isPopupVisible, setIsPopupVisible] = useState(false); 

    const togglePopup = () => {
        setIsPopupVisible(!isPopupVisible);
    };

    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo" />
            <button className="cart-button" onClick={togglePopup}>
                <span className="cart-title">Meu Carrinho</span>
                <span className="cart-count">
                    {cartCount} {cartCount === 1 ? "item" : "itens"}
                </span>
            </button>

            {isPopupVisible && <CartPopup onClose={togglePopup} />}
        </nav>
    );
};

export default Navbar;
