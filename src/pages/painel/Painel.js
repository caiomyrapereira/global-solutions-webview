import './Painel.css';
import Alertas from '../../fontes/alertas.svg';
import Producao from '../../fontes/producao.svg';
function Painel() {
  return (
    <div className="App">
      <h1>Painel de controle</h1>
      <h2>Produção de culturas</h2>
      <div>
        <p>Volume total produzido</p>
        <p>Rendimento Médio</p>
        <p>Áreas de Cultivo</p>
        <p>Variedade de Culturas</p>
      </div>
      <h2>Estoques de alimentos</h2>
      <div>
        <p>482,7 mil toneladas</p>
        <p>Em sua região
          (Sudeste - Brasil)</p>
        <a>Ver tipos</a>
      </div>
      <div>
        <p>Regiões nacionais</p>
        <p>Mundial</p>
      </div>

      <h2>Alertas</h2>

      <img src={Alertas} className='w-100' alt='logo' />

      <h2>Tendências de Produção</h2>
      <img src={Producao} className='w-100' alt='logo' />

    </div>
  );
}

export default Painel;