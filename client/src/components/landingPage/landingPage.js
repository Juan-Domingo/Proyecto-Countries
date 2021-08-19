import {Link} from 'react-router-dom'
import './landingPage.css'
import background from '../landingPage/globe-40.gif'
import { useEffect } from 'react'
import { getDB } from '../../store/actions/actions'
import { useDispatch } from 'react-redux';

const LandingPage = function () {
    const dispatch = useDispatch()

    useEffect(() => {
       dispatch(getDB())
      },[dispatch]);
      
    return (
        <div className="landingPage">
        <img className='bg' src={background} alt="BG img"/>
        
        <div className='text'>Aplicacion de Countries</div> 
        < div class="container">    
        <Link to = '/countries' class='animated-word'>Entrar</Link>
        </div>
        </div>
          
    )
}

export default LandingPage;