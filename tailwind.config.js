module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "node_modules/swiper/swiper-bundle.css",
  ],

  theme: {
    extend: {
      colors: {
        header: "#374151",
        footer: "#1F2937",
        textPrimary: "#1F2937",
        textSecondary: "#6B7280",
        customColorStart: "rgb(100 116 139 / var(--tw-bg-opacity, 1))",
        customColorEnd: "rgb(71 85 105 / var(--tw-bg-opacity, 1))",
      },
      backgroundImage: (theme) => ({
        "custom-gradient":
          "linear-gradient(to bottom, rgb(100 116 139 / var(--tw-bg-opacity, 1)), rgb(71 85 105 / var(--tw-bg-opacity, 1)))",
      }),
    },
  },
  plugins: [],
};
