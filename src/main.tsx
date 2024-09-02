import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./queryClient";

import { routeTree } from "./routeTree.gen";
const router = createRouter({ routeTree });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
