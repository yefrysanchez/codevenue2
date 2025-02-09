"use client";

import React, { useState } from 'react'
import { CiShuffle } from 'react-icons/ci'
import { IoIosPlay, IoIosPause, IoIosRepeat } from 'react-icons/io'
import { MdSkipPrevious, MdSkipNext} from 'react-icons/md'

const PlayerControls = () => {
const [isPlaying, setIsPlaying] = useState(false)
  return (
    <div className='w-3/5 '>
        <div className='flex items-center justify-center gap-4'>
            <button className='hidden md:block'><CiShuffle size={30} /></button>
            <button><MdSkipPrevious size={30} /></button>
            <button onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? <IoIosPause size={30} /> : <IoIosPlay size={30} />}</button>
            <button><MdSkipNext size={30} /></button>
            <button className='hidden md:block'><IoIosRepeat size={30} /></button>
        </div>
        <div className='px-2 mt-4 hidden md:block '>
            <input className='w-full' type="range" name="track" />
        </div>
    </div>
  )
}

export default PlayerControls