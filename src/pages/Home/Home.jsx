import React from 'react'
import Header from '../../components/views/Header/Header'
import{StyleHome} from '../Home/home.style'
import Footer from '../../components/views/Footer/Footer'
import Bannercine1 from '../../components/views/Banners/BannerCine1/BannerCine1'
import Input from '../../components/views/Input/Input'
const Home = () => {
      return (
    <StyleHome> 
      <Input/>
    <Header/>
    <Bannercine1/>
    <Footer/>
    </StyleHome>
   
  )
}

export default Home