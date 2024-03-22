import React from "react";


function NavBar() {
  return (
    <header className="bg-white dark:bg-gray-900">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a className="block text-gray-600" href="index.html">
          <span className="sr-only">Home</span>
          <img className="h-8" src="./src/assets/img/pool.png" alt="Logo" />
        </a>
        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a className="text-gray-500 transition hover:text-gray-700" href="#">
                  Nosotros
                </a>
              </li>
              <li>
                <a className="text-gray-500 transition hover:text-gray-700" href="#">
                  Servicio
                </a>
              </li>
              <li>
                <a className="text-gray-500 transition hover:text-gray-700" href="#">
                  Ubicacion
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="block rounded-md bg-gray-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-700"
                href="#"
              >
                Login
              </a>
              <a
                className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-gray-600 transition hover:text-gray-700 sm:block"
                href="#"
              >
                Register
              </a>
            </div>

            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-700 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;