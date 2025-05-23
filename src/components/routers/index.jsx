import React from 'react';
import { Route, Routes } from 'react-router';
import PaginaProdutos from '../../pages/Produtos/PaginaProdutos';
import Login from '../../pages/Login/telaLogin';
import Cadastro from '../../pages/Cadastro/telaCadastro';
import PrivateRoute from './PrivateRoute';

export default function Routers() {
  return (
   <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <PaginaProdutos />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
  );
}
