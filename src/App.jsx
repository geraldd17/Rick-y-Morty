import { useEffect, useState } from 'react'
import './App.css'
import Location from './assets/components/Location'
import axios from 'axios'
import getRandomNumber from './utilis/GetRandomNum'
import Residents from './assets/components/Residents'
import image from './assets/img/rick-morty-dancing.png'
import titulo from './assets/img/tt.png'
import fondo from './assets/img/milky-way-starry-sky-night-sky-star-956981.jpeg'

function App() {
  const [getLocation, setGetLocation] = useState()
  const [search, setSearch] = useState()
  console.log(getLocation)

  useEffect(() => {
    let randomnum = getRandomNumber()
    if (search) {
      randomnum = search
    }
    const URL = `https://rickandmortyapi.com/api/location/${randomnum}`
    axios.get(URL)
      .then(res => setGetLocation(res.data))
      .catch(err => console.log(err))

  }, [search])

  const handleSubmit = e => {
    e.preventDefault()
    setSearch(e.target.idLocation.value)

  }

 


  return (
    <div className="App">
      <div className="container_header">
        <img className='container_imagen' src={image} alt="" />
        <img className='container-titulo' src={titulo} alt="" />
      </div>


      <div className="getlocation">
        <Location getLocation={getLocation} />
        <form className='form_submit' onSubmit={handleSubmit}>
          <input className='input_submit' id='idLocation' placeholder='Enter another number from 1 to 126' type="text" />
          <button className='btn_submit'>Search</button>
        </form>
      </div>


      <div className="container_first">

        <div className='card-container'>
          {
            getLocation?.residents.map(url => (
              <Residents
                key={url}
                url={url} />
            ))
          }
          <div className="foother"></div>
        </div>

      </div>

    </div>
  )
}

export default App
