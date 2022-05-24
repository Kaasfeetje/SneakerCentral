import Header from "../components/Header/Header";

export default function Home() {
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
            <section>
                
            </section>
        </div>
    );
}
