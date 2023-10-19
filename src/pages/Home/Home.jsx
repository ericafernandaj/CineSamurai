import Header from '../../components/views/Header/Header'
import{StyleHome} from '../Home/home.style'
import Footer from '../../components/views/Footer/Footer'
import Bannercine1 from '../../components/views/Banners/BannerCine1/BannerCine1'

const Home = () => {
      return (
    <StyleHome> 
    <Header/>
    <Bannercine1/>
    <Footer/>
    </StyleHome>
   
  )
}

export default Home