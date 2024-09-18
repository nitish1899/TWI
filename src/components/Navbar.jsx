import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../resource/TWCPL-Logo.webp';
import { IoReorderThreeOutline } from 'react-icons/io5';

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="h-[5.5rem] sticky top-0 z-30 w-full shadow-lg bg-white">
      <div className="flex justify-between items-center max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left Side: Logo and Company Name */}
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <div className="w-[60px] sm:w-[80px] h-[60px] flex-shrink-0">
            <img
              src={logo}
              alt="Logo"
              className="h-full w-full object-contain"  // Ensure the image is not cut off
            />
          </div>

          {/* Company Name */}
          <div className="font-bold text-lg sm:text-xl">
            TWI Group Of Companies
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex font-inter gap-6 lg:gap-10 text-lg text-red items-center">
          <Link to="/" className="hover:border-b-2 hover:border-[#ecf662]">
            Home
          </Link>
          <Link to="/about" className="hover:border-b-2 hover:border-[#ecf662]">
            About
          </Link>
          <Link to="/contact" className="hover:border-b-2 hover:border-[#ecf662]">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-blue-700"
          >
            <IoReorderThreeOutline size={30} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-800 text-white flex flex-col items-center py-4">
          <Link
            to="/"
            className="py-2 hover:border-b-2 hover:border-[#ecf662]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="py-2 hover:border-b-2 hover:border-[#ecf662]"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="py-2 hover:border-b-2 hover:border-[#ecf662]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../resource/TWCPL-Logo.webp';
// import { IoReorderThreeOutline } from 'react-icons/io5';

// function Navbar() {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <div className="h-[5.5rem] sticky top-0 z-30 w-full shadow-lg bg-white">
//       <div className="flex justify-between items-center max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Left Side: Logo and Company Name */}
//         <div className="flex items-center space-x-4">
//           {/* Logo */}
//           <div className="w-[60px] sm:w-[80px] h-[60px]">
//             <img src={logo} alt="Logo" className="h-full w-full object-cover" />
//           </div>
//           {/* Company Name */}
//           <div className="font-bold text-lg sm:text-xl">
//             TWI Group Of Companies
//           </div>
//         </div>

//         {/* Desktop Links */}
//         <div className="hidden md:flex font-inter gap-6 lg:gap-10 text-lg text-red items-center">
//           <Link to="/" className="hover:border-b-2 hover:border-[#ecf662]">
//             Home
//           </Link>
//           <Link to="/about" className="hover:border-b-2 hover:border-[#ecf662]">
//             About
//           </Link>
//           <Link to="/contact" className="hover:border-b-2 hover:border-[#ecf662]">
//             Contact
//           </Link>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
//             className="text-blue-700"
//           >
//             <IoReorderThreeOutline size={30} />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-blue-800 text-white flex flex-col items-center py-4">
//           <Link
//             to="/"
//             className="py-2 hover:border-b-2 hover:border-[#ecf662]"
//             onClick={() => setMobileMenuOpen(false)}
//           >
//             Home
//           </Link>
//           <Link
//             to="/about"
//             className="py-2 hover:border-b-2 hover:border-[#ecf662]"
//             onClick={() => setMobileMenuOpen(false)}
//           >
//             About
//           </Link>
//           <Link
//             to="/contact"
//             className="py-2 hover:border-b-2 hover:border-[#ecf662]"
//             onClick={() => setMobileMenuOpen(false)}
//           >
//             Contact
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Navbar;



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../resource/TWCPL-Logo.webp';
// import { IoReorderThreeOutline } from "react-icons/io5";

// function Navbar() {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <div className="h-[5.5rem] sticky top-0 z-30 w-full shadow-lg bg-white">
//       <div className="flex justify-between items-center max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center space-x-4">
//           {/* Left side: Logo */}
//           <div className="w-[80px] h-[60px]">
//             <img src={logo} alt="Logo" className="h-full w-full object-cover" />
//           </div>

//           {/* Right side: Company Text */}
//           <div className="flex flex-col justify-between">
//             <div className="font-bold text-lg sm:text-xl">
//               TWI Group Of Companies
//             </div>
//           </div>
//         </div>

//         {/* Desktop Links */}
//         <div className="hidden md:flex font-inter gap-6 lg:gap-10 text-lg text-red items-center">
//           <Link to="/" className="hover:border-b-2 hover:border-[#ecf662]">Home</Link>
//           <Link to="/about" className="hover:border-b-2 hover:border-[#ecf662]">About</Link>
//           <Link to="/contact" className="hover:border-b-2 hover:border-[#ecf662]">Contact</Link>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <div className="md:hidden">
//           <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-blue-700">
//             <IoReorderThreeOutline size={30} />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-blue-800 text-white flex flex-col items-center py-4">
//           <Link to="/" className="py-2 hover:border-b-2 hover:border-[#ecf662]" onClick={() => setMobileMenuOpen(false)}>Home</Link>
//           <Link to="/about" className="py-2 hover:border-b-2 hover:border-[#ecf662]" onClick={() => setMobileMenuOpen(false)}>About</Link>
//           <Link to="/contact" className="py-2 hover:border-b-2 hover:border-[#ecf662]" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Navbar;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../resource/TWCPL-Logo.webp';
// import { IoReorderThreeOutline } from "react-icons/io5";
// import { FaClock, FaEnvelope, FaPhone } from 'react-icons/fa';
// import { FaLinkedin, FaTwitter } from 'react-icons/fa';


// function Navbar() {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <div className="h-[5.5rem] sticky top-0 z-30 w-full shadow-lg">
//       {/* <div className="bg-blue-800 w-full h-[100px] flex items-center">
//         <div className="h-[50px] w-full max-w-[800px] mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 bg-white">
//           <div className="flex items-center">
//             <img src={logo} alt="Logo" className="h-10 w-12 mr-2" />
//           </div>
//           <div className="hidden sm:flex space-x-8">
//             <div className="flex items-center space-x-2">
//               <div className="bg-blue-800 text-white rounded-full p-2">
//                 <FaClock />
//               </div>
//               <span>
//                 Mon - Sat 9:00 - 18:00
//                 <br />
//                 Sunday Closed
//               </span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <div className="bg-blue-800 text-white rounded-full p-2">
//                 <FaEnvelope />
//               </div>
//               <span>
//                 Email
//                 <br />
//                 customercare@twcpl.in
//               </span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <div className="bg-blue-800 text-white rounded-full p-2">
//                 <FaPhone />
//               </div>
//               <span>
//                 Call Us
//                 <br />
//                 +91-11-2735-7591
//               </span>
//             </div>
//           </div>
//         </div>
//       </div> */}

//       <div className="flex justify-between items-center max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center space-x-4">
//           {/* Left side: Image */}
//           <div className="w-[80px] h-[120px]">
//             <img src={logo} alt="Logo" className="h-40 w-60 object-cover" />
//           </div>

//           {/* Right side: Text */}
//           <div className="flex flex-col justify-between">
//             {/* Top text */}
//             <div className="font-bold text-lg">
//               TWI Group Of Companies
//             </div>

//             {/* Bottom text */}
//             <div className="text-sm">
//               TWI Group has been a leading Logistics Partner in the market since 1956 and has been serving our customers with tailor-made logistics solutions.
//             </div>
//           </div>
//         </div>

//         <div className="hidden md:flex font-inter gap-6 lg:gap-14 text-lg text-blue items-center">
//           <Link to={"/"} className="hover:border-b-2 hover:border-[#ecf662]">Home</Link>
//           <Link to={"/about"} className="hover:border-b-2 hover:border-[#ecf662]">About</Link>
//           {/* <Link to={"/services"} className="hover:border-b-2 hover:border-[#ecf662]">Services</Link> */}
//           <Link to={"/contact"} className="hover:border-b-2 hover:border-[#ecf662]">Contact</Link>
//           {/* <Link to={"/glossary"} className="hover:border-b-2 hover:border-[#ecf662]">Glossary</Link> */}
//         </div>

//         {/* <div className="hidden md:flex items-center justify-center gap-3">
//           <a
//             href="https://www.linkedin.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-[#f6f9f5]"
//           >
//             <FaLinkedin size={24} />
//           </a>
//           <a
//             href="https://www.twitter.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-[#f6f9f5]"
//           >
//             <FaTwitter size={24} />
//           </a>
//           <button className="bg-white text-[#52d831] px-2 py-1 rounded-md">Request Quote</button>
//         </div> */}

//         {/* <div className="md:hidden">
//           <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
//             <IoReorderThreeOutline size={30} />
//           </button>
//         </div> */}

//       </div>

//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-blue-800 text-white flex flex-col items-center py-2">
//           <Link to={"/"} className="py-2 hover:border-b-2 hover:border-[#ecf662]" onClick={() => setMobileMenuOpen(false)}>Home</Link>
//           <Link to={"/about"} className="py-2 hover:border-b-2 hover:border-[#ecf662]" onClick={() => setMobileMenuOpen(false)}>About</Link>
//           <Link to={"/services"} className="py-2 hover:border-b-2 hover:border-[#ecf662]" onClick={() => setMobileMenuOpen(false)}>Services</Link>
//           <Link to={"/contact"} className="py-2 hover:border-b-2 hover:border-[#ecf662]" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
//           <Link to={"/golssary"} className="py-2 hover:border-b-2 hover:border-[#ecf662]" onClick={() => setMobileMenuOpen(false)}>Glossary</Link>
//           <button className="bg-white text-[#52d831] my-2 px-4 py-2 rounded-md w-11/12">Request Quote</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Navbar;