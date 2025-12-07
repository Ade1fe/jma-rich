import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import ContactForm from './components/ContactForm'
import AfricandiLanding from './components/LandingPage'
import AboutStudio from './components/AboutStudio'
import ServicesPage from './components/ServicesPage'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContactForm />} />
        <Route path="/home" element={<AfricandiLanding />} />
          <Route path="/about" element={<AboutStudio />} />
              <Route path="/service" element={<ServicesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App