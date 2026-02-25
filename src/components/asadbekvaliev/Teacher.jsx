import { FaUsers } from 'react-icons/fa'
import { teacher } from '../../data/asadbekvaliyev/teacher'
import dimg from '../../assets/department.png'
import aimg from '../../assets/attendance.png'
import './Teacher.css'

const Teacher = () => {
  return (
    <div className='container'>
      <div className="info_dep">
      <div className="teacher_info">
        {
          teacher.info.map((item, index) => {
            return (
              <div className="info_wrapper" key={index}>
                <div className="info_text">
                  <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
                </div>
                <div className="info_icon"><FaUsers /></div>
              </div>
            ) 
          }) 
        }
      </div>

      <div className="department">
        <h3>Department</h3>
        <img src={dimg} alt="" />
      </div>
      <div className="attendance">
        <div className="a_text">
        <h3>Attendance Overview</h3>
        <select name="" id="">
          <option value="">Weekly</option>
          <option value="">Daily</option>
          ''
        </select>
        </div>

        <img src={aimg} alt="" />
      </div>
      </div>
    </div>
  )
}

export default Teacher
