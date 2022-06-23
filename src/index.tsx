import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material";
import { purple } from "@mui/material/colors";

const container = document.getElementById("root")!;
const root = createRoot(container);
const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: "#F6FBF4",
    },
  },
});

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
);
