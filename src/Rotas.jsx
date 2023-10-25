import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Filmes from "./pages/Filmes/Filmes";
import Login from "./pages/Login/Login";
import { GlobalStyle } from "./style/GlobalStyle";
import { tema } from "./style/theme";
import { ThemeProvider } from "styled-components";
import VendasOnline from "./pages/VendasOnline/VendasOnline";
import Cadastro from "./pages/Cadastro/Cadastro";
import Poltrona from "./pages/Poltrona/Poltrona";
import Pagamentos from "./pages/Pagamentos/Pagamentos";
import QuemSomos from "./pages/QuemSomos/QuemSomos";
import AreaUsuario from "./pages/AreaUsuario/AreaUsuario";
import PrivateRoute from "./Rotas/PrivateRoute";
import Ingresso from "./pages/Ingresso/Ingresso";
import Spinner from "./components/common/Spinner/Spinner";
import { useState } from "react";
import { useEffect } from "react";


const Rotas = () => {
  const [load, setLoad] = useState(true);
  useEffect(() =>{
    setTimeout(() =>{
      setLoad(false);
    },3000)
  },[])
  return (
  
    <BrowserRouter>
      <ThemeProvider theme={tema}>
      <GlobalStyle />
      {
      load?
      <Spinner/>
      :
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Filmes" element={<Filmes />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/QuemSomos" element={<QuemSomos />} />
        <Route
          path="/AreaUsuario"
          element={
            <PrivateRoute>
              <AreaUsuario />
            </PrivateRoute>
          }
        />
        <Route
          path="/VendasOnline"
          element={
            <PrivateRoute>
              <VendasOnline />
            </PrivateRoute>
          }
        />
        <Route
          path="/Poltrona"
          element={
            <PrivateRoute>
              <Poltrona />
            </PrivateRoute>
          }
        />
        <Route
          path="/Pagamentos"
          element={
            <PrivateRoute>
              <Pagamentos />
            </PrivateRoute>
          }
          
        />
        <Route
          path="/Ingresso"
          element={
            <PrivateRoute>
              <Ingresso />
            </PrivateRoute>
          }
          
        />

        
      </Routes>
      }
      </ThemeProvider>
      </BrowserRouter>
  );
};

export default Rotas;
