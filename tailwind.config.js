/** @type {import('tailwindcss').Config} */
// More config please check here: https://tailwindcss.com/docs/configuration
export default {
  content: ["./src/**/*.{html,js,tsx}", "./index.html"],
  theme: {
    extend: {
      animation: {
        flash: "flash 4s linear infinite",
      },
      backgroundImage: {
        flash:
          "linear-gradient(to right, #20375d 0%,#20375d 35%,rgba(0, 0, 0, 0.3) 50%, #20375d 65%,#20375d 100%);",
      },
      keyframes: {
        flash: {
          "0%": {
            backgroundPosition: "200% 50%",
          },
          "100%": {
            backgroundPosition: "-200% 50%",
          },
        },
      },
    },
  },
  plugins: [],
};
