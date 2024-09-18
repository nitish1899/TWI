import React from "react";
import logo from "../resource/ship.png";
import { Link } from "react-router-dom";
import About from "./About";

export const Home = () => {
  return (
    <div className="w-full min-w-fit overflow-hidden">
      {/* Navigation Links Section */}
      <div className="mt-1 mb-2 ml-4 md:ml-14 space-y-2 space-x-1.5">
        <Link
          to="https://www.twcpl.in/"
          className="inline-block px-2 py-1 bg-blue-500 text-white text-xs md:text-sm rounded-full hover:bg-blue-700"
        >
          Transport Wings (Cal) Pvt Ltd
        </Link>

        <Link
          to="https://ustl.in/"
          className="inline-block px-2 py-1 bg-blue-500 text-white text-xs md:text-sm rounded-full hover:bg-blue-700"
        >
          USTRANS World Logistics Limited
        </Link>

        <Link
          to="http://kgvl.co.in/"
          className="inline-block px-2 py-1 bg-blue-500 text-white text-xs md:text-sm rounded-full hover:bg-blue-700"
        >
          Karishma Global Ventures LLP
        </Link>

        <Link
          to="/transvue"
          className="inline-block px-2 py-1 bg-blue-500 text-white text-xs md:text-sm rounded-full hover:bg-blue-700"
        >
          Transvue Solutions India Pvt Ltd
        </Link>

        <Link
          to="/connect2Xpert"
          className="inline-block px-2 py-1 bg-blue-500 text-white text-xs md:text-sm rounded-full hover:bg-blue-700"
        >
          Connect 2 Xperts LLC, USA
        </Link>

        <Link
          to="/greenEarthPulp"
          className="inline-block px-2 py-1 bg-blue-500 text-white text-xs md:text-sm rounded-full hover:bg-blue-700"
        >
          Green Earth Pulp & Paper Pvt Ltd
        </Link>

        <Link
          to="/advanceConsultancy"
          className="inline-block px-2 py-1 bg-blue-500 text-white text-xs md:text-sm rounded-full hover:bg-blue-700"
        >
          Advance Consultancy
        </Link>

        <Link
          to="/tBWGlobalSourcingHouse"
          className="inline-block px-2 py-1 bg-blue-500 text-white text-xs md:text-sm rounded-full hover:bg-blue-700"
        >
          TBW Global Sourcing House PVT LTD
        </Link>

        <Link
          to="/proGenXMarketing"
          className="inline-block px-2 py-1 bg-blue-500 text-white text-xs md:text-sm rounded-full hover:bg-blue-700"
        >
          Pro GenX Marketing Pvt Ltd
        </Link>

        <Link
          to="/dreamLuxottica"
          className="inline-block px-2 py-1 bg-blue-500 text-white text-xs md:text-sm rounded-full hover:bg-blue-700"
        >
          Dream Luxottica
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative h-screen bg-cover bg-center bg-blue-400" style={{ backgroundImage: `url(${logo})` }}>
        <div className="absolute inset-0 bg-blue-800 bg-opacity-50 flex flex-col justify-center items-start px-4 sm:px-8 md:px-16">
          <div className="max-w-xl lg:max-w-2xl text-white">
            <div className="block uppercase tracking-wide text-xs sm:text-sm font-bold mb-2 ml-2 flex gap-2">
              <div className="bg-yellow-500 w-2 h-4"></div>
              Total Logistics & Supply Chain Solutions
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Your Gateway to any Destination in the World
            </h1>
            <p className="text-sm sm:text-lg md:text-xl mb-8">
              TWI Group has been a leading Logistics Partner in the market since 1956 and has been serving our customers with tailor-made logistics solutions.
            </p>
            <Link
              to="/"
              className="inline-block bg-yellow-500 text-blue-800 text-base md:text-lg font-semibold py-2 md:py-3 px-4 md:px-6 rounded shadow hover:bg-yellow-400 transition duration-200"
            >
              Explore More
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div>
        <About />
      </div>
    </div>
  );
};

