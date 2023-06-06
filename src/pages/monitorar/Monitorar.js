import './Monitorar.css';
import Monitoramento from '../../fontes/monitoramente.svg';
import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import Robot from '../../fontes/robot.svg'
import { getRelativePosition } from 'chart.js/helpers';
import {Routes, Route, useNavigate} from 'react-router-dom';

function Monitorar() {
  const [data, setData] = useState([]);
  const [weather, setWeather] = useState([]);
  const canvas = React.useRef(null);
  const input = React.useRef(null);
  let myChart;

  const createChart = (json, name) => {
    const index = [];
    const time = [];

    if (myChart) myChart.destroy();

    json.hourly.time.filter((item, i) => {
      if (item.split('T')[1].split(':')[0] == '12') {
        index.push(i);
        time.push(`${item.split('T')[0].split('-')[2]}-${item.split('T')[0].split('-')[1]}`);
      } else return false;
    });

    const temperature = json.hourly.temperature_2m.filter((item, i) => index.includes(i));

    myChart = new Chart(canvas.current, {
      type: 'line',
      data: {
        labels: time,
        datasets: [
          {
            label: name,
            data: temperature,
          },
        ],
      },
    });
  };

  useEffect(() => {
    fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events?limit=5&days=20&status=open')
      .then((response) => response.json())
      .then((json) => setData(json.events));
  }, []);

  const getWeather = (lat, lon, name) => {
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m`)
      .then((response) => response.json())
      .then((json) => {
        createChart(json, name);
      });
  };

  const getLocal = (localization) => {
    fetch('https://geocoding-api.open-meteo.com/v1/search?name=' + localization)
      .then((response) => response.json())
      .then((json) => getWeather(json.results[0].latitude, json.results[0].longitude, json.results[0].name));
  };

  function findLocation() {
    if (input.current.value.length < 3) return;
    getLocal(input.current.value);
  }

  const navigate = useNavigate();
  const click = function(){
    console.log('console')
    var rota = '/menu/monitorar';
    localStorage.setItem('rota', rota);
    navigate('/menu/chatbox');
  };

  return (
    <section className='App'>
      <img className='robot' src={Robot} alt='logo' onClick={click} />
      <h1 className='mb-5'>Monitoramento em tempo real</h1>

      <h3>Últimos 5 desastres monitorados pelo Earth Observatory Natural Event Tracker (EONET)</h3>
      {data.length > 0 && (
        <div>
          {data.map((event) => (
            <div className='card mb-2' key={event.id}>
              <div className='card-body'>
                <h5 className='orange d-flex justify-content-between align-items-center'>
                  {event.title}{' '}
                  <small className='text-muted'>
                    Fonte:{' '}
                    <a className='orange' href={event.sources[0].url} target='_blank'>
                      Clique aqui!
                    </a>
                  </small>
                </h5>
              </div>
            </div>
          ))}
        </div>
      )}

      <h3 className='mt-4'>Previsão de tempo</h3>
      <div className='mb-2'>
        <label htmlFor='local' className='form-label'>
          Localização
        </label>
        <input type='text' className='form-control' id='local' ref={input} placeholder='Digite a sua cidade' onBlur={findLocation}></input>
      </div>
      <canvas ref={canvas}></canvas>
    </section>
  );
}

export default Monitorar;
