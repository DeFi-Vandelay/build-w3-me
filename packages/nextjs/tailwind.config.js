/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  darkTheme: "dark",
  darkMode: ["class", "[data-theme='dark']"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#111827",
          "base-100": "#F9FAFB",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
      {
        dark: {
          primary: "#2563EB",
          "primary-content": "#F9FAFB",
          secondary: "#059669",
          "secondary-content": "#F9FAFB",
          accent: "#D97706",
          "accent-content": "#F9FAFB",
          neutral: "#F9FAFB",
          "neutral-content": "#1F2937",
          "base-100": "#1F2937",
          "base-200": "#374151",
          "base-300": "#4B5563",
          "base-content": "#F9FAFB",
          info: "#2563EB",
          success: "#059669",
          warning: "#D97706",
          error: "#DC2626",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
            "--tooltip-color": "oklch(var(--p))",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
    ],
  },
  theme: {
    extend: {
      boxShadow: {
        center: "0 0 12px -2px rgb(0 0 0 / 0.05)",
      },
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
};
