import { Link } from "react-router-dom";
import { useEffect } from "react";
import './style.css';
import NavBar from '../NavBar';

function MelhorEsporte(){
   useEffect(()=>{
    const script = document.createElement('script');
    
    script.textContent=
    
    `
    for(let b = 0;b<document.getElementsByClassName("tenis").length;b++){
      
      let precoAntigo = document.getElementsByClassName("preco-antigo").item(b);
      let preco = document.getElementsByClassName("precos").item(b);
      let percentual = document.getElementsByClassName("per").item(b);
      
      let textPrecoAntigo = precoAntigo.textContent;
      let i = textPrecoAntigo.trim().lastIndexOf("$");
      let nTextPrecoAntigo = textPrecoAntigo.substring(i+1);
      
      let textPreco = preco.textContent;
      let j = textPreco.trim().lastIndexOf("$");
      let ult = textPreco.trim().lastIndexOf("n")
      let nTextPreco = textPreco.substring(j+1,ult);
      
      let parseado1 = Number.parseInt(nTextPreco)+1;
      let parseado2 = Number.parseInt(nTextPrecoAntigo)+1;
      
      let desconto = 100 - parseado1/parseado2 * 100 
      percentual.textContent = "-" + desconto.toFixed(0) + "%"
    }` 
    script.async=true;
    document.body.appendChild(script);
    return ()=> {
      document.body.removeChild(script);
    }
},[])

    
    return(
        <>
        <NavBar></NavBar>
        <div className="corra-com-dkmodas">  
            <Link to="/">
              <div>
                <h3 className="per">.</h3>
                <h1 className="tenis"><img src={require("./imagens/download.jpeg")} alt=""/></h1>
                <h2 className="lancamento">Lançamento</h2>
                <p  className="nome-produto">Tênis nike revolution 7 - Masculino</p>
                <p  className="preco-antigo">R$ 399,99</p>
                <p  className="precos">R$ 299,99 no Pix</p>
                <p  className="outras-cores">Mais opções de cores</p>
              </div>
            </Link>
            <Link to="/">
              <div>
                <h3 className="per">.</h3>
                <h1 className="tenis"><img src={require("./imagens/images.jpeg")} alt=""/></h1>
                <h2 className="lancamento">Lançamento</h2>
                <p  className="nome-produto">Tênis mizuno wave dynasty 6 - Feminino</p>
                <p  className="preco-antigo">R$ 499,99</p>
                <p  className="precos">R$ 314,99 no Pix</p>
                <p  className="parcelado">ou 4x de R$ 87,50</p>
                <p  className="outras-cores">Mais opções de cores</p>
              </div>
            </Link>
            <Link to="/">
              <div>
                <h3 className="per">.</h3>
                <h1 className="tenis"><img src={require("./imagens/images (1).jpeg")} alt=""/></h1>
                <h2 className="lancamento">Lançamento</h2>
                <p  className="nome-produto">Tênis adidas Liter <br/> Racer 3.0 - Masculino</p>
                <p  className="preco-antigo">R$ 349,99</p>
                <p  className="precos">R$ 206,99 no Pix</p>
                <p  className="parcelado">ou 3x de R$ 76,66</p>
                <p  className="outras-cores">Mais opções de cores</p>
              </div>
            </Link>
            <Link to="/">
              <div>
                <h3 className="per">.</h3>
                <h1 className="tenis"><img src={require("./imagens/984844IJ.avif")} alt=""/></h1>
                <h2 className="lancamento">Lançamento</h2>
                <p  className="nome-produto">Conjunto de Agasalho Oxer Feminino</p>
                <p  className="preco-antigo">R$ 199,99</p>
                <p  className="precos">R$ 125,99 no Pix</p>
                <p  className="outras-cores">Mais opções de cores</p>
              </div>
            </Link>
            <Link to="/">
              <div>
                  <h3 className="per">.</h3>
                  <h1 className="tenis"><img src={require("./imagens/olimpicos.avif")} alt=""/></h1>
                  <h2 className="lancamento">Lançamento</h2>
                  <p  className="nome-produto">Tênis Olympikus Flit 3 - Feminino</p>
                  <p  className="preco-antigo">R$ 249,99</p>
                  <p  className="precos">R$ 179,99 no Pix</p>
                  <p  className="parcelado"> ou 2x de R$ 100,00</p>
                  <p  className="outras-cores">Mais opções de cores</p>
              </div>
            </Link>
            <Link to="/">
              <div>
                  <h3 className="per">.</h3>
                  <h1 className="tenis"><img src={require("./imagens/M0XF1Y08.avif")} alt=""/></h1>
                  <p  className="nome-produto">Chuteira Society Nike Phantom GX Academy - Adulto</p>
                  <p  className="preco-antigo">R$ 699,99</p>
                  <p  className="precos">R$ 339,99 no Pix</p>
                  <p  className="parcelado"> ou 4x de R$ 85,00</p>
                  <p id="unica">Cor única</p>
              </div>
            </Link>
            <Link to="/">
              <div>
                <h3 className="per">.</h3>
                <h1 className="tenis"><img src={require("./imagens/M12DNG03.avif")} alt=""/></h1>
                <h2 className="lancamento">Lançamento</h2>
                <p  className="nome-produto">Nike Legend Essential 3 Next Nature - Masculino</p>
                <p  className="preco-antigo">R$ 549,99</p>
                <p  className="precos">R$ 279,99 no Pix</p>
                <p  className="parcelado"> ou 3x de R$ 93,33 sem juros</p>
                <p  className="outras-cores">Mais opções de cores</p>
              </div>
            </Link>
            <Link to="/">
              <div>
                  <h3 className="per">.</h3>
                  <h1 className="tenis"><img src={require("./imagens/olimpicos.avif")} alt=""/></h1>
                  <h2 className="lancamento">Lançamento</h2>
                  <p  className="nome-produto">Tênis Olympikus Flit 3 - Feminino</p>
                  <p  className="preco-antigo">R$ 249,99</p>
                  <p  className="precos">R$ 179,99 no Pix</p>
                  <p  className="parcelado"> ou 2x de R$ 100,00</p>
                  <p  className="outras-cores">Mais opções de cores</p>
              </div>
            </Link>
            <Link to="/">
              <div>
                  <h3 className="per">.</h3>
                  <h1 className="tenis"><img src={require("./imagens/bola.avif")} alt=""/></h1>
                  <p  className="nome-produto">Bola de Futebol Adams classNameic - Adulto</p>
                  <p  className="preco-antigo">R$ 69,99</p>
                  <p  className="precos">R$ 35,99 no Pix</p>
                  <p  className="parcelado"> ou 1x de R$ 39,99</p>
                  <p id="unica">Cor única</p>
              </div>
            </Link>
            <Link to="/">
              <div>
                  <h3 className="per">.</h3>
                  <h1 className="tenis"><img src={require("./imagens/bola.avif")} alt=""/></h1>
                  <p  className="nome-produto">Bola de Futebol Adams classNameic - Adulto</p>
                  <p  className="preco-antigo">R$ 69,99</p>
                  <p  className="precos">R$ 35,99 no Pix</p>
                  <p  className="parcelado"> ou 1x de R$ 39,99</p>
                  <p id="unica">Cor única</p>
              </div>
            </Link>
            <Link to="/">
              <div>
                  <h3 className="per">.</h3>
                  <h1 className="tenis"><img src={require("./imagens/olimpicos volt.avif")} alt=""/></h1>
                  <p  className="nome-produto">Tênis Olympikus Volt - Feminino</p>
                  <p  className="preco-antigo">R$ 249,99</p>
                  <p  className="precos">R$ 129,99 no Pix</p>
                  <p id="unica">Cor única</p>
              </div>
            </Link>
            <Link to="/">
              <div>
                  <h3 className="per">.</h3>
                  <h1 className="tenis"><img src={require("./imagens/M0N8AS02.avif")} alt=""/></h1>
                  <h2 className="lancamento">frete grátis</h2>
                  <p  className="nome-produto">Tênis Mizuno Cool Ride - Masculino</p>
                  <p  className="preco-antigo">R$ 349,99</p>
                  <p  className="precos">R$ 229,99 no Pix</p>
                  <p  className="parcelado"> ou 3x de R$ 76,66</p>
                  <p id="unica">Cor única</p>
              </div>
            </Link>
            </div>
        </>
    
    )
}
export default MelhorEsporte;