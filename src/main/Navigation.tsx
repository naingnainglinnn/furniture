import { Link, NavLink } from "react-router"

import { useState } from "react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <header className="">
        <nav className="container mx-auto flex items-center justify-between">
          <Link to="/">Furniture</Link>
          <button className="block lg:hidden" onClick={toggleMenu}>
            &#8801;
          </button>

          <ul className="hidden space-x-6 lg:flex">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-yellow-300" : "hover:text-gray-300"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-yellow-300" : "hover:text-gray-300"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-yellow-300" : "hover:text-gray-300"
                }
              >
                Home
              </NavLink>
            </li>
          </ul>
          <div
            className={`bg-opacity-50 fixed inset-0 z-50 transform bg-black ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out lg:hidden`}
          >
            <div className="flex h-full flex-col items-center justify-center space-y-6">
              <Link to="/" className="hover:text-yellow-300">
                Home
              </Link>
              <Link to="/" className="hover:text-yellow-300">
                Home
              </Link>
              <Link to="/" className="hover:text-yellow-300">
                Home
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
