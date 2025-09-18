import React from 'react'

const Footer = () => {
   return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">
          
          <div className="col-span-1">
            <div className="flex items-center mb-4">
               <svg className="h-8 w-8 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v11.494m-9-5.747h18"/>
               </svg>
              <h2 className="text-xl font-bold text-white">University Connect</h2>
            </div>
            <p className="text-sm text-gray-400">Streamlining the future of education, one registration at a time.</p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.72-1.88-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.76 2.81 1.91 3.58-.7-.02-1.36-.21-1.94-.53v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.93.07 4.28 4.28 0 004 2.98 8.521 8.521 0 01-5.33 1.84c-.35 0-.69-.02-1.03-.06A12.022 12.022 0 007.82 20c7.64 0 11.82-6.36 11.82-11.82 0-.18 0-.36-.01-.54.82-.59 1.52-1.33 2.08-2.18z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04c-5.5 0-10 4.49-10 10s4.5 10 10 10 10-4.49 10-10-4.5-10-10-10zm2.25 10.5h-1.5v5.5h-2.5v-5.5h-1v-2h1v-1.1c0-1 .51-2.4 2.4-2.4l1.6.01v1.98h-1.01c-.36 0-.49.18-.49.52v1h1.5l-.25 2z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5v-7h-2v7h2zm-1-8.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm6 8.5h-2v-3.5c0-.84-.02-1.92-1.17-1.92-.95 0-1.35.73-1.35 1.85v3.57h-2v-7h1.92v.87h.03c.26-.5.9-1.03 1.89-1.03 2.03 0 2.4 1.34 2.4 3.08v4.61z"/></svg>
              </a>
            </div>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-indigo-400 transition duration-300">About Us</a></li>
              <li><a href="#contact" className="hover:text-indigo-400 transition duration-300">Register</a></li>
              <li><a href="#faq" className="hover:text-indigo-400 transition duration-300">FAQ</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition duration-300">Admissions</a></li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-indigo-400 transition duration-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition duration-300">Terms of Service</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition duration-300">Cookie Policy</a></li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="mr-2 mt-1">&#128205;</span> 123 University Drive, Knowledge City, 12345
              </li>
              <li className="flex items-start">
                 <span className="mr-2 mt-1">&#9993;</span> admissions@university.edu
              </li>
              <li className="flex items-start">
                 <span className="mr-2 mt-1">&#9742;</span> (123) 456-7890
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} University Connect. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;