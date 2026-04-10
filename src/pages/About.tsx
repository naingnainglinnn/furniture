import {
  Categories,
  Footer,
  Navigation,
  NewArrival,
  Premium,
} from "@/components"

export default function About() {
  return (
    <div className="bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300">
      <div>
        <Navigation />
        <Categories />
        <NewArrival />
        <Premium />
        <Footer />
      </div>
    </div>
  )
}
