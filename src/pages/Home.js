import Navbar from '../components/Navbar/Navbar';
import Slider from '../components/Slider/Slider';
import Search from '../components/Search/Search';
import Card from '../components/Card/Card';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Slider 
        imageLink='https://assets.nintendo.com/image/upload/c_fill,f_auto,h_693,q_auto,w_1920/ncom/en_US/merchandising/center-stage-banner/Metroid%20Dread/Centerstages_Ncom_1366x493_desktop_metroid'
        alt='Metroid Dread'
        classificationNumber='10'
        classificationText='Violência, Conteúdo Sexual'
      />
      <Search />
      <Container title='Mais vendidos'>
        <Card 
          image='https://assets.nintendo.com/image/upload/c_pad,f_auto,h_613,q_auto,w_1089/ncom/pt_BR/games/switch/m/mario-kart-8-deluxe-switch/hero?v=2021111315'
          title='Mario Kart™ 8 Deluxe'
          preco='299,00'
        />
      </Container>
      <Footer />
    </>
  )
}