import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router"; // StartClient ki jagah RouterProvider
import { getRouter } from "./router";

const router = getRouter();

// Client-side single page app ke liye standard root rendering
const rootElement = document.getElementById("root");

if (rootElement && !rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
