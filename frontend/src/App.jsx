
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'


function App() {
  
  return (
   <main className='bg-primary text-tertiary'>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/> 
    </Routes>
    <Footer />
    </BrowserRouter>
   </main>
  )
}

export default App
