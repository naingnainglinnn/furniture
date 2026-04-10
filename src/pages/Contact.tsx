import { Footer, Login } from "@/components"
import Navigation from "@/pages/Navigation"

export default function Contact() {
  return (
    <div className="bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300">
      <div>
        <Navigation />
        <Login />
        <Footer />
      </div>
    </div>
  )
}
