import { useState } from "react";
import NavBar from "../NavBar";
function RecuperarSenha(){
    const [mail,setEmail] = useState();
    function enviar(e){
        e.preventDefault();
    }
    return(
        <>
        <NavBar/>
        <div class="wrapper fadeInDown">
            <div id="formContent">
              <div class="fadeIn first">
                <h1>Recuperar senha</h1>
              </div>
              <form id="form" onSubmit={enviar}>
                <input type="email" id="acesso" class="fadeIn second" name="acesso" placeholder="Digite seu E-mail" required/>
                <input type="submit" class="fadeIn fourth" value="Enviar" onClick={(e)=>setEmail(e.target.value)}/>
              </form>
              <div class="fadeIn first" id="info"></div>
              {mail &&(
                <div id="info">
                    Se o seu email estiver no nosso banco de dados você receberá um link para redefinir sua senha
                </div>
              )


              }
              </div>
              </div>
        </>
    )
    
    
}
export default RecuperarSenha;