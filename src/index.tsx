import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ToastContainer } from "react-toastify";
import App from "./App";
import theme from "./material-ui/theme";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CssBaseline } from "@mui/material";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />
        <Router>

          <Header />
          <div
            style={{ 
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
              height: "90vh",
            }}
          >
            <App />
          </div>
          <Footer />
          <ToastContainer position="top-right" />
        </Router>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
