// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";

const customTheme = {
  dark: true,
  colors: {
    background: "#37474F",
    surface: "#37474F",
    primary: "#006064",
    secondary: "#00838F",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
};

export default createVuetify({
  theme: {
    defaultTheme: "customTheme",
    themes: { customTheme },
  },
});
