import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";

// Router instance initialize kiya aapke router.tsx function se
const router = getRouter();

// Kyunki html/body elements ko __root.tsx khud control kar raha hai,
// hum direct poore document par hi react-app ko render karenge.
const root = createRoot(document);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
