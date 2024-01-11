import React from 'react'
import './Playlist.css'

const songs = [
  {id: 1, title: 'Malare', artist: 'Vijay Yesudas', album: 'Premam', duration: '5:13'},
  {id: 2, title: 'Yennai Maatrum Kadhale', artist: 'A.R. Rahman', album: 'Naanum Rowdy Dhaan', duration: '4:25'},
  {id: 3, title: 'Evare', artist: 'Vikram', album: 'Premam (Telugu)', duration: '4:32'},
  {id: 4, title: 'Kaatru Veliyidai', artist: 'A.R. Rahman', album: 'Kaatru Veliyidai', duration: '5:45'},
  {id: 5, title: 'Maari Thara Local', artist: 'Anirudh Ravichander', album: 'Maari', duration: '3:38'},
  {id: 6, title: 'Unnai Kaanadhu Naan', artist: 'Karthik', album: 'Vishwaroopam', duration: '5:38'},
  {id: 7, title: 'Vellipomaakey', artist: 'Sid Sriram', album: 'Saahasam Swaasaga Saagipo', duration: '5:48'},
  {id: 8, title: 'Levitating', artist: 'Dua Lipa', album: 'Future Nostalgia', duration: '3:23'},
  {id: 9, title: 'Yellae Lama', artist: 'A.R. Rahman', album: '7aum Arivu', duration: '5:24'},
  {id: 10, title: 'Sunflower', artist: 'Post Malone, Swae Lee', album: 'Spider-Man: Into the Spider-Verse', duration: '2:38'},
];

export default function Playlist() {
  return (
    <div className='Playlist-container'>
      <div className='Playlist-header'>
         <div className='Playlist-image-card'>

         </div>
         <div className='Playlist-body'>
          <p>Playlist</p>
          <h1>Best of Mine </h1>
         </div>
      </div>
      <div className='Playlist-displaytitle'>
      <div className='Playlist-list'>
        <div className='Playlist-list-id'>#</div>
        <div className='Playlist-list-title'>Title</div>
        <div className='Playlist-list-album'>Album</div>
        <div className='Playlist-list-duration'>Duration</div>
      </div>
      </div>

      <div className='Playlist-list-container'>
      {
          songs.map((item)=>{
            return (
              <div className='Playlist-list'>
                <div className='Playlist-list-id'>
                  {item.id}
                </div>
                <div className='Playlist-list-title'>
                  {item.title}
                </div>
                <div className='Playlist-list-album'>
                  {item.album}
                </div>
                <div className='Playlist-list-duration'>
                  {item.duration}
                </div>
              </div>
          )
          })
        }
      </div>
    </div>
  )
}
