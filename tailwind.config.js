// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5", // 主色調
        secondary: "#10B981", // 次色調
        neutral: "#F3F4F6", // 中性色調
        warning: "#F59E0B", // 警示色調
        header: "#374151", // Header 背景色
        footer: "#1F2937", // Footer 背景色
        textPrimary: "#1F2937", // 主要文字顏色
        textSecondary: "#6B7280", // 次要文字顏色
        customColorStart: "rgb(100 116 139 / var(--tw-bg-opacity, 1))",
        customColorEnd: "rgb(71 85 105 / var(--tw-bg-opacity, 1))",
      },
    },
  },
  plugins: [],
};
