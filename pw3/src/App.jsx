import { useState } from 'react'
import './App.css'
import SideBar from './components/Sidebar'
import Clientes from './pages/Clientes'
import Produtos from './pages/Produtos'

function App() {
  const [count, setCount] = useState(0)
  const [currentPage, setCurrentPage] = useState('home')

 
  const rendPage = () => {
    if (currentPage === 'clientes') {
      return <Clientes />
    }
    if (currentPage === 'produtos') {
      return <Produtos />
    }
  }

  return (
    <>
      <div className="app">
        <SideBar setCurrentPage={setCurrentPage} />
        <div className="main-content">
          {rendPage()}
        </div>
      </div>
    </>
  )
}

export default App
