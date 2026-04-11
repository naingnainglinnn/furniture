import { Link } from "react-router"

export default function Footer() {
  return (
    <div className="py-6">
      <footer className="bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 sm:grid-cols-2 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
              Furniture
            </h2>
            <p className="text-sm">
              Clean UI with smooth animation and responsive layout.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 font-semibold">Links</h3>
            <ul className="space-y-3 text-base/relaxed">
              <div className="h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-6">
                <div className="transition-all duration-300 group-hover:translate-x-2 hover:text-blue-500">
                  <Link to="/">Home</Link>
                </div>
                <div className="transition-all duration-300 group-hover:translate-x-2 hover:text-blue-500">
                  <Link to="./about">About</Link>
                </div>
                <div className="transition-all duration-300 group-hover:translate-x-2 hover:text-blue-500">
                  <Link to="#">Services</Link>
                </div>
                <div className="transition-all duration-300 group-hover:translate-x-2 hover:text-blue-500">
                  <Link to="#">Contact</Link>
                </div>
              </div>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 font-semibold">Follow</h3>
            <div className="flex gap-4">
              {["🌐", "🐦", "📸"].map((icon, i) => (
                <div
                  key={i}
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white shadow transition-all duration-300 hover:-translate-y-2 hover:shadow-lg dark:bg-gray-800"
                >
                  <span className="transition-transform duration-300 hover:scale-125">
                    {icon}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-7 border-t border-gray-300 py-4 text-center text-sm dark:border-gray-700">
          © {new Date().getFullYear()} Furniture
        </div>
      </footer>
    </div>
  )
}
