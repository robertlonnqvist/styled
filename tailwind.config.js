export default {
  content: ["./src/**/*.{ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        gray: {
          950: "#2f343f",
        },
      },
      fontFamily: {
        mono: [
          "Jetbrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
