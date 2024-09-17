import React from "react";
import logo from "../resource/grossary.png";
import { Link } from "react-router-dom";
function Glossary() {
  return (
    <div className="w-full overflow-x-hidden">

      <div className="relative h-screen bg-cover bg-center bg-blue-400" style={{ backgroundImage: `url(${logo})` }}>
        <div className="absolute inset-0 bg-blue-800 bg-opacity-50 flex flex-col justify-center items-start p-8 md:p-16">
          <div className="max-w-2xl text-white">

            <div className="block uppercase tracking-wide text-sm font-bold mb-2 ml-2 flex gap-2">
              <div className="bg-yellow-500 w-2 h-4"></div>Glossary
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Glossary</h1>

          </div>
        </div>
      </div>


      <div className="relative h-screen bg-cover bg-center bg-white">
        <div className="container mx-auto p-6">



        </div>
      </div>



    </div>
  )
}

export default Glossary
