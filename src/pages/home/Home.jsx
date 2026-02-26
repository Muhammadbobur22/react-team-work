import React from 'react'
import Inbox from '../../components/abdulaziz/Inbox'
import Teacher from '../../components/asadbekvaliev/Teacher'
import Students from '../../components/oysha/Students'
import Expences from '../../components/asadbekturgunbayev/Expences'
import Board from '../../components/murodjon/Board'
import Dashboard from '../../components/muhammadbobur/Dashboard'

const Home = () => {
  return (
    <div>
      <Dashboard/>
      <Inbox/>
      <Teacher/>
      <Students/>
      <Expences/>
      <Board/>
    </div>
  )
}

export default Home
