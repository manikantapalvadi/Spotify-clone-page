import React from 'react'
import './Footer.css'
import { ReactComponent as Playicon} from '../Assets/Playicon.svg'
import { ReactComponent as Pauseicon} from '../Assets/Pauseicon.svg'
import { ReactComponent as Forwardicon} from '../Assets/Forwardicon.svg'
import { ReactComponent as Backwardicon} from '../Assets/Backwardicon.svg'

export default function Footer() { 
  const [isPlaying,setIsPlaying] = React.useState(false)
  return (
    <div className='footer-container'>
      <div className='player-control'>
        <Backwardicon width={'28px'} />
        {
          isPlaying ? <Pauseicon width={'28px'} onClick={() => setIsPlaying(false)} /> 
          :
           <Playicon width={'28px'} onClick={() => setIsPlaying(true)}/>
        }
        {/* <Playicon width={'28px'} /> */}
        <Forwardicon width={'28px'} />
      </div>
    </div>
  )
}
