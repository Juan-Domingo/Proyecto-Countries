import React, { useState } from "react";
import SortAlpha from "../../actionComponents/sortAlpha/sortAlpha";

const SortAlphabetic = () => {
    const [sort, setSort] = useState('');
    const [showMenu, setShowMenu] = useState(false)
    const [showComponent, setShowComponent] = useState(false)

    const handleClickBtn = (e) => {
        setShowMenu(!showMenu)
        setShowComponent(false)
      }

    const handleClickAtoZ = (e) => {
        e.preventDefault();
        setShowMenu(!showMenu)
        setSort('AtoZ');
        setShowComponent(!showComponent)
      }

    const handleClickZtoA = (e) => {
        e.preventDefault();
        setShowMenu(!showMenu)
        setSort('ZtoA');
        setShowComponent(!showComponent)
      }
    
    return (
        <div>
            <button className='btnMenu' onClick = {handleClickBtn}>
                Busqueda Alfabeticamente &#9660;
            </button>
            {showMenu ?
            <div className="menu">
                <button className='btnSubMenu'onClick = {handleClickAtoZ}> De A a Z </button>
                <button className='btnSubMenu'onClick = {handleClickZtoA}> De Z a A </button>
            </div>
            :
            (null)
            } 
            {showComponent && sort.length ?
            <SortAlpha sort ={sort}/>
            :
            (null)
            }
        </div>
    )

    }

export default SortAlphabetic
