import React, { useState } from 'react';
import "./styles/crud.css";
import { useNavigate } from 'react-router-dom';

export default function CriarProduto() {
    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');
    const [imagem, setImagem] = useState('');

    const handleCadastrar = () => {
        const novoProduto = {
            nome,
            valor: parseFloat(valor),
            imagem,
        };

        console.log('Produto criado:', novoProduto);

        navigate('/pagprodutos');
    };

    return (
        <div className="container">
            <div className="formulario">
                <div className="formulario-conteudo">
                    <label>Nome do produto</label>
                    <input
                        type="text"
                        placeholder="Ex: Camiseta"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />

                    <label>Valor</label>
                    <input
                        type="number"
                        placeholder="Ex: 49.90"
                        value={valor}
                        onChange={(e) => setValor(e.target.value)}
                    />

                    <label>URL da imagem</label>
                    <input
                        type="text"
                        placeholder="https://imagem.com/produto.jpg"
                        value={imagem}
                        onChange={(e) => setImagem(e.target.value)}
                    />
                </div>

                <div className="botoes">
                    <button onClick={handleCadastrar}>Cadastrar</button>
                </div>
            </div>
        </div>
    );
}
