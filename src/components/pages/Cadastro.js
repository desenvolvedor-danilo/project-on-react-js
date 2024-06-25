import NavBar from "../NavBar";

function Cadastro(){
    return (
        <>
        <NavBar></NavBar>
        <div class="wrapper fadeInDown">
        <div id="formContent">
          <div class="fadeIn first">
            <h1>Cadastrar-se</h1>
          </div>
      <form>
        <input type="email" id="email" class="fadeIn second" name="cadastro" placeholder="E-mail" required/>
        <input type="text" id="login" class="fadeIn second" name="cadastro" placeholder="Username" required/>
        <input type="password" id="senha" class="fadeIn second" name="cadastro" placeholder="Password" required/>
        <input type="tel" id="cpf" class="fadeIn second" name="cadastro" placeholder="CPF" required/>
        <input type="tel" id="cep" class="fadeIn second" name="cadastro" placeholder="CEP" required/>
        <input type="submit" class="fadeIn fourth" value="Cadastrar"/>
      </form>
</div>
</div>
</>
    )
}
export default Cadastro;