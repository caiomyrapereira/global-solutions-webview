import './Painel.css';
import Alertas from '../../fontes/alertas.svg';
import Producao from '../../fontes/producao.svg';
import Notificacao from '../../fontes/notificacao.svg';

function Painel() {
  return (
    <div className="App">
      <h1 className='mb-5'>Painel de controle</h1>
      <section className='mb-4'>
        <h2>Produção de culturas</h2>
        <div className='d-flex flex-wrap' >
          <p className='marcado green me-2 '>Volume total produzido</p>
          <p className='marcado marrow me-2'>Rendimento Médio</p>
          <p className='marcado marrow me-2'>Áreas de Cultivo</p>
          <p className='marcado green'>Variedade de Culturas</p>
        </div>
      </section>

      <section className='mb-4 estoque'>
        <h2 className='mb-3'>Estoques de alimentos</h2>
        <div className='d-flex justify-content-between mb-3 '>
          <span className='quantidade font-weight-bold'>482,7 mil toneladas</span>
          <span className='regiao'>Em sua região
            (Sudeste - Brasil)</span>
          <a className='d-flex align-items-center text-decoration-none pe-auto'>Ver tipos</a >
        </div>
        <div className='d-flex flex-wrap'>
          <p className='marcado marrow me-2'>Regiões nacionais</p>
          <p className='marcado green'>Mundial</p>
        </div>
      </section>

      <section className='mb-4'>
        <div className='d-flex  justify-content-between align-items-center'>
          <h2 className='mb-3'>Alertas</h2>
          <img src={Notificacao} alt='logo' />
        </div>
        <img src={Alertas} className='w-100' alt='logo' />
      </section>

      <section className='mb-4'>
        <h2 className='mb-3'>Tendências de Produção</h2>
        <img src={Producao} className='w-100' alt='logo' />
      </section>

    </div>
  );
}

export default Painel;