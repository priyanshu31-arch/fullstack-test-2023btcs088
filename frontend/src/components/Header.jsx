import React from 'react'

const Header = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
             <svg className="h-8 w-8 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v11.494m-9-5.747h18"/>
             </svg>
            <h1 className="text-xl font-bold text-gray-900">University Connect</h1>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-gray-600 hover:text-indigo-600 transition duration-300">About</a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition duration-300">Contact</a>
            <a href="#faq" className="text-gray-600 hover:text-indigo-600 transition duration-300">FAQ</a>
            <a href="#contact" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300">Register Now</a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4">
            <a href="#about" className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100">About</a>
            <a href="#contact" className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100">Contact</a>
            <a href="#faq" className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100">FAQ</a>
            <a href="#contact" className="block py-2 px-4 text-sm bg-indigo-600 text-white rounded-md mt-2 text-center">Register Now</a>
          </div>
        )}
      </div>
    </header>
  );
};


export default Header;
