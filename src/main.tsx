import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import "./index.css";
import { MarketApp } from "./MarketApp";
import { client } from "./apollo";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <MarketApp />
        </BrowserRouter>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
);
