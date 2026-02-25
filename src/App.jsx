import Dashboard from './components/muhammadbobur/Dashboard'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './components/muhammadbobur/Sidebar'
import Header from './components/muhammadbobur/Header'
import Inbox from './components/abdulaziz/Inbox'
import Teacher from './components/asadbekvaliev/Teacher'
import Students from './components/oysha/Students'
import Expences from './components/asadbekturgunbayev/Expences'
import Board from './components/murodjon/Board'

const App = () => {
  return (
    <div>
      <Sidebar/>
      <Header/>
      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path='/' element={<Sidebar/>}/>
        <Route path='/inbox' element={<Inbox/>}/>
        <Route path='/teacher' element={<Teacher/>}/>
        <Route path='/students' element={<Students/>}/>
        <Route path='/expences' element={<Expences/>}/>
        <Route path='/board' element={<Board/>}/>

      </Routes>
      <Students/>
    </div>
  )
}

export default App
