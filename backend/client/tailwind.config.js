/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "friend-bg": "url('src/misc/friends.jpg')",
      },
    },
  },
  plugins: [],
};
