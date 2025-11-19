import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './lib/logicpenguin/stylesheets/common.css'
import './lib/logicpenguin/stylesheets/derivations.css'
import './lib/logicpenguin/stylesheets/derivation-hardegree.css'

const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('Root element not found')
}

try {
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
} catch (error) {
  console.error('Failed to render app:', error)
  rootElement.innerHTML = `<div style="padding: 20px; font-family: sans-serif;">
    <h1>Error loading app</h1>
    <p>${error.message}</p>
    <pre>${error.stack}</pre>
  </div>`
}

