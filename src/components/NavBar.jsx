import { Link } from "react-router-dom"

const NavBar = ({ token, username, handleLogout }) => {
  return (
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
        <a href="#" className="flex items-center">
          <h1 className="self-center text-xl font-bold whitespace-nowrap">
            🐇 Rabbit Snacks 🥕
          </h1>
        </a>
        <div className="flex items-center lg:order-2">
          {token && username ? (
            <div className="logged-in-group navbar bg-base-300">
              <p>Hello, {username}!</p>
              <button
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                onClick={handleLogout}
              >
                Log Out
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Log In
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
