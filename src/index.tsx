import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import theme from "./material-ui/theme";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> Global CSS */}
      <Router>
      <App />
      <Footer />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
