import './Navbar.css';
import logo from './logo.png';
import { FaHeart, FaRegQuestionCircle, FaRegUser } from 'react-icons/fa';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar__logo'>
        <img className='navbar__image' src={logo} alt='Nintendo Shop'></img>
      </div>
      <div className='navbar__links'>
        <ul className='navbar__links__list'>
          <li>
            <a className='items' href='https://pt-americas-support.nintendo.com/'>
              <FaRegQuestionCircle />
              <span className='text'>Suporte</span>
            </a>
          </li>
          <li>
            <a className='items' href='#!'>
              <FaHeart />
              <span className='text'>Lista de Desejos</span>
            </a></li>
          <li>
            <a className='items' href='#!'>
              <FaRegUser />
              <span className='text'>Fazer Login/Criar conta</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}