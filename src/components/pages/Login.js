import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import NavBar from '../NavBar';
import { Link } from 'react-router-dom';
function Login(){
return (
<>
        <NavBar></NavBar>
        <div class="wrapper fadeInDown">
            <div id="formContent">
              <div class="fadeIn first">
                <h1>Logar-se</h1>
              </div>

              <form>
                <input type="text" id="login" class="fadeIn second" name="login" placeholder="login"/>
                <input type="text" id="password" class="fadeIn third" name="login" placeholder="password"/>
                <input type="submit" class="fadeIn fourth" value="Log In"/>
              </form>
              <div id="formFooter">
                <Link class="underlineHover" to="/redefinir-senha">Esqueceu a Senha?</Link> <br/>
                <Link class="underlineHover" id="cadastro" to="/cadastro">Cadastre-se</Link>
              </div>
            </div>
          </div>
    </>
)
}
export default Login;