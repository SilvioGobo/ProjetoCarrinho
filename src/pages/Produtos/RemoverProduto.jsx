import React, { useState } from 'react';
import "./styles/crud.css";
import { useNavigate } from 'react-router-dom';
import { DeletarProduto } from '../../components/data/fetchProdutos';
import { useParams } from 'react-router-dom';

export default function RemoverProduto() {
    const navigate = useNavigate();
    const [id, setId] = useState('');

    const handleRemover = async () => {
        await DeletarProduto(id);
        navigate('/pagprodutos');
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
                    <button onClick={handleRemover}>Remover</button>
                </div>
            </div>
        </div>
    );
}
