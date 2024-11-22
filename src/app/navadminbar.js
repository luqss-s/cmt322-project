import React from 'react';


const Navbaradmin = () => {
  return (
    <nav id="navbar" className="bg-black">
      <div className="w-screen px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div>
            <a href="/adminpage">

              <img className="h-12 w-24 inline" src="/logobotb.png" alt="Your Company" />
            </a>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0"></div>
            <div className="hidden md:block">
              <div className="mr-8 flex items-baseline space-x-4">
                <a href="#" className="bg-gray-900 text-white hover:text-blue-600 rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Ticket</a>
                <a href="/BandAdmin" className="bg-gray-900 text-white hover:text-blue-600 rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Band</a>
                <a href="/merch_admin" className="bg-gray-900 text-white hover:text-blue-600 rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Merchandise</a>
                <a href="#" className="bg-gray-900 text-white hover:text-blue-600 rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Vote</a>
              
               
              </div>
              
            </div>

          </div>

          <div className="hidden md:block">
            <div className="mr-100 flex items-center md:ml-5 space-x-2">
              <a href="/" className="bg-red-600 text-gray-300 hover:bg-gray-700 hover:text-red-600 rounded-md px-3 py-2 text-sm font-medium">Log Out</a>
      
          </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button type="button" className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-controls="mobile-menu" aria-expanded="false">
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbaradmin;
