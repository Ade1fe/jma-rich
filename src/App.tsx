import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import './App.css'
import ContactForm from './components/ContactForm'
import AfricandiLanding from './components/LandingPage'
import AboutStudio from './components/AboutStudio'
import ServicesPage from './components/ServicesPage'
import InquirePage from './components/InquirePage'
import BlogPage from './components/BlogPage'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContactForm />} />
        <Route path="/home" element={<AfricandiLanding />} />
          <Route path="/about" element={<AboutStudio />} />
              <Route path="/service" element={<ServicesPage />} />
               <Route path="/inquire" element={<InquirePage />} />
                  <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App