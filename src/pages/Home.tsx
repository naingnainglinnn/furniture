import Navigation from "@/main/Navigation"
import Footer from "@/main/Footer"
import Show from "@/home/Show"

export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300">
      <div>
        <Navigation />
        <Show />
        <Footer />
      </div>
    </div>
  )
}
