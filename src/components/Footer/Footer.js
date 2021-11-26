import './Footer.css';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare} from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='social'>
        <FaFacebookSquare />
        <FaInstagramSquare />
        <FaTwitterSquare />
        <FaYoutubeSquare />
      </div>
      <span>© 2021 Nintendo. Os jogos são propriedade de seus respectivos donos.</span>
      <span>Nintendo of America Inc. | A sede está localizada em Redmond, Washington (EUA) | Assistência</span>
    </div>
  )
}