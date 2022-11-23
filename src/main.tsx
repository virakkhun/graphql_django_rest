import { ApolloProvider } from "@apollo/client";
import { client } from "./api/appolo.client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Index from "./pages";
import User from "./pages/people";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Planet from "./pages/planet";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/people/:userId",
    element: <User />,
  },
  {
    path: "/planet/:planetId",
    element: <Planet />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </ApolloProvider>
  </React.StrictMode>
);
