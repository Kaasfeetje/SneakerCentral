module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                bellefair: ["Bellefair", "serif"],
            },
            colors: {
                brown: "#C6AC8F",
                grayishBlue: "#22333B",
                beige: "#EAE0D5",
                darkBrown: "#0A0908",
            },
            height: {
                100: "30rem",
            },
        },
    },
    plugins: [],
};
