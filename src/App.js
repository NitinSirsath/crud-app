import React from 'react'
import { Routes , Route  } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Navigation from './components/Navigation'
import NotFound from './components/NotFound'

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route  path='/contact' element={<Contact />}/>
        <Route   element={<NotFound />}/>
      </Routes>
    </div>
  )
}

export default App