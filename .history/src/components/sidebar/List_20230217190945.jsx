import React from 'react'

import './List.scss';

const List = ({ items }) => {
  return (
    <ul className='todo__list'>
      <li className='active'>
        <i>
          {items.icon ? (
            items.icon
          ) : (
            <i>{}</i>
          )}
        </i>
        <span></span>
      </li>
    </ul>
  )
}

export default List