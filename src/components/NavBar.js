import { Link } from "react-router-dom";
import styles from './pages/style.css'
import './pages/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
function NavBar(){
    return (
      <>
      <nav className="navbar navbar-dark bg-dark fixed-top" id="navegar">
        <div className="container-fluid">
          
          <Link className="navbar-brand" to="/"><img src={require('./pages/imagens/2985284b-260f-4cea-a4d8-9c8f72234f6f.png')} alt="dk modas" width="68" height="61" id={styles.logo}/></Link>             
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel"><Link to="/login" id={styles.acesso_login}><img src={require('./pages/imagens/pngegg.png')} alt="icone login" width="25" height="25"/></Link>
                </h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <Link className="nav-link active" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/sobre">Quem somos</Link>
                  </li>
                    <li className="nav-item dropdown">
                      <Link className="nav-link dropdown-toggle" to="/masculino" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Moda masculina
                      </Link>
                      <ul className="dropdown-menu dropdown-menu-dark">
                        <li><Link className="dropdown-item" to="/camisas">Camisas</Link></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><Link className="dropdown-item" to="/camisetas">Camisetas</Link></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><Link className="dropdown-item" to="/calcas">Calças</Link> </li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><Link className="dropdown-item" to="/tenis">Tênis</Link></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><Link className="dropdown-item" to="/sapatos">Sapatos</Link></li>
                      </ul>
                      </li>
                    <li className="nav-item dropdown">
                      <Link className="nav-link dropdown-toggle" to="/feminina" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Moda feminina
                      </Link>
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li><Link className="dropdown-item" to="/camisasfemininas">Camisas</Link></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><Link className="dropdown-item" to="/camisetasfemininas">Camisetas</Link></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><Link className="dropdown-item" to="/calcasfemininas">Calças</Link> </li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><Link className="dropdown-item" to="/tenisfemininas">Tênis</Link></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><Link className="dropdown-item" to="/sapatosfemininos">Sapatos</Link></li>
          
                        <li><hr className="dropdown-divider"/></li>
                        </ul>
                        </li>
                        <li>
                        <Link className="nav-link dropdown-toggle" to="/infantil" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Moda infantil
                        </Link>
                      <ul className="dropdown-menu dropdown-menu-dark">
                        <li><Link className="dropdown-item" to="/camisasinfantis">Camisas</Link></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><Link className="dropdown-item" to="/camisetasinfantis">Camisetas</Link></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><Link className="dropdown-item" to="/calcasinfantis">Calças</Link> </li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><Link className="dropdown-item" to="/tenisinfantis">Tênis</Link></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><Link className="dropdown-item" to="/sapatosinfantis">Sapatos</Link></li>
                    </ul>
                  </li>
                </ul>
                
              </div>
            </div>
          </div>
        </nav>
        
</>
    )
}
export default NavBar;
