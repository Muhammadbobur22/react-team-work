import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Sidebar from './components/muhammadbobur/Sidebar'
import Header from './components/muhammadbobur/Header'

import Teacher from './components/asadbekvaliev/Teacher'
import Students from './components/oysha/Students'
import Expences from './components/asadbekturgunbayev/Expences'
import Board from './components/murodjon/Board'
import Inbox from './components/abdulaziz/Inbox'

const App = () => {
  return (
    <div>


      <Routes>
        <Route path='/inbox' element={<Inbox/>}/> 
        <Route path='/' element={<Header/>}/>
        <Route path='/' element={<Sidebar/>}/>
        <Route path='/inbox' element={<Inbox/>}/>
        <Route path='/teachers' element={<Teacher/>}/>
        <Route path='/students' element={<Students/>}/>
        <Route path='/finance' element={<Expences/>}/>
        <Route path='/board' element={<Board/>}/>

      </Routes>
     
 
    </div>
  )
}

export default App
