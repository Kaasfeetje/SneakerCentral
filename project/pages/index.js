import { useEffect } from "react";
import Category from "../components/Category/Category";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ProductCard from "../components/ProductCard/ProductCard";
import { fetchProducts } from "./api/product";

export async function getStaticProps() {
    const products = await fetchProducts();

    return {
        props: {
            products,
        },
    };
}

export default function Home({ products }) {
    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        if (query.get("success")) {
            console.log(
                "Order placed! You will receive an email confirmation."
            );
        }

        if (query.get("canceled")) {
            console.log(
                "Order canceled -- continue to shop around and checkout when you’re ready."
            );
        }
    }, []);

    return (
        <div>
            <Header />
            <main className="hero-image px-4">
                <h2 className="pt-48 text-3xl font-bold text-white md:pt-64 md:text-5xl lg:text-7xl">
                    2022
                </h2>
                <h1 className="font-bold text-4xl text-white uppercase md:text-7xl lg:text-9xl">
                    New collection
                </h1>
                <h3 className="text-3xl text-white font-normal font-bellefair text-opacity-75 mt-4 md:text-5xl">
                    Sneaker Central
                </h3>
                <button className="mt-16 border-4 border-brown text-brown px-2 py-1 rounded-lg uppercase text-xl font-bold md:text-2xl">
                    Shop now
                </button>
            </main>
            <section className="md:flex">
                <Category gender="Men" image={"/images/1.jpg"} />
                <Category gender="Women" image={"/images/2.jpg"} />
            </section>
            <section className="md:flex">
                <ProductCard
                    color="#CA021C"
                    textColor="#fff"
                    product={products[0]}
                />
                <ProductCard
                    color="#F8F9FB"
                    textColor="#000"
                    product={products[1]}
                />
                <ProductCard
                    color="#008CFF"
                    textColor="#fff"
                    product={products[2]}
                />
            </section>
            <Footer />
        </div>
    );
}
