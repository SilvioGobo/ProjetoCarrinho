import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

export default function Cadastro(){
    const navigate = useNavigate();
    return (
        <div className='container'>
            <div className='formulario'>
                    <div className='formulario-conteudo'>
                        <label>Digite seu e-mail</label>
                        <input type="email" />
                        <label>Digite sua senha</label>
                        <input type="password" />
                    </div>

                    <div className='botoes'>
                        <div>
                            <button>Cadastrar</button>
                        </div>
                    </div>
                    
            </div>
        </div>
    )
} 