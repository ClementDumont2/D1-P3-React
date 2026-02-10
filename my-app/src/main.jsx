import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { WitcherProvider } from './context/WitcherContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WitcherProvider>
      <App />
    </WitcherProvider>
  </StrictMode>,
)
