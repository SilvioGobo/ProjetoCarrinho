import React, { useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');

    const handleLogin = () => {
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (!emailValido) {
            setErro("Digite um e-mail válido.");
        } else if (senha.trim() === '') {
            setErro("A senha não pode estar vazia.");
        } else {
            setErro('');
            navigate('/pagprodutos');
        }
    };

    return (
        <div className="container">
            <div className="formulario">
                <div className="formulario-conteudo">
                    <label>Digite seu e-mail</label>
                    <input
                        type="email"
                        placeholder="email@exemplo.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label>Digite sua senha</label>
                    <input
                        type="password"
                        placeholder="••••••••"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </div>

                {erro && <p style={{ color: "red", marginTop: "10px" }}>{erro}</p>}

                <div className="botoes">
                    <button onClick={() => navigate('/cadastro')}>Cadastrar</button>
                    <button onClick={handleLogin}>Entrar</button>
                </div>
            </div>
        </div>
    );
}
