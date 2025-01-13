import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QrCode } from './components/QrCode.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <QrCode />
  </StrictMode>,
)

