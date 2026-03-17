import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Allprojects from './projects/Allprojects.jsx'
import ScrollToTop from './ScrollToTop/ScrollToTop.jsx'
import Viewallskills from './Viewallskills.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
     <ScrollToTop />
        <Routes>
      <Route path="/" element={<App />} />
      <Route path="/allprojects" element={<Allprojects />} />
      <Route path="/viewallskills" element={<Viewallskills />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
    </BrowserRouter>
    
  </StrictMode>,
)
