import React, { useState } from 'react';
import "./styles/crud.css";
import { useNavigate } from 'react-router-dom';

export default function AtualizarProduto() {
    const navigate = useNavigate();
    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');
    const [imagem, setImagem] = useState('');

    const handleAtualizar = async () => {
    const produtoAtualizado = {
        id,
        nome,
        valor: parseFloat(valor),
        imagem
    };

    try {
        const resposta = await fetch("http://localhost:3000/produtos/atualizar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(produtoAtualizado)
        });

        if (resposta.ok) {
            console.log("Produto atualizado com sucesso!");
            navigate('/pagprodutos');
        } else {
            console.error("Erro ao atualizar produto");
        }
    } catch (erro) {
        console.error("Erro na requisição:", erro);
    }
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

                    <label>Novo nome</label>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />

                    <label>Novo valor</label>
                    <input
                        type="number"
                        value={valor}
                        onChange={(e) => setValor(e.target.value)}
                    />

                    <label>Nova imagem (URL)</label>
                    <input
                        type="text"
                        value={imagem}
                        onChange={(e) => setImagem(e.target.value)}
                    />
                </div>

                <div className="botoes">
                    <button onClick={handleAtualizar}>Atualizar</button>
                </div>
            </div>
        </div>
    );
}
