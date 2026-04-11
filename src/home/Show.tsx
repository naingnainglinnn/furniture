import { useEffect, useState } from "react"
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"

export default function Show() {
  const [current, setCurrent] = useState<number>(0)

  const slides = [img1, img2, img3]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <div>
      {" "}
      <div className="relative h-100 overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {slides.map((img, index) => (
            <img
              key={index}
              src={img}
              className="h-100 w-full shrink-0 object-cover"
            />
          ))}
        </div>

        <div className="absolute bottom-3 flex w-full justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-3 w-3 cursor-pointer rounded-full ${
                i === current ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
