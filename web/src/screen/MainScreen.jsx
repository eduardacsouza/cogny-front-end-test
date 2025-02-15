import Navbar from "../components/navbar/navbar.jsx";
import ProductList from "../components/productList/productList.jsx";
import "./MainScreen.css";
import { CartProvider } from "../hooks/useCart.js";


const MainScreen = () => {
    return (
        <div className="container">
            <CartProvider>
                <Navbar />
                <ProductList/>
            </CartProvider>
        </div>
    );
}

export default MainScreen;
