import React from 'react'

import editSvg from '../../assets/img/edit.svg'
import "./Tasks.scss"

const Tasks = () => {
  return (
    <div className='task'>
      <h2>
        Фронтенд
        <img src={editSvg} alt="edit"/>
      </h2>
      <div className="tasks__items">
        <div className="checkbox">
          <input 
            type="checkbox"
            id='check'
          />
          <label htmlFor="check">frefwfefreff</label>
          <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </div>
      </div>
    </div>
  )
}

export default Tasks