/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                header: ["Poppins", "sans-serif"],
                body: ["Inter", "sans-serif"]
            },
            colors: {
                primary: "#5C4033",
                bg: "#F8F5F0",
                primaryText: "#2D2420",
                secondary: "#766054",
                accent: "#8B4513",
                highlight: "#D4A373",
                success: "#3F704D" ,
                error: "#9B2C2C",
            }
        },
    },
    plugins: [],
};
