
import './Inicio.css';
import Group01 from '../../fontes/Frame65.svg';
import Group03 from '../../fontes/Group38.png';
import Grafic from '../../fontes/ClimateChange.png';
import Tractor from '../../fontes/Tractor.png';
import Plantio from '../../fontes/plantio.svg';
import Manejo from '../../fontes/manejo.svg';
import Controle from '../../fontes/controle.svg';
import Recursos from '../../fontes/recursos.svg';
import Robot from '../../fontes/robot.svg';
import {Routes, Route, useNavigate} from 'react-router-dom';

function Inicio() {
  const navigate = useNavigate();
  const click = function(){
    console.log('console')
    var rota = '/menu/inicio';
    localStorage.setItem('rota', rota);
    navigate('/menu/chatbox');
  };
  return (
    <div className="App">
      <img className='robot' src={Robot} alt='logo' onClick={click} />
      <h1>Bem vinda, Ana!</h1>
      <p>Confira as últimas estatísticas e indicadores.</p>
      <div className='w-100 mb-4'>
        <img src={Group01} className='w-100' alt='logo' />
      </div>

      <div className='mb-4'>
        <img src={Group03} className='w-100' alt='logo' />
      </div>

      <h2>Previsões de safras e alertas</h2>
      <div className='mb-5'>
        <div className='d-flex card-previssao'>
          <img src={Grafic} className='icone-previsao me-3 align-self-center' alt='logo' />
          <div className='d-flex flex-column align-self-center'>
            <h3 className='mb-0'> Previsões climáticas</h3>
            <p className='mb-0'>Informações precisas sobre o clima</p>
          </div>
        </div>
        <div className='d-flex card-previssao'>
          <img src={Tractor} className='icone-previsao me-3 align-self-center' alt='logo' />
          <div className='d-flex flex-column align-self-center'>
            <h3 className='mb-0'> Previsões climáticas</h3>
            <p className='mb-0'>Informações precisas sobre o clima</p>
          </div>
        </div>
      </div>

      <div className='d-flex justify-content-between mb-3'>
        <h2 className='d-flex align-items-end orie'>Recomendações e orientações</h2>
      </div>

      <div className='rom '>
        <img src={Plantio} className='col-6 pe-2 mb-3' alt='logo' />
        <img src={Manejo} className='col-6 ps-2 mb-3' alt='logo' />
        <img src={Controle} className='col-6  pe-2' alt='logo' />
        <img src={Recursos} className='col-6 ps-2' alt='logo' />
      </div>

    </div>
  );
}

export default Inicio;
