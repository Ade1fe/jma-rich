import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import ContactForm from './components/ContactForm'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContactForm />} />
        {/* <Route path="/contact" element={<ContactForm />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App