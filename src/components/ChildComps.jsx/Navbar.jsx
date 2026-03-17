

import React, { useState } from 'react'

const links = [
  { text: "Home", link: "/#" },
  { text: "About", link: "/#about" },
  { text: "Category", link: "/#categories" },
  { text: "Contact", link: "/#contact" },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      className="
      
        w-full
        bg-white
        px-6 md:px-30 py-10
      "
    >
      {/* Top bar */}
      <div className="flex items-center justify-between h-20">
        
        {/* Logo */}
        <img
          src="/logo2.png"
          alt="Logo"
          className="w-32 md:w-40 cursor-pointer"
        />

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-10 text-2xl font-medium text-gray-700">
          {links.map((item) => (
            <li key={item.text} className="relative group">
              <a
                href={item.link}
                className="transition-colors duration-300 hover:text-[#1c94fc]"
              >
                {item.text}
              </a>

              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#1c94fc] transition-all duration-300 group-hover:w-full" />
            </li>
          ))}

          <li>
            <button
              className="
                relative overflow-hidden
                bg-[#49c1ef] 
                px-10 py-5 
                font-bold
                transition-all duration-300
                hover:scale-105 hover:shadow-lg
                active:scale-95
              "
            >
              Nominate
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden flex flex-col gap-6 pb-6 text-lg font-medium text-gray-700">
          {links.map((item) => (
            <li key={item.text}>
              <a
                href={item.link}
                className="block hover:text-[#1c94fc]"
                onClick={() => setOpen(false)}
              >
                {item.text}
              </a>
            </li>
          ))}

          <li>
            <button
              className="
                w-full bg-[#1c94fc] text-white
                py-3 rounded-full font-semibold
                transition-all duration-300
                hover:shadow-lg
              "
            >
              Contact
            </button>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar
