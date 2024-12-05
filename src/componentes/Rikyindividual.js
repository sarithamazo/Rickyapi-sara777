import React,{useState} from 'react'

import { useParams} from 'react-router-dom'
import {link} from 'react-router-dom'
import Swal from 'sweetalert2'

export default function Rikcyindividual() {
    const[individual, setIndividual] = useState([])
    const {id} = useParams()
    const [isloading,setIsloading] = useState(true)

    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((Response) => Response.json())
    .then((Response) => 
      setIndividual(Response))
    setIsloading(false)

    if(isloading)
      Swal.fire({title: "cargando datos ..."})
    Swal.showLoading()




  return (
    <div>
        <img className='SARA'  src={individual.image} alt={individual.image} />
        <p> Nombre:{individual.name}</p>
        <p>status:{individual.status}</p>
        <p>especie:{individual.species}</p>
        <p>Genero: {individual.gender}</p>
        <p>localizacion:<br></br><strong>Name :</strong>{individual.location.name}<br></br></p>


    </div>
  )
}


