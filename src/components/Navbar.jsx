import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { name: 'ГЛАВНАЯ', to: '/' },
  { name: 'РАСПИСАНИЕ', to: '/timetable' },
]

const Navbar = () => {
  return (
    <div className='shadow'>
      <div className='bg-slate-200 py-1 flex items-center justify-between border-teal-200 border-b-2 px-5'>
        <h1 className='text-xl leading-none text-slate-900 font-bold'>БД-27</h1>
        <nav>
          <ul className=' flex justify-center gap-7'>
            {links.map(link => <li><NavLink className='py-3 block text-lg leading-none' to={link.to}>{link.name}</NavLink></li>)}
          </ul>
        </nav>
      </div>
      
    </div>
  )
}

export default Navbar