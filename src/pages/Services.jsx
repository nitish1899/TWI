import React from "react";
import logo from "../resource/service.png";
import { Link } from "react-router-dom";
import servicestruck from "../resource/servicestruck.png";
import col1 from "../resource/form-col1.png";
import col2 from "../resource/form-col2.png";
import col3 from "../resource/form-col3.png";
import col4 from "../resource/form-col4.png";
import col5 from "../resource/form-col5.png";
import servicecard1 from "../resource/service card1.png";
import servicecard2 from "../resource/service card2.png";
import servicecard3 from "../resource/service card3.png";
import servicecard4 from "../resource/service card4.png";

import ocean from "../resource/ocean.png";
import cargo from "../resource/cargo.png";
import air from "../resource/air.png";
import land from "../resource/land.png";

function Services() {

  return (
   <div className="w-full overflow-x-hidden">
     
     <div className="relative h-screen bg-cover bg-center bg-blue-400" style={{ backgroundImage: `url(${logo})` }}>
      <div className="absolute inset-0 bg-blue-800 bg-opacity-50 flex flex-col justify-center items-start p-8 md:p-16">
        <div className="max-w-2xl text-white">

      <div className="block uppercase tracking-wide text-sm font-bold mb-2 ml-2 flex gap-2">
      <div className="bg-yellow-500 w-2 h-4"></div>Services 
      </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Services We Offer</h1>
         
        </div>
      </div>
    </div>



    
    <div className="container mx-auto p-6">
    
          {/* Information Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="space-y-4 ">
          <div className="flex gap-2"><div className="bg-yellow-500 w-2 h-4"></div>Services</div>
 
        <h1 className="text-2xl md:text-2xl font-bold mb-4">OUR COMPANY OVERVIEW</h1>
        <p className="text-gray-600 mb-4">
      USTrans World Logistics is a complete freight forwarding company, providing integrated solutions for all logistics needs under one roof. We can handle any type of cargo despite the dimensions or weight, by any mode, air, sea, road, rail or multimodal. The foundation of our logistics services is based on global expertise coupled with local knowledge.
    </p>
    <br></br>
    <p className="text-gray-600">
      We are specialised in DAP/DDP in India and our team also has a vast experience in a range of domestic logistics from small vehicles to hydraulic axles and major projects. Offering excellent rates and connectivity for air freight, we also have our own contractual rates with the major sea carriers and regular consolidations moving from India to the Far East, Gulf and Africa coupled with seamless movements for LCL sea freight to inland destinations.
    </p>
         
        </div>
        <div>
          <img src={servicestruck} alt="Air India" className="w-full h-[400px] object-cover" />
    
        </div>
      </div>

    </div>




    <div className="relative flex flex-col lg:flex-row items-center lg:items-start bg-gray-50 p-6">
      <div className="lg:w-1/2 p-4">
        <div className="mb-4">
          <img src={ocean} alt="Icon" className="w-12 h-12" />
        </div>
        <h2 className="text-2xl font-bold mb-4">Sea Transport Services</h2>
        <p className="text-gray-700 mb-4">
          Efficient, reliable, and cost-effective ocean transportation services tailored to your needs. We ensure your cargo reaches its destination safely and on time.
        </p>
        <h3 className="text-xl font-semibold mb-2">Containerised</h3>
        <p className="text-gray-700 mb-4">
          General - Secure and efficient containerised cargo solutions for all your shipping needs.
        </p>
        <h4 className="text-lg font-semibold mb-2">Special Cargo:</h4>
        <ul className="list-disc list-inside text-gray-700">
          <li>Open Tops</li>
          <li>Flat Racks</li>
          <li>Refrigerated</li>
        </ul>
      </div>
      <div className="lg:w-1/2 relative h-64 lg:h-auto flex justify-end">
        <img
          src={servicecard1}
          alt="Sea Transport"
          className="w-full h-full object-cover lg:rounded-r-lg"
        />
      </div>
    </div>


    <div className="relative flex flex-col lg:flex-row items-center lg:items-start bg-gray-50 p-6">
      <div className="lg:w-1/2 relative h-64 lg:h-auto flex justify-start">
        <img
          src={servicecard2}
          alt="Air Freight Services
          "
          className="w-full h-full object-cover lg:rounded-l-lg"
        />
      </div>
      <div className="lg:w-1/2 p-4">
        <div className="mb-4">
          <img src={air} alt="Icon" className="w-12 h-12" />
        </div>
        <h2 className="text-2xl font-bold mb-4">Air Freight Services</h2>
        <p className="text-gray-700 mb-4">
        Experience fast and reliable air freight services with us. We ensure timely delivery, secure handling, and global reach for all your urgent shipments

        </p>
     
        <h3 className="text-xl font-semibold mb-2">Scheduled Freights Charter</h3>
        
      </div>
    </div>

    
    <div className="relative flex flex-col lg:flex-row items-center lg:items-start bg-gray-50 p-6">
      <div className="lg:w-1/2 p-4">
        <div className="mb-4">
          <img src={land} alt="Icon" className="w-12 h-12" />
        </div>
        <h2 className="text-2xl font-bold mb-4">Land Shipping Services</h2>
        <p className="text-gray-700 mb-4">
        Experience seamless land shipping with our reliable and efficient services. We ensure timely delivery of your cargo with comprehensive tracking and professional handling

        </p>

        <h3 className="text-xl font-semibold mb-2">Local National International</h3>
      </div>
      <div className="lg:w-1/2 relative h-64 lg:h-auto flex justify-end">
        <img
          src={servicecard3}
          alt="Sea Transport"
          className="w-full h-full object-cover lg:rounded-r-lg"
        />
      </div>
    </div>


    <div className="relative flex flex-col lg:flex-row items-center lg:items-start bg-gray-50 p-6">
      <div className="lg:w-1/2 relative h-64 lg:h-auto flex justify-start">
        <img
          src={servicecard4}
          alt="Project Cargo
          "
          className="w-full h-full object-cover lg:rounded-l-lg"
        />
      </div>
      <div className="lg:w-1/2 p-4">
        <div className="mb-4">
          <img src={cargo} alt="Icon" className="w-12 h-12" />
        </div>
        <h2 className="text-2xl font-bold mb-4">Project Cargo</h2>
        <p className="text-gray-700 mb-4">
        Handling complex, oversized, and heavy cargo with precision and care. Our expert team ensures your project cargo reaches its destination safely and on time

        </p>
        <h3 className="text-xl font-semibold mb-2">Break bulk Cargo</h3>
        <p className="text-gray-700 mb-4">
        Loading of Steel Coils

        </p>
        <h4 className="text-lg font-semibold mb-2"> Bulk Cargo</h4>
        <ul className="list-disc list-inside text-gray-700">
          <li>Sugar</li>
          <li>Rice</li>
          <li>Pulses</li>
        </ul>
      </div>
    </div>


    <div className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <img src={col1} alt="Gallery Image 1" className="w-full h-40 object-cover rounded-lg" />
          <img src={col2} alt="Gallery Image 2" className="w-full h-40 object-cover rounded-lg" />
          <img src={col3} alt="Gallery Image 3" className="w-full h-40 object-cover rounded-lg" />
          <img src={col4} alt="Gallery Image 4" className="w-full h-40 object-cover rounded-lg" />
          <img src={col5} alt="Gallery Image 5" className="w-full h-40 object-cover rounded-lg" />
        </div>
      </div>

    </div>
  )
}

export default Services
