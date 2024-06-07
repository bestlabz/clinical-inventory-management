import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/css/tailwind.css";
import './i18n.js'

//Imported third party liberary for global state changes
import Provider from "./Redux/Providers/Providers.jsx";

// Local import functions
import ThemeSuspense from "./Components/theme/ThemeSuspense.jsx"


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider>
    <Suspense fallback={<ThemeSuspense />}>
      <App />
    </Suspense>
  </Provider>
);
