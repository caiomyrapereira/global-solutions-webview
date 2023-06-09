import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'
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
import ChatBox from './pages/chatBox/ChatBox';
import Relatorios from './pages/relatorios/Relatorios';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter className="App">
      <Routes>
        <Route path="/menu/inicio" element={<Inicio />} />
        <Route path="/menu/forum" element={<Forum />} />
        <Route path="/menu/monitorar" element={<Monitorar />} />
        <Route path="/menu/painel" element={<Painel />} />
        <Route path="/menu/chatBox" element={<ChatBox />} />
        <Route path="/menu/relatorios" element={<Relatorios />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
