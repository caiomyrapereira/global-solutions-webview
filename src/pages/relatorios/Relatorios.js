import './Relatorios.css';
import GraficoPizza from '../../fontes/graficoPizza.svg';
import GraficoMapa from '../../fontes/graficoMapa.svg';
import Tecnicas from '../../fontes/tecnicas.svg';
import Agricultura from '../../fontes/agricultura.svg';
import Rotacao from '../../fontes/Rotacao.svg';
import Agroecologia from '../../fontes/Agroecologia.svg';
import Reducao from '../../fontes/reducao.svg';
import Uso from '../../fontes/uso.svg';
import Robot from '../../fontes/robot.svg';
import { Routes, Route, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Relatorios() {
  const [cultiv, setCultiv] = useState([]);
  const [past, setPast] = useState([]);
  const navigate = useNavigate();
  const click = function () {
    console.log('console');
    var rota = '/menu/relatorios';
    localStorage.setItem('rota', rota);
    navigate('/menu/chatbox');
  };

  useEffect(() => {
    fetch('https://servicodados.ibge.gov.br/api/v1/paises/BR/indicadores/77838')
      .then((response) => response.json())
      .then((json) => {
        setCultiv(json[0].series[0].serie.slice(-4));
      });
  }, []);

  useEffect(() => {
    fetch('https://servicodados.ibge.gov.br/api/v1/paises/BR/indicadores/77839')
      .then((response) => response.json())
      .then((json) => {
        setPast(json[0].series[0].serie.slice(-4));
      });
  }, []);

  return (
    <div className='App'>
      <img className='robot' src={Robot} alt='logo' onClick={click} />
      <h1 className='mb-5'>Relatórios e análises</h1>

      <section className='mb-4'>
        <h2 className='mb-2'>Áreas cultivadas no Brasil</h2>
        {cultiv.length > 0 && (
          <ul>
            {cultiv.map((cultivation) => (
              <li key={Object.keys(cultivation)[0]}>
                <span>{Object.keys(cultivation)[0]}: </span>
                {cultivation[Object.keys(cultivation)[0]] ? (
                  <span className='green-color'>{cultivation[Object.keys(cultivation)[0]]}% da área total</span>
                ) : (
                  <span className='orange'>Registro nao divulgado</span>
                )}
              </li>
            ))}
            <small className='text-muted'>Fonte IBGE</small>
          </ul>
        )}
      </section>

      <section className='mb-4'>
        <h2 className='mb-2'>Áreas de pastagens permanentes</h2>
        {past.length > 0 && (
          <ul>
            {past.map((pastagem) => (
              <li key={Object.keys(pastagem)[0]}>
                <span>{Object.keys(pastagem)[0]}: </span>
                {pastagem[Object.keys(pastagem)[0]] ? (
                  <span className='green-color'>{pastagem[Object.keys(pastagem)[0]]}% da área total</span>
                ) : (
                  <span className='orange'>Registro nao divulgado</span>
                )}
              </li>
            ))}
            <small className='text-muted'>Fonte IBGE</small>
          </ul>
        )}
      </section>

      <section className='my-5'>
        <h2 className='mb-3'>Práticas agrícolas sustentáveis</h2>
        <div className='room'>
          <img src={Tecnicas} className='col-6 pe-2 mb-3' alt='logo' />
          <img src={Agricultura} className='col-6 mb-3' alt='logo' />
          <img src={Rotacao} className='col-6 pe-2 mb-3' alt='logo' />
          <img src={Agroecologia} className='col-6 mb-3' alt='logo' />
          <img src={Reducao} className='col-6 pe-2' alt='logo' />
          <img src={Uso} className='col-6' alt='logo' />
        </div>
      </section>

      <section className='mb-5'>
        <h2 className='mb-3'>Taxa de aproveitamento</h2>
        <img src={GraficoPizza} className='w-100' alt='logo' />
      </section>

      <section className='mb-5'>
        <h2 className='mb-3'>Índice de eficiência na produção</h2>
        <img src={GraficoMapa} className='w-100' alt='logo' />
      </section>
    </div>
  );
}

export default Relatorios;
