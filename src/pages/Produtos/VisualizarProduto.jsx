import React, { useState } from 'react';
import "./styles/crud.css";

export default function VisualizarProduto() {
    const [id, setId] = useState('');
    const [produto, setProduto] = useState(null);
    const [erro, setErro] = useState('');

    const handleVisualizar = async () => {
        try {
            const resposta = await fetch("http://localhost:3000/produtos/ler");
            if (resposta.ok) {
                const lista = await resposta.json();
                const encontrado = lista.find(p => p.id === Number(id));

                if (encontrado) {
                    setProduto(encontrado);
                    setErro('');
                } else {
                    setProduto(null);
                    setErro("Produto não encontrado");
                }
            } else {
                setProduto(null);
                setErro("Erro ao buscar produtos");
            }
        } catch (erro) {
            console.error("Erro na requisição:", erro);
            setErro("Erro de conexão com o servidor");
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
                </div>

                <div className="botoes">
                    <button onClick={handleVisualizar}>Visualizar</button>
                </div>

                {erro && <p style={{ color: "red" }}>{erro}</p>}

                {produto && (
                    <div style={{ marginTop: "20px" }}>
                        <h3>Produto Encontrado:</h3>
                        <p><strong>ID:</strong> {produto.id}</p>
                        <p><strong>Nome:</strong> {produto.nome}</p>
                        <p><strong>Valor:</strong> R$ {produto.valor.toFixed(2)}</p>
                        <img src={produto.imagem} alt={produto.nome} width="200" />
                    </div>
                )}
            </div>
        </div>
    );
}
``
