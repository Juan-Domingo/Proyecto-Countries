import { useState, useEffect } from "react";
import './addActivity.css'
import background from '../../actionComponents/addActivity/luna.png'
import { useDispatch, useSelector } from 'react-redux' 
import { getAll } from "../../store/actions/actions";

function AddActivity() {

    let acc =[]
    const dispatch = useDispatch()
    const countries = useSelector(state => state.getAll)
    const sort = countries.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
     
      return 0;
    })

    useEffect(() => {
      dispatch(getAll())
     },[dispatch]);


    const [name, setName] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [term, setTerm] = useState('');
    const [season, setSeason] = useState('');
    const [country, setCountry] = useState([])
    
    function createActivity() {
        
        fetch('http://localhost:3001/activities', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({name, difficulty, term, season, country}),
        })
          .then(response => {
            return response.text();
          })
          .then(data => {
            console.log(data);
          })
          .catch(() => console.log('Error'));
      }

    const handleClick = () => {
      window.alert('Nueva actividad creada. Gracias!')
      setName('')
      setDifficulty('')
      setTerm('')
      setSeason('')
      setCountry([])
      createActivity()
    }

    const handleChangeName = (e) => {
      let aux = e.target.value
      let capitalize = aux.charAt(0).toUpperCase() + aux.slice(1);
      setName(capitalize)
      //console.log(name)
    }

    const handleChangeDifficulty = (e) => {
      setDifficulty(e.target.value)
      //console.log(difficulty)
    }
    
    const handleChangeTerm = (e) => {
      setTerm(Number(e.target.value))
      //console.log(term)
    }

    const handleChangeSeason = (e) => {
      setSeason(e.target.value)
      //console.log(season)
    }

    const handleClickCountry = (e) => {
      country.push(e.target.value)
      setCountry(country)
      acc.push(e.target.value)
      //console.log(country)
    }

    return (
      <div>
      <img className='bgform' src={background} alt="BG img"/>
      <div className='containerSup'>
        <div className='containerTextForm'>
          <h1 className='textForm'>¿Tiene información sobre actividades turísticas en un país?</h1>
          <p className='textForm'>¡Puedes agregarlo aquí y ayudar a otras personas a descubrirlos! </p>
        </div>
        <form className='containerForm'>
            <label>
            <h1>Añadir actividad turistica:</h1>

                <div className='formInput'>
                    <input
                        type='text' 
                        name='name'
                        value={name}
                        placeholder='Nombre de la actividad turística'
                        onChange={handleChangeName}
                    />
                </div>

                <div className='formInput'>
                    <input 
                        type='text' 
                        name='difficulty'
                        placeholder='Dificultad entre 1 y 5'
                        onChange={handleChangeDifficulty}
                    />
                    {!difficulty?<p>*Porfavor ponga la dificultad de la actividad.</p>:(null)}
                    {difficulty>5?<p className = 'errorInput'>*Dificultad maxima es 5</p>:(null)}
                </div>
                <div className='formInput'>
                    <input 
                        type='text' 
                        name='term'
                        placeholder='Cuantas horas durara?'
                        onChange={handleChangeTerm}  
                    />
                    {!term?<p className='errorInput'>*Termino debe estar en horas.  (Number)</p>:(null)}
                </div>

                <div className='formInput'>
                    <select  
                        className = 'selectSeason'
                        name='season'
                        onChange={handleChangeSeason}>
                        <option defaultValue> En que estacion del año? </option>
                        <option className='optionCountry' value='Summer' name='season'>Verano</option>
                        <option className='optionCountry' value='Winter' name='Summer'>Invierno</option>
                        <option className='optionCountry' value='Spring' name='Summer'>Primavera</option>
                        <option className='optionCountry' value='Autumn' name='Summer'>Otoño</option>
                    </select>
                    {!season?<p className='errorInput'>*Por favor, establezca la estacion en la que se puede practicar.</p>:(null)}

                <div className='formInput'>
                  <select className='selectCountry' type='text' name='country' multiple>
                    <option className='placeholderCountry' defaultValue>Elija uno o varios países donde se pueda practicar.</option>
                    {sort.map(e => 
                    <option className='option' key={e.alpha3Code} value={e.name} name={e.name} onClick={handleClickCountry}>{e.name}</option>
                    )}
                  </select>
                  <p className='p'>*Elija al menos un país.</p>
                </div>
              
                </div>
            <button className='btnForm' onClick={handleClick}>Añadir actividad</button>
              </label>
            </form> 
          </div>
      </div>
    );
  }

  export default AddActivity;