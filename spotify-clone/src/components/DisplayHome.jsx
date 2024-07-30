import React, { useContext } from 'react'
import NAvbar from './NAvbar'
// import { albumsData } from '../assets/assets'
import Albumitem from './Albumitem'
// import { songsData } from '../assets/assets'
import Songitem from './Songitem'
import { PlayerContext } from '../context/PlayerContext'

const DisplayHome = () => {

  const {songsData,albumsData}=useContext(PlayerContext);

  return (
    <>
      <NAvbar />
      <div className='mb-4'>
        <h1>Featured Charts</h1>
        <div className='flex overflow-auto'>
          {albumsData.map((item, index) => (
            <Albumitem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item._id}
              image={item.image}
            />
          ))}
        </div>

      </div>
      <div className='mb-4'>
        <h1>Todays biggest hits</h1>
        <div className='flex overflow-auto'>
          {songsData.map((item,index)=>(
            <Songitem
            key={index}
            name={item.name}
            desc={item.desc}
            id={item._id}
            image={item.image}
            />
          ))}
        </div>

      </div>
    </>
  )
}

export default DisplayHome