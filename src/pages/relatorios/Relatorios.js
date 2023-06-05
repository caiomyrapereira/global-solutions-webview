import './Relatorios.css';
import GraficoPizza from '../../fontes/graficoPizza.svg';
import GraficoMapa from '../../fontes/graficoMapa.svg';
import Tecnicas from '../../fontes/tecnicas.svg';
import Agricultura from '../../fontes/agricultura.svg'; 
import Rotacao from '../../fontes/Rotacao.svg'; 
import Agroecologia from '../../fontes/Agroecologia.svg'
import Reducao from '../../fontes/reducao.svg'
import Uso from '../../fontes/uso.svg'

function Relatorios() {
  return (
    <div className="App">

      <h1 className='mb-5'>Relatórios e análises</h1>

      <section className='mb-5'>
        <h2 className='mb-4'>Indicadores socioeconômicos</h2>
        <span>
          API:<br /><a  className='text-black' href='https://servicodados.ibge.gov.br/api/docs/paises'>https://servicodados.ibge.gov.br/api/docs/paises</a>
        </span>
      </section>

      <section className='mb-5'>
        <h2>Rede Brasileira de Monitoramento Contínuo dos Sistemas GNSS</h2>
        <span>
          API:<br /><a className='text-black' href='API: https://servicodados.ibge.gov.br/api/docs/rbmc?versao=1'>https://servicodados.ibge.gov.br/api/docs/rbmc?versao=1</a>
        </span>
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