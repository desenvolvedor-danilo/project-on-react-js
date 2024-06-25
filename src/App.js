import './components/pages/style.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Contato from './components/pages/Contato';
import Empresa from './components/pages/Empresa';
import Login from './components/pages/Login';
import Cadastro from './components/pages/Cadastro';
import RecuperarSenha from './components/pages/RecuperarSenha';
import MelhorEsporte from './components/pages/MelhorEsporte';
function App() {

  return (
<Router>
  <div>
<Switch>
  <Route exact path="/">
    <Home/>
  </Route>
  <Route path="/sobre">
    <Empresa/>
  </Route>
  <Route path="/camisa">
    <Contato/>
  </Route>
  <Route path="/login">
<Login/>
  </Route>
  <Route path="/cadastro">
    <Cadastro/>
  </Route>
  <Route path="/redefinir-senha">
    <RecuperarSenha/>
  </Route>
  <Route path="/melhor-esporte">
    <MelhorEsporte/>
  </Route>
</Switch>
  </div>
</Router>
  )
}

export default App;
