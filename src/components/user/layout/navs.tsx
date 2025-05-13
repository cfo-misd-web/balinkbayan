import NavLinks from "../partials/navlinks"


export default function Nav() {
  return (
    <nav className="w-full mx-auto max-lg:hidden py-2.5 bg-white">
      <div className="bg-transparent">
        <div className="border-t border-gray-200 bg-white hidden md:block">
          <div className="max-w-7xl mx-auto">
            <NavLinks className="text-gray-700" />
          </div>
        </div>
      </div>
    </nav>
  )
}