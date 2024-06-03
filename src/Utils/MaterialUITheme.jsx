import "@/Components/Portfolio/Styles/Fonts.css";

// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Chamran", // Use your custom font
      "Roboto", // Fallback font
      "Arial", // Fallback font
      "sans-serif", // Generic fallback
    ].join(","),
  },
});

export default theme;
