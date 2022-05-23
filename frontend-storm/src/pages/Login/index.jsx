import React from "react";
import { Link } from "react-router-dom";
import NavbarLogin from "../../components/NavbarLogin";
import '../Login/login.css'

const Login = () => {
  return(
    <div className="corpo">

      <div className="right"></div>

      <div className="left">
        <NavbarLogin />

        <div className="formulario">
          <h1>storm</h1>

          <div className="areaFormulario">
            <h1>Faça <strong>Login</strong> na sua conta</h1>

            <div className="email">
              <label for="floatingEmail">Email</label><br />
              <input type="email" id="floatingEmail"/>
            </div>

            <div className="senha">
              <label for="floatingAssunto">Senha</label><br />
              <input type="password" id="floatingPassword"/>
            </div>

            <div className="botao">
              <Link className="Link" to="">Entrar</Link>
            </div>
          </div>
        </div>
       

      </div>
      
    </div>
  );
};

export default Login;
