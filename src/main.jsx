import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./routes/Routes";
import AuthProvider from "./provider/AuthProvider";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <div className="max-w-screen-xl mx-auto">
        <AuthProvider>
          <Toaster />
          <RouterProvider router={Routes} />
        </AuthProvider>
      </div>
    </QueryClientProvider>
  </React.StrictMode>
);