export default Home;



// import React from "react";
// import logo from "../resource/ship.png";
// import { Link } from "react-router-dom";
// import About from "./About";


// export const Home = () => {
//   return (
//     <div className="w-full min-w-fit overflow-hidden ">
//       <div className="mt-1 mb-2  ml-14 space-y-2 space-x-1.5" >
//         <Link to="https://www.twcpl.in/" className="inline-block px-2 py-1 bg-blue-500 text-white text-sm rounded-full hover:bg-blue-700">
//           Transport Wings (Cal) Pvt Ltd
//         </Link>

//         <Link to="https://ustl.in/" className="inline-block px-2 py-1 bg-blue-500 text-white text-sm rounded-full hover:bg-blue-700">
//           USTRANS World Logistics Limited
//         </Link>

//         <Link to="http://kgvl.co.in/" className="inline-block px-2 py-1 bg-blue-500 text-white text-sm rounded-full hover:bg-blue-700">
//           Karishma Global Ventures LLP
//         </Link>

//         <Link to="/transvue" className="inline-block px-2 py-1 bg-blue-500 text-white text-sm rounded-full hover:bg-blue-700">
//           Transvue Solutions India Pvt Ltd
//         </Link>

//         <Link to="/connect2Xpert" className="inline-block px-2 py-1 bg-blue-500 text-white text-sm rounded-full hover:bg-blue-700">
//           Connect 2 Xperts LLC, USA
//         </Link>

//         <Link to="/greenEarthPulp" className="inline-block px-2 py-1 bg-blue-500 text-white text-sm rounded-full hover:bg-blue-700">
//           Green Earth Pulp & Paper Pvt Ltd
//         </Link>

//         <Link to="/advanceConsultancy" className="inline-block px-2 py-1 bg-blue-500 text-white text-sm rounded-full hover:bg-blue-700">
//           Advance Consultancy
//         </Link>

//         <Link to="/tBWGlobalSourcingHouse" className="inline-block px-2 py-1 bg-blue-500 text-white text-sm rounded-full hover:bg-blue-700">
//           TBW Global Sourcing House PVT LTD
//         </Link>

//         <Link to="/proGenXMarketing" className="inline-block px-2 py-1 bg-blue-500 text-white text-sm rounded-full hover:bg-blue-700">
//           Pro GenX Marketing Pvt Ltd
//         </Link>

//         <Link to="/dreamLuxottica" className="inline-block px-2 py-1 bg-blue-500 text-white text-sm rounded-full hover:bg-blue-700">
//           Dream Luxottica
//         </Link>
//       </div>

//       <div className="relative h-screen bg-cover bg-center bg-blue-400" style={{ backgroundImage: `url(${logo})` }}>

//         <div className="absolute inset-0 bg-blue-800 bg-opacity-50 flex flex-col justify-center items-start p-8 md:p-16">
//           <div className="max-w-2xl text-white">

//             <div className="block uppercase tracking-wide text-sm font-bold mb-2 ml-2 flex gap-2">
//               <div className="bg-yellow-500 w-2 h-4"></div>
//               Total Logistics & Supply Chain Solutions
//             </div>
//             <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Gateway to any Destination in the World</h1>
//             <p className="text-lg md:text-xl mb-8">
//               TWI Group has been a leading Logistics Partner in the market since 1956 and has been serving our customers with tailor-made logistics solutions.
//             </p>
//             <div className="text-sm sm:text-base">

//             </div>
//             <div className="text-sm sm:text-base">

//             </div>
//             <Link to="/" className="inline-block bg-yellow-500 text-blue-800 text-lg font-semibold py-3 px-6 rounded shadow hover:bg-yellow-400 transition duration-200">
//               Explore More
//             </Link>
//           </div>
//         </div>
//       </div>

//       <div>
//         <About></About>
//       </div>

//     </div>
//   )
// }
