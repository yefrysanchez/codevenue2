import React from 'react'
import TrackCard from './TrackCard'

const RecentlyPlayed = () => {
  return (
    <div className='lg:w-1/2'>
        <h2 className="font-bold mb-4 tracking-tighter capitalize text-xl">Recently Played</h2>
        <div className='scrollbar-hide overflow-x-auto flex gap-4 lg:flex-col h-[300px] lg:overflow-x-hidden lg:overflow-y-auto'>
            <TrackCard />
            <TrackCard />
            <TrackCard />
            <TrackCard />
           
        </div>
    </div>
  )
}

export default RecentlyPlayed