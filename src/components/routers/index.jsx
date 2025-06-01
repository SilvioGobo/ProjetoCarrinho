import React from 'react';
import { Route, Routes } from 'react-router';
import PaginaProdutos from '../../pages/Produtos/PaginaProdutos';
import Login from '../../pages/Login/telaLogin';
import Cadastro from '../../pages/Cadastro/telaCadastro';
import CriarProduto from '../../pages/Produtos/CriarProduto';
import AtualizarProduto from '../../pages/Produtos/AtualizarProduto';
import VisualizarProduto from '../../pages/Produtos/VisualizarProduto.jsx';
import RemoverProduto from '../../pages/Produtos/RemoverProduto.jsx';

export default function Routers() {
  return (
   <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/pagprodutos" element={<PaginaProdutos />} />

      
      <Route path="/produtos/criar" element={<CriarProduto />} />
      <Route path="/produtos/atualizar" element={<AtualizarProduto />} />
      <Route path="/produtos/visualizar" element={<VisualizarProduto />} />
      <Route path="/produtos/remover" element={<RemoverProduto />} />
    </Routes>
  );
}
