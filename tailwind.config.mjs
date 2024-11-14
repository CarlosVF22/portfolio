/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                red_personal_brand: "#A6033F",
                pink_personal_brand: "#F20587",
                pink_light_personal_brand: "#F205B3",
                purple_personal_brand: "#8350F2",
                purple_light_personal_brand: "#9E77F2",
            },
        },
    },
    plugins: [],
};
