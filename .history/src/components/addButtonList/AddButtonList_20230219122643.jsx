import React from 'react'
import List from '../sidebar/List'

const AddButtonList = () => {
  return (
    <>
      <List items={[
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
      <div>
        
      </div>
    </>
  )
}

export default AddButtonList