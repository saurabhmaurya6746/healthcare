import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { StartClient } from '@tanstack/start'
import { createRouter } from './router'

const router = createRouter()

// Agar aap SSR/Hydration use kar rahe hain:
hydrateRoot(
  document,
  <StrictMode>
    <StartClient router={router} />
  </StrictMode>
)
