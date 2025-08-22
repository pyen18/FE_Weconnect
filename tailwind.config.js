/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,jsx}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1DA1F2",
        secondary: "#14171A",
      },
      spacing: {
        128: "32rem", // ví dụ thêm spacing tuỳ chỉnh
      },
    },
  },
  plugins: [],
}
