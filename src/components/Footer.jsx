export default function Footer() {
  return (
    <footer className="bg-[#b0aeb7] text-white py-6">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
    
    {/* Left Side - Links */}
    <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-sm">
      <li className="hover:shadow-xl hover:-translate-y-1 transition-all
">About Us</li>
      <li className="hover:shadow-xl hover:-translate-y-1 transition-all
">Contact Us</li>
      <li className="hover:shadow-xl hover:-translate-y-1 transition-all
">Resources</li>
    </ul>

    {/* Divider Line */}
    <div className="hidden md:block h-6 border-l border-white mx-6"></div>

    {/* Right Side - Social Media */}
    <div className="flex space-x-4">
      {/* Facebook */}
      <a href="#" aria-label="Facebook">
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 hover:shadow-xl hover:-translate-y-1 transition-all
"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6V12h3l-.5 3h-2.5v7A10 10 0 0 0 22 12z" />
        </svg>
      </a>
      {/* Twitter */}
      <a href="#" aria-label="Twitter">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 hover:shadow-xl hover:-translate-y-1 transition-all
"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.2 4.2 0 0 0 1.84-2.32 8.3 8.3 0 0 1-2.65 1A4.15 4.15 0 0 0 16.1 4c-2.3 0-4.2 1.9-4.2 4.2 0 .33.04.65.1.95a11.9 11.9 0 0 1-8.65-4.4 4.1 4.1 0 0 0 1.3 5.6c-.7 0-1.3-.2-1.9-.5v.05c0 2 1.5 3.7 3.4 4a4.2 4.2 0 0 1-1.9.1c.6 1.8 2.3 3 4.3 3a8.4 8.4 0 0 1-6.2 1.7A11.9 11.9 0 0 0 12 21c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2.1-2.1z" />
        </svg>
      </a>
      {/* LinkedIn */}
      <a href="#" aria-label="LinkedIn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 hover:shadow-xl hover:-translate-y-1 transition-all
"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 3a2 2 0 0 1 2 2v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5a2 2 0 0 1 2-2h14zm-9.5 16v-7H7v7h2.5zM8.2 10.3c.8 0 1.3-.6 1.3-1.3 0-.8-.5-1.3-1.3-1.3-.7 0-1.3.5-1.3 1.3 0 .7.6 1.3 1.3 1.3zM19 19v-4c0-2.2-1.2-3.2-2.8-3.2-1.3 0-1.9.7-2.2 1.2v-1h-2.5v7H14v-3.9c0-1 .2-2 1.4-2 1.1 0 1.1 1.1 1.1 2V19H19z" />
        </svg>
      </a>
    </div>
  </div>


  <div className="text-center mt-6 text-sm">
    <p>© {new Date().getFullYear()} QuizoraX. All rights reserved.</p>
  </div>
</footer>

  );
}
