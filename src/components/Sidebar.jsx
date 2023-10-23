import React, { useState } from 'react'
import { Link,NavLink } from 'react-router-dom'
import {AiOutlineHome,AiOutlineRise,AiOutlinePlusCircle,AiOutlineLogout} from  'react-icons/ai'
import {GiLoveSong} from 'react-icons/gi'
import {PiPlaylistDuotone,PiUserListDuotone} from 'react-icons/pi'
import {LuListVideo} from  'react-icons/lu'
import {GoDotFill} from 'react-icons/go'
import {BiSolidUserCircle} from 'react-icons/bi'
import {IoIosArrowDown} from 'react-icons/io'
import Switch from '@mui/material/Switch'

export default function Sidebar() {
    const [openDropDown, setopenDropDown] = useState(false);
  return (
    <nav className=' w-60 min-h-screen border-r bg-gray-100 border-gray-50 relative'>
    <div className=' flex ml-2'>
        <GoDotFill className=' text-red-400 text-2xl'/>
        <GoDotFill className=' text-yellow-400 text-2xl'/>
        <GoDotFill className=' text-green-400 text-2xl'/>
    </div>
    <div className=' flex items-center pl-4 space-x-1 mt-5'  onClick={() => {setopenDropDown(!openDropDown)}}>
    <BiSolidUserCircle className=' text-5xl'/>
    <div className=' flex flex-col'>
        <h3 className=' text-primary font-semibold mb-1'>Joshua</h3>
        <div className=' border-2 border-gray-300 text-gray-300 text-sm rounded'>PREMIUM</div>
    </div>
    <IoIosArrowDown className=' mb-4'/>
    </div>
    {openDropDown && (                          
          <div className="absolute flex flex-col ml-4 bg-white z-20 shadow-lg min-w-[100px] rounded-lg">
            <div className=' flex justify-between p-1 items-center'>
            <div className=' border-2 border-red-300 text-red-300 rounded text-sm px-1'>PREMIUM</div>
            <h1 className=' text-gray-300 text-sm'>Through 11/2</h1>
            </div>
            <div className=' flex justify-between p-1 items-center'>
            <h1>Private</h1>
            <Switch />
            </div>
            <div className=' flex justify-between p-1 items-center'>
            <h1>Explicit Filter</h1>
            <Switch />
            </div>
            <div className=' flex justify-between p-1 items-center'>
            <h1>Friend Activity</h1>
            <Switch />
            </div>
            <h1 className=' p-1'>Account Setting</h1>
            <div className=' flex  justify-end space-x-1 items-center text-gray-400 p-1'>
            <h1>Logout</h1>
            <AiOutlineLogout/>
            </div>
            
          </div>
        )}
    <div className=' flex flex-col justify-between mt-5 pl-5 h-screen sticky top-0'>
    <ul>
        <h3 className=' text-gray-400 font-semibold'>BROWSE</h3> 
        <li>
            <NavItem to='/'>
            <AiOutlineHome/>
            <span>Home</span>
            </NavItem>
        </li>
        <li>
            <NavItem to='/songs'>
            <GiLoveSong/>
            <span>Songs</span>
            </NavItem>
        </li>
        <li>
            <NavItem to='/playlists'>
            <PiPlaylistDuotone/>
            <span>Playlists</span>
            </NavItem>
        </li>
        <li>
            <NavItem to='/justforu'>
            <PiUserListDuotone/>
            <span>Just for You</span>
            </NavItem>
        </li>
        <li>
            <NavItem to='/topcharts'>
            <AiOutlineRise/>
            <span>Top Charts</span>
            </NavItem>
        </li>
        <div className=' flex justify-between pr-5 items-center mt-8'> 
        <h3 className=' text-gray-400 font-semibold'>YOUR PLAYLISTS</h3> 
        <AiOutlinePlusCircle className=' text-lg'/>
        </div>
        <li>
            <NavItem to='/workout'>
            <LuListVideo/>
            <span>Workout Mix</span>
            </NavItem>
        </li>
        <li>
            <NavItem to='/chillin'>
            <LuListVideo/>
            <span>Chillin' Home</span>
            </NavItem>
        </li>
        <li>
            <NavItem to='/booping'>
            <LuListVideo/>
            <span>Booping at Adobe</span>
            </NavItem>
        </li>
        <li>
            <NavItem to='/xd'>
            <LuListVideo/>
            <span>XD 4 Life</span>
            </NavItem>
        </li>
    </ul>
    </div>
    </nav>
  )
}

const NavItem = ({children,to}) =>{
    const commonClasses = ' flex items-center space-x-2 text-lg p-2 hover:opacity-80'
    return (
        <NavLink className={({isActive})=> (isActive ? 'text-primary' : 'text-gray-500') + commonClasses} to={to}>
            {children}
        </NavLink>
    )
}
