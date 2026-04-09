import { Link } from "react-router"
import img2 from "../assets/img2.png"

export default function Categories() {
  return (
    <div>
      <div className="flex items-center justify-between px-10">
        <h2 className="flex p-4 px-6 text-3xl font-bold">Categories</h2>
        <Link
          to="#"
          className="text-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-blue-700"
        >
          View all
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-6 px-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="mx-auto overflow-hidden rounded-2xl bg-gray-100 p-10 transition duration-300 ease-in-out hover:scale-105">
          <img
            src={img2}
            alt="sofa"
            className="h-50 w-50 rounded-2xl object-cover transition duration-300 ease-in-out hover:scale-105"
          />
          <p className="mt-2 text-gray-500">Modern Sofa</p>
          <p className="text-lg font-bold text-black">$999.99</p>
        </div>
        <div className="mx-auto overflow-hidden rounded-2xl bg-gray-100 p-10 transition duration-300 ease-in-out hover:scale-105">
          <img
            src={img2}
            alt="sofa"
            className="h-50 w-50 rounded-2xl object-cover transition duration-300 ease-in-out hover:scale-105"
          />
          <p className="mt-2 text-gray-500">Contemporary Bed</p>
          <p className="text-lg font-bold text-black">$1,299.99</p>
        </div>
        <div className="mx-auto overflow-hidden rounded-2xl bg-gray-100 p-10 transition duration-300 ease-in-out hover:scale-105">
          <img
            src={img2}
            alt="sofa"
            className="h-50 w-50 rounded-2xl object-cover transition duration-300 ease-in-out hover:scale-105"
          />
          <p className="mt-2 text-gray-500">Classic Chair</p>
          <p className="text-lg font-bold text-black">$899.99</p>
        </div>
        <div className="mx-auto overflow-hidden rounded-2xl bg-gray-100 p-10 transition duration-300 ease-in-out hover:scale-105">
          <img
            src={img2}
            alt="sofa"
            className="h-50 w-50 rounded-2xl object-cover transition duration-300 ease-in-out hover:scale-105"
          />
          <p className="mt-2 text-gray-500">Classic Chair</p>
          <p className="text-lg font-bold text-black">$899.99</p>
        </div>
      </div>
    </div>
  )
}
