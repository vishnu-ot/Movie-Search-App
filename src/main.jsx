import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import { FormContextProvider } from "./context/FormContext.jsx";
import { MovieContextProvider } from "./context/Moviecontext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <FormContextProvider>
          <MovieContextProvider>
            <App />
          </MovieContextProvider>
        </FormContextProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
