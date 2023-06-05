import './Monitorar.css';
import Monitoramento from '../../fontes/monitoramente.svg';

function Monitorar() {
  return (
    <section className="App">
      <h1 className='mb-5'>Monitoramento em  tempo real</h1>
      <img src={Monitoramento} className='mb-5' alt='logo' />
      <ol className='monitoramento'> 
        <li className='mb-4' >Visão Geral da Produção: Apresente um resumo dos principais dados relacionados à produção de culturas, como o volume total produzido, a variedade de culturas cultivadas e as áreas de cultivo.</li>
        <li className='mb-4' >Indicadores de Desempenho: Destaque métricas importantes, como a produtividade por hectare, a taxa de crescimento das culturas e a sazonalidade das colheitas. Isso permite que os usuários acompanhem o desempenho de suas culturas ao longo do tempo.</li>
        <li className='mb-4' >Comparação de Culturas: Ofereça uma comparação entre diferentes culturas, mostrando seu desempenho em termos de demanda de recursos, tempo de crescimento, lucratividade e impacto ambiental. Isso ajuda os usuários a tomar decisões informadas sobre quais culturas cultivar.</li>
        <li className='mb-5' >Gráficos e Visualizações: Utilize gráficos interativos e visualizações de dados para apresentar tendências de produção, variações sazonais e insights importantes sobre o desempenho das culturas. Isso permite uma compreensão mais clara e rápida das informações.</li>
      </ol>

      <ul   className='ms-5 mb-5 apis p-0'>
        <li className='mb-3'><a>API FAO AGRICULTURA</a></li>
        <li className='mb-3'><a>API NASA INSEGURANÇA ALIMENTAR</a></li>
        <li className='mb-3'><a>API OPENWEATHER </a></li>
      </ul>

    </section>
  );
}

export default Monitorar;