import React from 'react'
import { Routes,Route,BrowserRouter } from 'react-router-dom'
import RickyList from './RickyList'
import Notfound from './Notfound'
import Rikyindividual from './Rikyindividual'

function RouterRicky() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route exact path='*' element={<Notfound/>}/>
            <Route exact path="/index" element={<RickyList /> } />
          <Route exact path='individual/:id' element={<Rikyindividual/> }/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default RouterRicky