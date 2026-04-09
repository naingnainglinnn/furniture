import { Link } from "react-router"
import img2 from "../assets/img2.png"

export default function Premium() {
  return (
    <div>
      <div className="flex items-center justify-between px-10 py-10">
        <h3 className="flex p-4 px-6 text-3xl font-bold">Premium</h3>
        <Link
          to="#"
          className="text-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-blue-700"
        >
          View all
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <div className="mx-auto w-110 overflow-hidden rounded-2xl bg-gray-100 p-10 transition duration-300 ease-in-out hover:scale-90">
          <div className="h-80 w-full gap-6">
            <p className="absolute inline-block rounded-2xl bg-red-500 px-2 py-1 text-xs font-bold text-white">
              Premium
            </p>
            <img
              src={img2}
              alt="sofa"
              className="h-80 w-100 rounded-2xl object-cover transition duration-300 ease-in-out hover:scale-125"
            />
          </div>
          <p className="mt-2 py-4 text-gray-500">Modern Sofa</p>
          <p className="text-lg font-medium text-black">
            Scandinavian Oak Wood TV Console BERRY WALNUT
          </p>
          <p className="py-3 text-lg font-bold text-black">$999.99</p>
        </div>
        <div className="mx-auto w-110 overflow-hidden rounded-2xl bg-gray-100 p-10 transition duration-300 ease-in-out hover:scale-90">
          <div className="h-80 w-full gap-6">
            <p className="absolute inline-block rounded-2xl bg-red-500 px-2 py-1 text-xs font-bold text-white">
              Premium
            </p>
            <img
              src={img2}
              alt="sofa"
              className="h-80 w-100 rounded-2xl object-cover transition duration-300 ease-in-out hover:scale-125"
            />
          </div>
          <p className="mt-2 py-4 text-gray-500">Modern Sofa</p>
          <p className="text-lg font-medium text-black">
            Scandinavian Oak Wood TV Console BERRY WALNUT
          </p>
          <p className="py-3 text-lg font-bold text-black">$999.99</p>
        </div>
        <div className="mx-auto w-110 overflow-hidden rounded-2xl bg-gray-100 p-10 transition duration-300 ease-in-out hover:scale-90">
          <div className="h-80 w-full gap-6">
            <p className="absolute inline-block rounded-2xl bg-red-500 px-2 py-1 text-xs font-bold text-white">
              Premium
            </p>
            <img
              src={img2}
              alt="sofa"
              className="h-80 w-100 rounded-2xl object-cover transition duration-300 ease-in-out hover:scale-125"
            />
          </div>
          <p className="mt-2 py-4 text-gray-500">Modern Sofa</p>
          <p className="text-lg font-medium text-black">
            Scandinavian Oak Wood TV Console BERRY WALNUT
          </p>
          <p className="py-3 text-lg font-bold text-black">$999.99</p>
        </div>
      </div>
    </div>
  )
}
