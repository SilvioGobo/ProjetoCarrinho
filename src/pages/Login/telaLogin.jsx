import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="formulario">
                <div className="formulario-conteudo">
                    <label>Digite seu e-mail</label>
                    <input type="email" placeholder="email@exemplo.com" />
                    <label>Digite sua senha</label>
                    <input type="password" placeholder="••••••••" />
                </div>

                <div className="botoes">
                    <button onClick={() => navigate('/cadastro')}>Cadastrar</button>
                    <button onClick={() => navigate('/pagprodutos')}>Entrar</button>
                </div>
            </div>
        </div>
    );
}
