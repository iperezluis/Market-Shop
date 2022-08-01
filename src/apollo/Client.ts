import { ApolloClient, InMemoryCache } from "@apollo/client";
// import dotenv from "dotenv";
// dotenv.config();

export const client = new ApolloClient({
  // uri: import.meta.env.URL_SERVER,
  uri: "http://localhost:5000",
  cache: new InMemoryCache(),
});
