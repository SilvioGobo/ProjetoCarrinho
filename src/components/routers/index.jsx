import React from 'react';
import { Route, Routes } from 'react-router';
import PaginaProdutos from '../../pages/Produtos/PaginaProdutos';
import Login from '../../pages/Login/telaLogin';
import Cadastro from '../../pages/Cadastro/telaCadastro';

export default function Routers() {
  return (
    <Routes>
      <Route
        path="/"
        element={<PaginaProdutos/>}
      />
      <Route
        path="/login"
        element={<Login/>}
      />
      <Route
        path="/cadastro"
        element={<Cadastro/>}
      />

    </Routes>
  );
}
