import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Inicio from './pages/inicio/Inicio';
import Forum from './pages/forum/Forum';
import Monitorar from './pages/monitorar/Monitorar';
import Painel from './pages/painel/Painel';
import Perfil from './pages/perfil/Perfil';
import Relatorios from './pages/relatorios/Relatorios';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter className="App">
      <Routes>
        <Route path="/home/inicio" element={<Inicio />} />
        <Route path="/home/forum" element={<Forum />} />
        <Route path="/home/monitorar" element={<Monitorar />} />
        <Route path="/home/painel" element={<Painel />} />
        <Route path="/home/perfil" element={<Perfil />} />
        <Route path="/home/relatorios" element={<Relatorios />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
