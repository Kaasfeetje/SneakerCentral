import CartContextComponent from "../components/Context/CartContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <CartContextComponent>
            <Component {...pageProps} />
        </CartContextComponent>
    );
}

export default MyApp;
