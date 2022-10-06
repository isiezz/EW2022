import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import reportWebVitals from './reportWebVitals';
import SessaoMenu from "./components/sessao-menu/sessao-menu";
import SessaoFooter from "./components/sessao-footer/sessao-footer";
import SessaoApoiadores from "./components/sessao-apoiadores/sessao-apoiadores";
import SessaoSobre from "./components/sessao-sobre/sessao-sobre";
import SessaoEventos from "./components/sessao-eventos/sessao-eventos";
import SessaoBanner from "./components/sessao-banner/sessao-banner";
import SessaoQuem from "./components/sessao-quem/sessao-quem";
import SessaoSpaceApp from "./components/sessao-space-apps/sessao-space-apps";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <SessaoMenu />
      <SessaoBanner />
      <SessaoSobre />
      <SessaoEventos />
      <SessaoQuem />
      <SessaoSpaceApp />
      <SessaoApoiadores />
      <SessaoFooter />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();