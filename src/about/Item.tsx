import img2 from "../assets/img2.png"
import Navigation from "@/home/Navigation"
export default function Item() {
  return (
    <div>
      <div className="bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300">
        <div>
          <Navigation />
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <div className="grid auto-rows-min gap-4 p-6 md:grid-cols-3">
            <div className="bg-muted/50 aspect-video rounded-xl">
              <img
                src={img2}
                alt="Image"
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
            <div className="bg-muted/50 aspect-video rounded-xl">
              <img
                src={img2}
                alt="Image"
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>{" "}
            <div className="bg-muted/50 aspect-video rounded-xl">
              <img
                src={img2}
                alt="Image"
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
            <div className="bg-muted/50 aspect-video rounded-xl">
              <img
                src={img2}
                alt="Image"
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
            <div className="bg-muted/50 aspect-video rounded-xl">
              <img
                src={img2}
                alt="Image"
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>{" "}
            <div className="bg-muted/50 aspect-video rounded-xl">
              <img
                src={img2}
                alt="Image"
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
          </div>
          <div className="bg-muted/50 aspect-video rounded-xl">
            <img
              src={img2}
              alt="Image"
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>{" "}
          <div className="grid auto-rows-min gap-4 p-6 md:grid-cols-3">
            <div className="bg-muted/50 aspect-video rounded-xl">
              <img
                src={img2}
                alt="Image"
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
            <div className="bg-muted/50 aspect-video rounded-xl">
              <img
                src={img2}
                alt="Image"
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
            <div className="bg-muted/50 aspect-video rounded-xl">
              <img
                src={img2}
                alt="Image"
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
