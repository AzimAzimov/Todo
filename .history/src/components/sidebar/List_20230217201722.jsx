import React from 'react'

import './List.scss';

const List = ({ items, isRemovable }) => {
  return (
    <ul className=' '>
      {items.map((item, index) => (
        <li className={item.active ? 'active' : ''} key={index}>
          <i>
            {item.icon ? (
              item.icon
            ) : (
              <i className={`badge badge__${item.color}`}>{items.color}</i>
            )}
          </i>
          <span>{item.name}</span>
        </li>
      ))}
    </ul>
  )
}

export default List