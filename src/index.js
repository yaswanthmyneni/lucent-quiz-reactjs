import { QuizProvider, ToastProvider } from "context";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <QuizProvider>
          <App />
        </QuizProvider>
      </ToastProvider>
    </BrowserRouter>
  </React.StrictMode>
);
