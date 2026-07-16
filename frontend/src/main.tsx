import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { StartClient } from "@tanstack/start";
import { getRouter } from "./router"; // createRouter ki jagah getRouter import kiya

// Router instance create kiya aapke getRouter function se
const router = getRouter();

hydrateRoot(
  document,
  <StrictMode>
    <StartClient router={router} />
  </StrictMode>
);
