import React, { useState } from 'react';
import "./styles/crud.css";
import { useNavigate } from 'react-router-dom';

export default function VisualizarProduto() {
    const navigate = useNavigate();
    const [id, setId] = useState('');

    const handleVisualizar = () => {
        console.log('Produto a ser visualizado com ID:', id);
        navigate('/');
    };

    return (
        <div className="container">
            <div className="formulario">
                <div className="formulario-conteudo">
                    <label>ID do Produto</label>
                    <input
                        type="text"
                        placeholder="Digite o ID"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                </div>

                <div className="botoes">
                    <button onClick={handleVisualizar}>Visualizar</button>
                </div>
            </div>
        </div>
    );
}
