import { Link } from "react-router"
import img2 from "../assets/img2.png"

export default function Categories() {
  return (
    <div>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="bg-muted/50 min-h-screen flex-1 rounded-xl md:min-h-min">
          <img
            src={img2}
            alt="Furniture"
            className="h-150 w-full rounded-2xl object-cover transition-transform duration-300"
          />
        </div>
        <div className="flex items-center justify-between p-5">
          <h2 className="flex text-3xl font-bold">Categories</h2>
          <Link
            to="#"
            className="text-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-blue-700"
          >
            View all
          </Link>
        </div>
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="bg-muted/50 aspect-video rounded-xl">
            <img
              src={img2}
              alt="Furniture"
              className="h-full w-full rounded-2xl object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="bg-muted/50 aspect-video rounded-xl">
            <img
              src={img2}
              alt="Furniture"
              className="h-full w-full rounded-2xl object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="bg-muted/50 aspect-video rounded-xl">
            <img
              src={img2}
              alt="Furniture"
              className="h-full w-full rounded-2xl object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="bg-muted/50 aspect-video rounded-xl">
            <img
              src={img2}
              alt="Furniture"
              className="h-full w-full rounded-2xl object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="bg-muted/50 aspect-video rounded-xl">
            <img
              src={img2}
              alt="Furniture"
              className="h-full w-full rounded-2xl object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="bg-muted/50 aspect-video rounded-xl">
            <img
              src={img2}
              alt="Furniture"
              className="h-full w-full rounded-2xl object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
