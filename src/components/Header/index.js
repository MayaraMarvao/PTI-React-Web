import './index.scss';
import { Link } from 'react-router-dom';


export default function Cabecalho(){
    return(
        <div className='nav'>
            <nav >
            
                <ul className='lista'>  
                    <img src='\assets\images\logo512.png' alt='logo' />              
                    <li> 
                    <Link to='/documentacao'>Documentação</Link>
                    </li>
                    <li> 
                    <Link to='/tutorial'>Tutorial</Link>
                    </li>
                    <li> 
                    <Link to='/blog'>Blog</Link>
                    </li>
                    <li> 
                    <Link to='/comunidade'>Comunidade</Link>
                    </li>
                </ul>           
            </nav>
        </div>
    )

}
