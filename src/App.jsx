import './App.css'
import Sidebar from './Sidebar'
import Home from './Home'
import Header from './Header'
import { useState } from 'react'
function App() {
  const [openSidebar, setOpenSidebar] = useState(false)
  const openSide = () =>{
    setOpenSidebar(!openSidebar)
  }
  return (
    <div className='grid-container'>
        <Header openSide={openSide}/>
        <Sidebar openSidebar={openSidebar} openSide={openSide} />
        <Home/>
    </div>
  )
}

export default App
