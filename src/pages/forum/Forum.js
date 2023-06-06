import './Forum.css';
import Menu from '../../fontes/menu.svg';
import User01 from '../../fontes/user01.svg';
import User02 from '../../fontes/user02.svg';
import User03 from '../../fontes/user03.svg';
import CoracaoSemCor from '../../fontes/coracaoSemCor.svg';
import Coracao from '../../fontes/coracao.svg';
import arrow from '../../fontes/arrow.svg';
import Group from '../../fontes/groupo.svg';
import Friends from '../../fontes/frieds.svg';
import Group01 from '../../fontes/group01.svg';
import Group02 from '../../fontes/group02.svg';
import Amigos from '../../fontes/amigos.svg'

function Forum() {
  return (
    <div className="App">
      <section className='mb-5' >
        <div className='d-flex justify-content-between mb-4'>
          <h1 className='m-0 lh-1'>Forum</h1>
          <img src={Menu} alt='logo' />
        </div>
        <div className='d-flex justify-content-between'>
          <button type="button" class="btn btn-outline-success rounded-pill me-1">Em destaque</button>
          <button type="button" class="btn btn-outline-success rounded-pill me-1">Mais recentes</button>
          <button type="button" class="btn btn-outline-success rounded-pill">Mais antigos</button>
        </div>
      </section>
      <section className='mb-5'>
        <div className='d-flex justify-content-between user bg-white align-items-center py-1 px-2 mb-3'>
          <img className='user-image' src={User01} alt='logo' />
          <div className='d-flex flex-column'>
            <h3 className='user-title'>Redução de água e energia</h3>
            <span className='user-nome'>Jorge Moraes</span>
            <span className='user-profiss'>Engenheiro Agrônomo</span>
          </div>
          <div className='d-flex flex-column'>
            <img className='user-coracao ms-auto' src={CoracaoSemCor} alt='logo' />
            <span className='user-data'>30 MAI 2023</span>
          </div>
        </div>
        <div className='d-flex justify-content-between user bg-white align-items-center py-1 px-2 mb-3'>
          <img className='user-image' src={User02} alt='logo' />
          <div className='d-flex flex-column'>
            <h3 className='user-title'>Crise alimentar no Nordeste</h3>
            <span className='user-nome'>Isabella Alencar</span>
            <span className='user-profiss'>Coordenadora de ONG</span>
          </div>
          <div className='d-flex flex-column'>
            <img className='user-coracao ms-auto' src={Coracao} alt='logo' />
            <span className='user-data'>28 MAI 2023</span>
          </div>
        </div>
        <div className='d-flex justify-content-between user bg-white align-items-center py-1 px-2 mb-3'>
          <img className='user-image' src={User03} alt='logo' />
          <div className='d-flex flex-column'>
            <h3 className='user-title'>Agroecologia: como começar</h3>
            <span className='user-nome'>Maria Lopes</span>
            <span className='user-profiss'>Agricultora</span>
          </div>
          <div className='d-flex flex-column'>
            <img className='user-coracao ms-auto' src={CoracaoSemCor} alt='logo' />
            <span className='user-data'>24 MAI 2023</span>
          </div>
        </div>
        <button className='bg-transparent border-0 seeMore d-flex align-items-center mx-auto' >
          Ver todos
          <img className='ms-2' src={arrow} alt='logo' />
        </button>
      </section>

      <section className='mb-5'>
        <div className='d-flex align-items-center mb-3'>
          <img className='me-2 group' src={Group} alt='logo' />
          <h2 className='m-0 you-group'>Seus grupos</h2>
        </div>

        <div className='d-flex justify-content-between user bg-white align-items-center py-1 px-2 mb-3'>
          <img className='user-image' src={Group01} alt='logo' />
          <div className='d-flex flex-column'>
            <h3 className='user-title'>Crise alimentar no Nordeste</h3>
            <p className='user-nome m-0'>Jorge: Eai pessoal? Já viram aquela...</p>
          </div>
          <div className='d-flex flex-column flex-wrap-reverse'>
            <span className='user-data'>12 min</span>
            <div className='noti rounded-circle d-flex align-items-center justify-content-center  ' >5</div>
          </div>
        </div>
        <div className='d-flex justify-content-between user bg-white align-items-center py-1 px-2 mb-3'>
          <img className='user-image' src={Group02} alt='logo' />
          <div className='d-flex flex-column'>
            <h3 className='user-title'>Agroecologia: como começar</h3>
            <p className='user-nome m-0'><b>Isabella:</b>  Oi gente, vamos falar sobre...</p>
          </div>
          <div className='d-flex flex-column flex-wrap-reverse '>
            <span className='user-data'>51 min</span>
            <div className='noti rounded-circle d-flex align-items-center justify-content-center  ' >12</div>

          </div>
        </div>

      </section>

      <section className='mb-5'>
        <div className='d-flex align-items-center mb-3'>
          <img className='me-2 group' src={Friends} alt='logo' />
          <h2 className='m-0 you-group'>Seus amigos</h2>
        </div>
        <div>
          <img className='w-100' src={Amigos} alt='logo' />
        </div>
      </section>

    </div>



  );
}

export default Forum;
