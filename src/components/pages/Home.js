
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/style.css'
import NavBar from '../NavBar';
import chamaris1 from '../pages/imagens/cupom1-desk.webp'
import chamaris2 from '../pages/imagens/cupom22-desk.webp'
import chamaris3 from '../pages/imagens/cupom33-desk.webp'
import chamaris4 from '../pages/imagens/cupom4-desk_V2.webp'
import Slide from '../Slide';
import { Link } from 'react-router-dom';

function Home(){
    return(
        <>
        <Slide></Slide>
          <NavBar></NavBar> 
          <section id="chamaris">
              <img src={chamaris1} alt="fardamento puma" className="ofertas"/>
              <img src={chamaris2} alt="fardamento puma" className="ofertas"/>
              <img src={chamaris3} alt="fardamento puma" className="ofertas"/>
              <img src={chamaris4} alt="fardamento puma" className="ofertas"/>
              
          </section>

          <h1 id="titulo-oferta">Ofertas do dia</h1>
            <p id="paragrafo-oferta">Aproveite enquanto durar o estoque</p>
          <section id="produtos">
            <Link to="/nike"><img src={require("./imagens/desk11.avif")} alt="" className="img-resp"/></Link>
            <Link to="/gammaforce"><img src={require("./imagens/desk222.avif")} alt="" className="img-resp"/></Link>
            <Link to="/teniseseries"><img src={require("./imagens/desk33.avif")} alt="" className="img-resp"/></Link>
           <Link to="/roupasinverno"><img src={require("./imagens/mob4.avif")} alt="fardamento puma" className="img-resp" id="img4"/></Link> 
          </section>
    </>
    )
}
export default Home;