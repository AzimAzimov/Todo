import React, { useState } from 'react'

import Badge from '../badge/Badge';
import List from '../sidebar/List'
import 
import "./AddListButton.scss"


const AddButtonList = ({ colors }) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [selectedColor, selectColor] = useState(colors[0].id);

  return (
    <div className="add__list">
      <List 
        onClick={()=> setVisiblePopup(true)}
        items={[
          {
            className: 'todo__list__button',
            icon: (
              <svg width="11" height="11" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1V15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1 8H15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ),
            name: 'Добавить задачу'
          }
        ]}
      />
      {visiblePopup && 
        <div className="add__list__popup">
          <img src="" alt="" className="add__list__popup__close" />
          <input className='field' type='text' placeholder='Название списка' />
          <div className="add__list__popup__colors">
            {colors.map(color => (
              <Badge 
                onClick={()=> selectColor(color.id)} 
                key={color.id} 
                color={color.name} 
                className={selectedColor === color.id && 'active'}
              />
            ) )}
          </div>
          <button className='button'>Добавить</button>
        </div>
      }
    </div>
  )
}

export default AddButtonList


