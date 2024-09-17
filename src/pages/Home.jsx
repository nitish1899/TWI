
import React from "react";
import logo from "../resource/ship.png";
// import climate from "../resource/climate.png";
// import ocean from "../resource/ocean.png";
// import cargo from "../resource/cargo.png";
// import air from "../resource/air.png";
// import land from "../resource/land.png";
// import girl from "../resource/girl.png";
// import airindia from "../resource/air india.png";
// import box from "../resource/box.png";
// import cash from "../resource/cash.png";
// import lequid from "../resource/lequid.png";
// import package1 from "../resource/package1.jpg";
// import contract from "../resource/contract.png";
// import warehouse from "../resource/warehouse.png";
// import specialized from "../resource/specialized.png";
// import col1 from "../resource/form-col1.png";
// import col2 from "../resource/form-col2.png";
// import col3 from "../resource/form-col3.png";
// import col4 from "../resource/form-col4.png";
// import col5 from "../resource/form-col5.png";
// import { FaClock, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from "react-router-dom";
import About from "./About";


export const Home = () => {
  return (
    <div className="w-full min-w-fit overflow-hidden ">
      <div className="mt-1 mb-2  ml-14 space-y-2 space-x-1.5" >
        <Link to="https://www.twcpl.in/" className="inline-block px-2 py-1 bg-blue-500 text-white text-sm rounded-full hover:bg-blue-700">
          Transport Wings (Cal) Pvt Ltd
        </Link>

        <Link to="https://ustl.in/" className="inline-block px-2 py-1 bg-blue-500 text-white text-sm rounded-full hover:bg-blue-700">
          USTRANS World Logistics Limited
        </Link>

        <Link to="http://kgvl.co.in/" className="inline-block px-2 py-1 bg-blue-500 text-white text-sm rounded-full hover:bg-blue-700">
          Karishma Global Ventures LLP
        </Link>

        <Link to="/transvue" className="inline-block px-2 py-1 bg-blue-500 text-white text-sm rounded-full hover:bg-blue-700">
          Transvue Solutions India Pvt Ltd
        </Link>

        <Link to="/connect2Xpert" className="inline-block px-2 py-1 bg-blue-500 text-white text-sm rounded-full hover:bg-blue-700">
          Connect 2 Xperts LLC, USA
        </Link>

        <Link to="/greenEarthPulp" className="inline-block px-2 py-1 bg-blue-500 text-white text-sm rounded-full hover:bg-blue-700">
          Green Earth Pulp & Paper Pvt Ltd
        </Link>

        <Link to="/advanceConsultancy" className="inline-block px-2 py-1 bg-blue-500 text-white text-sm rounded-full hover:bg-blue-700">
          Advance Consultancy
        </Link>

        <Link to="/tBWGlobalSourcingHouse" className="inline-block px-2 py-1 bg-blue-500 text-white text-sm rounded-full hover:bg-blue-700">
          TBW Global Sourcing House PVT LTD
        </Link>

        <Link to="/proGenXMarketing" className="inline-block px-2 py-1 bg-blue-500 text-white text-sm rounded-full hover:bg-blue-700">
          Pro GenX Marketing Pvt Ltd
        </Link>

        <Link to="/dreamLuxottica" className="inline-block px-2 py-1 bg-blue-500 text-white text-sm rounded-full hover:bg-blue-700">
          Dream Luxottica
        </Link>
      </div>

      <div className="relative h-screen bg-cover bg-center bg-blue-400" style={{ backgroundImage: `url(${logo})` }}>

        <div className="absolute inset-0 bg-blue-800 bg-opacity-50 flex flex-col justify-center items-start p-8 md:p-16">
          <div className="max-w-2xl text-white">

            <div className="block uppercase tracking-wide text-sm font-bold mb-2 ml-2 flex gap-2">
              <div className="bg-yellow-500 w-2 h-4"></div>
              Total Logistics & Supply Chain Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Gateway to any Destination in the World</h1>
            <p className="text-lg md:text-xl mb-8">
              TWI Group has been a leading Logistics Partner in the market since 1956 and has been serving our customers with tailor-made logistics solutions.
            </p>
            <div className="text-sm sm:text-base">

            </div>
            <div className="text-sm sm:text-base">

            </div>
            <Link to="/" className="inline-block bg-yellow-500 text-blue-800 text-lg font-semibold py-3 px-6 rounded shadow hover:bg-yellow-400 transition duration-200">
              Explore More
            </Link>
          </div>
        </div>
      </div>

      <div>
        <About></About>
      </div>



      {/* <div className="relative h-screen bg-cover bg-center ">

        <div className="container mx-auto p-6">
         
          <div className="text-center mb-12">
            <div className="block uppercase tracking-wide text-sm font-bold mb-2 ml-2 flex gap-2">
              <div className="bg-yellow-500 w-2 h-4"></div>What we do
            </div>
            <h2 className="text-3xl font-bold mb-4">Safe & Reliable Cargo Solutions</h2>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 border rounded-lg">
              <div className="mb-4">
                <img src={ocean} alt="Ocean Transport Services" className="mx-auto" />
              </div>
              <h3 className="font-bold mb-2">Ocean Transport Services</h3>
              <p className="text-gray-600">
                Efficient, reliable, and cost-effective ocean transportation services tailored to your needs.
              </p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <div className="mb-4">
                <img src={cargo} alt="Project Cargo" className="mx-auto" />
              </div>
              <h3 className="font-bold mb-2">Project Cargo</h3>
              <p className="text-gray-600">
                Handling complex, oversized, and heavy cargo with precision and care. Our expert team ensures your project cargo reaches its destination safely and on time.
              </p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <div className="mb-4">
                <img src={air} alt="Air Freight Services" className="mx-auto" />
              </div>
              <h3 className="font-bold mb-2">Air Freight Services</h3>
              <p className="text-gray-600">
                Trust our expertise to get your cargo to its destination efficiently and safely. Fly high with our top-tier air freight solutions!
              </p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <div className="mb-4">
                <img src={land} alt="Land Shipping Services" className="mx-auto" />
              </div>
              <h3 className="font-bold mb-2">Land Shipping Services</h3>
              <p className="text-gray-600">
                Experience seamless land shipping with our reliable and efficient services. We ensure timely delivery of your cargo, with comprehensive tracking and professional handling.
              </p>
            </div>
          </div>



        </div>


      </div> */}


      {/* <div className="relative">
        <img src={climate} alt="Background" className="w-full h-64 object-cover" />
        <div className="absolute inset-0 bg-orange-500 opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Global Shipping Network</h3>
            <p className="max-w-2xl mx-auto">Connecting the world with reliable cargo solutions</p>
          </div>
        </div>
      </div> */}


      {/* <div className="relative h-screen bg-cover bg-center ">

        <div className="container mx-auto p-6">
    
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">We provide full range global logistics solution</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We are specialized in DAP/DDP in India and our team also has vast experience in a range of domestic logistics from small vehicles to hydraulic axles and major projects.
            </p>
          </div>

       
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="space-y-4">
              <p className="text-gray-600">
                Offering excellent rates and connectivity for air freight, we also have our own contractual rates with the major sea carriers and regular consolidations moving from main ports to the Far East, Gulf, and Africa coupled with seamless movements for LCL sea freight to inland destinations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <img src={box} alt="Delivery on Time" className="w-6 h-6 mr-2" />
                  <span>Delivery on Time</span>
                </li>
                <li className="flex items-center">
                  <img src={cash} alt="Optimized Travel Cost" className="w-6 h-6 mr-2" />
                  <span>Optimized Travel Cost</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={girl} alt="Air India" className="w-full h-40 object-cover" />
              <img src={airindia} alt="Boxes" className="w-full h-40 object-cover" />
            </div>
          </div>

       
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-4">Transporting Across The World</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src={lequid} alt="Liquid Transportation" className="w-full h-40 object-cover mb-4" />
              <h4 className="font-bold mb-2">Liquid Transportation</h4>
              <p className="text-gray-600">Premium Tankers</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src={package1} alt="Packaging Solutions" className="w-full h-40 object-cover mb-4" />
              <h4 className="font-bold mb-2">Packaging Solutions</h4>
              <p className="text-gray-600">Warehouse Management</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src={contract} alt="Contract Logistics" className="w-full h-40 object-cover mb-4" />
              <h4 className="font-bold mb-2">Contract Logistics</h4>
              <p className="text-gray-600">Road Transportation</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src={warehouse} alt="Warehouse & Distribution" className="w-full h-40 object-cover mb-4" />
              <h4 className="font-bold mb-2">Warehouse & Distribution</h4>
              <p className="text-gray-600">Large Warehouse</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src={specialized} alt="Specialized Transport" className="w-full h-40 object-cover mb-4" />
              <h4 className="font-bold mb-2">Specialized Transport</h4>
              <p className="text-gray-600">Ocean Transports</p>
            </div>



          </div>

    

        </div>
      </div> */}


      {/* <div className="text-center p-8 bg-gradient-to-b from-white to-yellow-400">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700">
          More Work
        </button>
      </div> */}


      {/* 
      <div className="relative h-50 bg-cover bg-center bg-yellow-400 mt-4 pt-0 pb-3">
        <div className="container mx-auto p-2 ">


          <div className="mt-4 ">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <img src={col1} alt="Gallery Image 1" className="w-full h-40 object-cover rounded-lg" />
              <img src={col2} alt="Gallery Image 2" className="w-full h-40 object-cover rounded-lg" />
              <img src={col3} alt="Gallery Image 3" className="w-full h-40 object-cover rounded-lg" />
              <img src={col4} alt="Gallery Image 4" className="w-full h-40 object-cover rounded-lg" />
              <img src={col5} alt="Gallery Image 5" className="w-full h-40 object-cover rounded-lg" />
            </div>
          </div>


        </div>
      </div> */}

      {/* <div className="mt-6 p-4 bg-yellow-400">
        <img src={logo} alt="Bottom Image" className="w-full h-64 object-cover rounded-lg" />
      </div> */}


    </div>
  )
}
