
import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About/about'
import Navbar from './components/Navbar/Navbar'
import Navsticky from './components/Navbar/Navsticky'
import Socialmedia from './socialmedia/socialmedia'
import Home from './Home'
import Projects from './Projects'

function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/projects" element={<Projects/>}/>
     </Routes>
   
    </>
  )
}

export default App
