import React, { useState } from 'react';
import "./styles/styles.css";
import { useNavigate } from 'react-router-dom';
import { CriarProduto } from '../../components/data/fetchProdutos';

export default function CriarProdutoPage() {
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [imagem, setImagem] = useState('');

  const handleCriar = async () => {
    await CriarProduto(nome, parseFloat(valor), imagem);
    navigate('/produtos'); 
  };

  return (
    <div className="container">
      <div className="formulario">
        <div className="formulario-conteudo">
          <label>Nome do Produto</label>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
          <label>Valor</label>
          <input type="number" value={valor} onChange={(e) => setValor(e.target.value)} />
          <label>Imagem (URL)</label>
          <input type="text" value={imagem} onChange={(e) => setImagem(e.target.value)} />
        </div>
        <div className="botoes">
          <button onClick={handleCriar}>Cadastrar</button>
        </div>
      </div>
    </div>
  );
}
