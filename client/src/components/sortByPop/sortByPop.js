import React, { useState } from "react";
import SortByPop from "../../actionComponents/sortByPop/sortByPop";

const SortPop = () => {
    const [sort, setSort] = useState('');
    const [showMenu, setShowMenu] = useState(false)
    const [showComponent, setShowComponent] = useState(false)

    const handleClickBtn = (e) => {
        setShowMenu(!showMenu)
        setShowComponent(false)
      }


    const handleClickAsc = (e) => {
        e.preventDefault();
        setShowMenu(!showMenu)
        setSort('ASC');
        setShowComponent(!showComponent)
      }

    const handleClickDsc = (e) => {
        e.preventDefault();
        setShowMenu(!showMenu)
        setSort('DSC');
        setShowComponent(!showComponent)
      }
    
    return (
        <div>
            <button className='btnMenu' onClick = {handleClickBtn}>
                Busqueda por Poblacion &#9660;
            </button>
            {showMenu ?
            <div className="menu">
                <button className='btnSubMenu' onClick = {handleClickAsc}> Busqueda Asc &#8593; </button>
                <button className='btnSubMenu' onClick = {handleClickDsc}> Busqueda Desc &#8595;</button>
            </div>
            :
            (null)
            } 
            {showComponent && sort.length ?
            <SortByPop sort ={sort}/>
            :
            (null)
            }
        </div>
    )

    }

export default SortPop
