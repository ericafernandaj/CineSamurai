import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Filmes from './pages/Filmes/Filmes'
import Login from './pages/Login/Login'
import { GlobalStyle } from './style/GlobalStyle'
import { tema } from './style/theme'
import { ThemeProvider } from 'styled-components'
import VendasOnline from './pages/VendasOnline/VendasOnline'


const Rotas = () => {
  return (

    <BrowserRouter>
      <ThemeProvider theme={tema}>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Filmes' element={<Filmes />} />
          <Route path='/VendasOnline' element={<VendasOnline />} />
          <Route path='/Login' element={<Login />} />
        </Routes>

      </ThemeProvider>
    </BrowserRouter>

  )
}

export default Rotas
