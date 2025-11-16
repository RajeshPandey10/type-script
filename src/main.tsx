// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.tsx";
// import { Provider } from "react-redux";
// import {store} from "./redux/store.ts";

// createRoot(document.getElementById("root")!).render(
// <Provider store={store}>
//     <StrictMode>

//     <App />
//   </StrictMode>
// </Provider>
// );

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";


createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
 
      <PersistGate loading={null} persistor={persistor}>
        <StrictMode>
          <App />
        </StrictMode>
      </PersistGate>
   
  </Provider>
);
