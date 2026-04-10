import { Link } from "react-router"

import img2 from "../assets/img2.png"

export default function Navigation() {
  return (
    <div>
      <div className="relative flex h-20 shrink-0 items-center justify-between gap-2 overflow-hidden bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300">
        <div className="flex items-center gap-5 p-10">
          <Link to="/">
            <img
              src={img2}
              alt="sofa"
              className="flex h-10 w-10 shrink-0 rounded-lg"
            />
          </Link>
          <Link
            to="/"
            className="relative flex overflow-auto text-2xl font-bold"
          >
            Furniture
          </Link>
        </div>

        <div>
          <ul className="flex justify-end gap-5 px-10 text-lg font-medium">
            <Link
              to="/"
              className="scale-100 transition duration-300 ease-in-out hover:text-blue-400"
            >
              Home
            </Link>
            <Link
              to="/About"
              className="scale-100 transition duration-300 ease-in-out hover:text-blue-400"
            >
              About
            </Link>
            <Link
              to="#"
              className="scale-100 transition duration-300 ease-in-out hover:text-blue-400"
            >
              Service
            </Link>
            <Link
              to="/Contact"
              className="scale-100 transition duration-300 ease-in-out hover:text-blue-400"
            >
              Contact
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}
