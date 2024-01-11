import React from 'react'
import './Sidebar.css'
import {ReactComponent as Homeicon} from '../Assets/Homeicon.svg';
import {ReactComponent as Searchicon} from '../Assets/Searchicon.svg';
import {ReactComponent as Libraryicon} from '../Assets/Libraryicon.svg'; 
const myPlaylist=[
  { id: 1, name: 'DSP' },
  { id: 2, name: 'John' },
  { id: 3, name: 'Alice' },
  { id: 4, name: 'Bob' },
  { id: 5, name: 'Eva' },
  { id: 6, name: 'Sam' },
  { id: 7, name: 'Lily' },
  { id: 8, name: 'Tom' },
  { id: 9, name: 'Emma' },
  { id: 10, name: 'Alex' },
]
export default function Sidebar() {
  return (
    <div className='side-bar-container'>
      <div className='side-bar-items'>
        <Homeicon width={'18px'} strokeWidth={'2px'}/>Home
      </div>
      <div className='side-bar-items'>
        <Searchicon width={'18px'} strokeWidth={'2px'}/>Search
      </div>
      <div className='side-bar-items'>
        <Libraryicon width={'18px'} strokeWidth={'2px'}/>Library
      </div>     
      <div className='side-options'>
        {
          myPlaylist.map((item)=>{
            return (
              <div className='side-bar-items' key={item.id}>
              {item.name}
              </div>
          )
          })
        }
        </div> 
    </div>
  )
}
