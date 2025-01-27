import { Outlet, Link } from "react-router-dom";

export function Layout() {
    return (
<div className="flex flex-col min-h-screen">
<header className="bg-gradient-to-r from-green-800 to-green-400 text-white py-4 shadow-lg">
  <div className="container mx-auto flex justify-between items-center px-4">
    <h1 className="text-3xl font-extrabold tracking-wide">Movie App</h1>
    <nav>
      <ul className="flex space-x-6">
        <li>
          <Link
            to="/"
            className="text-white hover:text-green-200 font-semibold transition duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/movies"
            className="text-white hover:text-green-200 font-semibold transition duration-300"
          >
            Movies
          </Link>
        </li>
      </ul>
    </nav>
  </div>
</header>

  {/* Main Content */}
  <main className="flex-grow container mx-auto px-6 py-10 bg-gray-50 rounded-md shadow-md">
    <Outlet />
  </main>

  {/* Footer */}
  <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 py-8">
    <div className="container mx-auto text-center">
      <h1 className="text-xl font-semibold">Created by Enrico Ricciardella</h1>
      <p className="text-sm mt-2">
        &copy; {new Date().getFullYear()} Movie App. All rights reserved.
      </p>
    </div>
  </footer>
</div>
    );
}
