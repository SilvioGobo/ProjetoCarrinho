import React, { useState, useEffect } from "react";
import "./styles/styles.css";
import { LerProdutos } from "../../components/data/fetchProdutos";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Carrinho from "../../components/Carrinho";
import { useNavigate } from 'react-router-dom';

export default function PaginaProdutos() {
  const navigate = useNavigate();
  const [mostrarCarrinho, setMostrarCarrinho] = useState(false);
  const [carrinho, setCarrinho] = useState([]);
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    LerProdutos(setProdutos);
  }, []);

  const adicionarAoCarrinho = (produto) => {
    const index = carrinho.findIndex((item) => item.nome === produto.nome);

    if (index >= 0) {
      const novoCarrinho = [...carrinho];
      novoCarrinho[index].quantidade += 1;
      setCarrinho(novoCarrinho);
    } else {
      setCarrinho([...carrinho, { ...produto, quantidade: 1 }]);
    }

    setMostrarCarrinho(true);
  };

  return (
    <div className="pagina">
      <div className="headbar">
        <h1>Produtos</h1>
        <button onClick={() => setMostrarCarrinho(!mostrarCarrinho)}>
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </div>

      <div className="botoes-crud">
        <button onClick={() => navigate('/produtos/criar')}>Adicionar Produto</button>
      </div>

      <div className="grid-produtos">
        {produtos.map((produto, index) => (
          <div key={index} className="card-produto">
            <img src={produto.imagem} alt={produto.nome} className="imagem-produto" />
            <h2 className="nome-produto">{produto.nome}</h2>
            <p className="preco-produto">R$ {parseFloat(produto.valor).toFixed(2)}</p>
            <button className="botao-comprar" onClick={() => adicionarAoCarrinho(produto)}>Adicionar ao carrinho</button>
            <button className="botao-comprar" onClick={() => navigate(`/produtos/visualizar/${produto.id}`)}>Ver</button>
            <button className="botao-comprar" onClick={() => navigate(`/produtos/atualizar/${produto.id}`)}>Editar</button>
            <button className="botao-comprar" onClick={() => navigate(`/produtos/remover/${produto.id}`)}>Remover</button>
          </div>
        ))}
      </div>

      <div className={`carrinho-lateral ${mostrarCarrinho ? 'ativo' : ''}`}>
        <Carrinho
          mostrarCarrinho={mostrarCarrinho}
          setMostrarCarrinho={setMostrarCarrinho}
          carrinho={carrinho}
          setCarrinho={setCarrinho}
        />
      </div>
    </div>
  );
}
