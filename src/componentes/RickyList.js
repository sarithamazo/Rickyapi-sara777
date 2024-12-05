import React from 'react'
import { useState,useEffect } from 'react'
import Rickycard from './Rickycard'
import './ricky.css'

export default function RickyList() {
    const[character,setCharacters]= useState([])
    useEffect(()=>{
        fetch("https://rickandmortyapi.com/api/character/")
        .then((response) =>response.json())
        .then((response)=> setCharacters(response.results))

    },[])
  return (
    <div>
        <h1>Ricky and Morty</h1>
        <div className='heroes-container'>
            { character.map(character =>{
                return(
                    <Rickycard character={character}/>
                )
            })

            }
        </div>
        
    </div>
  )
}
