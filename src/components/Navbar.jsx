import React, { useState } from 'react'
import { FaHouseDamage, FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/schemes', label: 'Schemes' },
    { to: '/services', label: 'Services' },
    { to: '/updates', label: 'Updates' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact Us' },
  ]

  const activeClass = ({ isActive }) => isActive ? 'text-emerald-600 border-b-2 py-1 border-green-700' : 'text-gray-700'

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0">
      <div className="container mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        {/* Mobile hamburger on left */}
        <div className="flex items-center md:hidden">
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="text-2xl font-medium text-green-700"
          >
            <FaBars />
          </button>
        </div>
        <Link to="/login" className="flex items-center gap-2 text-green-700 md:hidden">
            Login
          </Link>

        {/* Desktop logo + title */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3 text-green-700">
          <div className="p-1 md:p-2 rounded-full border-2 border-green-700"><FaHouseDamage size={24} /></div>
          <span className="text-sm lg:text-lg font-semibold max-w-xs lg:max-w-sm">Suryapura Village Development Portal</span>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-4 lg:gap-6">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} className={activeClass}>{l.label}</NavLink>
            </li>
          ))}
          <Link to="/login" className="hidden md:flex items-center gap-2 bg-green-700 text-white px-3 md:px-4 py-1 md:py-2 text-sm rounded-md hover:bg-green-800 transition-colors">
            Login
          </Link>
        </ul>
      </div>

      {/* Mobile sidebar drawer */}
      <div className={`fixed inset-0 z-40 md:hidden ${open ? 'visible' : 'pointer-events-none'}`}>
        {/* backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/30 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* drawer */}
        <aside
          className={`absolute left-0 top-0 h-full w-3/4 max-w-xs bg-white shadow-lg transform transition-transform ${open ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="flex items-center justify-between px-4 py-4 border-b">
            <div className="flex items-center gap-3 text-green-700">
              <div className="p-1 rounded-full border-2 border-green-700 text-2xl"><FaHouseDamage /></div>
              <span className="text-md font-semibold">Suryapura Village</span>
            </div>
            <button aria-label="Close menu" onClick={() => setOpen(false)} className="text-2xl text-green-700">
              <FaTimes />
            </button>
          </div>

          <nav className="px-4 py-6">
            <ul className="flex flex-col gap-4">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) => `block px-2 py-2 text-lg rounded ${isActive ? 'text-green-700 underline decoration-green-700 underline-offset-4' : 'text-gray-700 hover:text-green-700'}`}
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
    </nav>
  )
}

export default Navbar
