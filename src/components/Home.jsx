import React, { useState,useRef } from 'react'
import {BsSearch,BsPlayCircle,BsThreeDots} from 'react-icons/bs'
import {IoIosNotificationsOutline} from 'react-icons/io'
import {AiOutlineHeart} from 'react-icons/ai'

export default function Home() {
    const  [search,setSearch] = useState(true)
    const [visible, setVisible] = useState(false);
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [recommend1, setRecommend1] = useState(false);
    const [recommend2, setRecommend2] = useState(false);
    const [recommend3, setRecommend3] = useState(false);
    const container = useRef()
    const handleClick = (e) => {
          container.current.classList.remove('animate-scale')
          container.current.classList.add('animate-scale-reverse')
          setSearch(!search)
    }
  return (
    <div className=' p-4'>
    <div className=' flex items-center justify-between relative h-9'>
        {search && <BsSearch className=' text-xl' onClick={()=>setSearch(!search)}/>}
        {!search && <input type="text" ref={container}
        className=' w-96 bg-transparent border-2  border-gray-300 rounded-lg animate-scale
        transition outline-none' onClick={handleClick} placeholder=' Search for songs,artists,albums...'
        autoFocus/>}
        
        <button type="button" class="relative inline-flex items-center font-medium text-center rounded-lg focus:ring-4 focus:outline-none  ">
          <IoIosNotificationsOutline className=' text-3xl'/>
          <span class="sr-only">Notifications</span>
          <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2">5</div>
        </button>

    </div>
    {/* cards */}
    <div className=' flex mt-6 space-x-5'>
      <div className=' flex flex-col justify-between w-1/2 h-64 transition duration-500 hover:scale-105 hover:shadow-lg hover:shadow-pink-400 bg-gradient-to-b from-pink-600 to-pink-300 rounded-3xl p-5'>
        <div>
        <h1 className=' text-5xl font-bold text-white'>GET LOST</h1>
        <h1 className=' text-2xl text-gray-100 opacity-40'>in your music</h1>
        </div>
        <BsPlayCircle className=' text-3xl text-white font-bold'/>
      </div>
      <div className=' flex flex-col justify-between w-1/2 h-64 transition duration-500 hover:scale-105 hover:shadow-lg hover:shadow-blue-400 bg-gradient-to-b from-blue-300 to-blue-600 rounded-3xl p-5'>
        <div>
        <h1 className=' text-5xl font-bold text-white'>MELLOW</h1>
        <h1 className=' text-2xl text-gray-100 opacity-40'>beats</h1>
        </div>
        <BsPlayCircle className=' text-3xl text-white font-bold'/>
      </div>
    </div>
    {/* recently play and recommend for you*/}
    <div className=' flex mt-6 space-x-5'>
    {/* recently play */}
    <div className=' w-1/2'>
     <h1 className=' text-2xl font-semibold'>Recently Played</h1>
     <div className=' flex flex-col mt-3 space-y-5'>
      <div className=' flex items-center hover:bg-gray-100' onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}>
      {visible ? <div className=' flex items-center w-10 h-10 bg-primary opacity-70 rounded'><BsPlayCircle className=' ml-1 text-3xl text-white'/></div>:
      <div className=' w-10 h-10 bg-gray-300 rounded'></div>}
      <h1 className=' font-semibold ml-3 w-48'>All that jazz</h1>
      <h1 className=' text-gray-500 w-36'>Various Artists</h1>
      <h1 className=' text-gray-500 w-16'>13:30</h1>
      <AiOutlineHeart className=' w-16'/>
      <BsThreeDots className=' w-16'/>
      </div>
      <div className=' flex items-center hover:bg-gray-100' onMouseEnter={() => setVisible1(true)}
        onMouseLeave={() => setVisible1(false)}>
      {visible1 ? <div className=' flex items-center w-10 h-10 bg-primary opacity-70 rounded'><BsPlayCircle className=' ml-1 text-3xl text-white'/></div>:
      <div className=' w-10 h-10 bg-gray-300 rounded'></div>}
      <h1 className=' font-semibold ml-3 w-48'>Splashed</h1>
      <h1 className=' text-gray-500 w-36'>Blue-Eyed D...</h1>
      <h1 className=' text-gray-500 w-16'>05:12</h1>
      <AiOutlineHeart className=' w-16'/>
      <BsThreeDots className=' w-16'/>
      </div>
      <div className=' flex items-center hover:bg-gray-100' onMouseEnter={() => setVisible2(true)}
        onMouseLeave={() => setVisible2(false)}>
      {visible2 ? <div className=' flex items-center w-10 h-10 bg-primary opacity-70 rounded'><BsPlayCircle className=' ml-1 text-3xl text-white'/></div>:
      <div className=' w-10 h-10 bg-gray-300 rounded'></div>}
      <h1 className=' font-semibold ml-3 w-48'>Prism</h1>
      <h1 className=' text-gray-500 w-36'>Gus Bot</h1>
      <h1 className=' text-gray-500 w-16'>03:22</h1>
      <AiOutlineHeart className=' w-16'/>
      <BsThreeDots className=' w-16'/>
      </div>
      <div className=' flex items-center hover:bg-gray-100' onMouseEnter={() => setVisible3(true)}
        onMouseLeave={() => setVisible3(false)}>
      {visible3 ? <div className=' flex items-center w-10 h-10 bg-primary opacity-70 rounded'><BsPlayCircle className=' ml-1 text-3xl text-white'/></div>:
      <div className=' w-10 h-10 bg-gray-300 rounded'></div>}
      <h1 className=' font-semibold ml-3 w-48'>Mind-blowing Beats</h1>
      <h1 className=' text-gray-500 w-36'>Various Artists</h1>
      <h1 className=' text-gray-500 w-16'>09:10</h1>
      <AiOutlineHeart className=' w-16'/>
      <BsThreeDots className=' w-16'/>
      </div>
     </div>
    </div>
    {/* recommend for you */}
    <div className=' w-1/2'>
     <h1 className=' text-2xl font-semibold'>Recommended For You</h1>
     <div className=' flex mt-3 space-x-7'>
      <div onMouseEnter={() => setRecommend1(true)} onMouseLeave={() => setRecommend1(false)}>
      {recommend1 ? <div className=' flex items-center w-36 h-36 bg-primary opacity-70 rounded-xl'><BsPlayCircle className=' ml-11 text-5xl text-white'/></div>:
      <div className=' w-36 h-36 bg-gray-300 rounded-xl'></div>}
      <h1 className=' text-lg font-semibold mt-2'>Best of Blues</h1>
      <h1 className=' text-gray-500'>Jazzmaster Bill</h1>
      </div>
      <div onMouseEnter={() => setRecommend2(true)} onMouseLeave={() => setRecommend2(false)}>
      {recommend2 ? <div className=' flex items-center w-36 h-36 bg-primary opacity-70 rounded-xl'><BsPlayCircle className=' ml-11 text-5xl text-white'/></div>:
      <div className=' w-36 h-36 bg-gray-300 rounded-xl'></div>}
      <h1 className=' text-lg font-semibold mt-2'>Out of This World</h1>
      <h1 className=' text-gray-500'>Lily Wonders</h1>
      </div>
      <div onMouseEnter={() => setRecommend3(true)} onMouseLeave={() => setRecommend3(false)}>
      {recommend3 ? <div className=' flex items-center w-36 h-36 bg-primary opacity-70 rounded-xl'><BsPlayCircle className=' ml-11 text-5xl text-white'/></div>:
      <div className=' w-36 h-36 bg-gray-300 rounded-xl'></div>}
      <h1 className=' text-lg font-semibold mt-2'>Acoustics</h1>
      <h1 className=' text-gray-500'>The Spaceman</h1>
      </div>
     </div>
    </div>
    </div>
    </div>
  )
}
