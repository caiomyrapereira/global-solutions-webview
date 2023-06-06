import './ChatBox.css';
import Chat from '../../fontes/chat.svg'
import Messag from '../../fontes/messagemRobot.svg'
import Arrow from '../../fontes/arrowReturn.svg'
import { Routes, Route, useNavigate } from 'react-router-dom';

function ChatBox() {
  const navigate = useNavigate();
  const click = function () {
    var rota = localStorage.getItem('rota');
    if (rota) {
      navigate(rota);
    }
    else{
      navigate('/menu/inicio');
    }
  };
  return (
    <div className="App">
      <img className=' mb-5' src={Arrow} alt='logo' onClick={click} />
      <h1 className='mb-5' >Chatbot</h1>
      <img className='w-100 mb-5' src={Chat} alt='logo' />
      <img className='w-100 mb-5' src={Messag} alt='logo' />
    </div>
  );
}

export default ChatBox;