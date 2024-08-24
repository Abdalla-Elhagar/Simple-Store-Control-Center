import { Routes , Route } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import Home from './components/pages/home'
import Control from './components/pages/control'


function App() {

  return (
    <div>
      <Header />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/control' element={<Control />} />
      </Routes>

    </div>
  )
}

export default App
