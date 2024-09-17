import React from "react";
import logo from "../resource/contact.png";
import { FaClock, FaEnvelope, FaPhone } from 'react-icons/fa';
function Contact() {


  return (
    <div className="w-full overflow-x-hidden">

      <div className="relative h-screen bg-cover bg-center bg-blue-400" style={{ backgroundImage: `url(${logo})` }}>
        <div className="absolute inset-0 bg-blue-800 bg-opacity-50 flex flex-col justify-center items-start p-8 md:p-16">
          <div className="max-w-2xl text-white">

            <div className="block uppercase tracking-wide text-sm font-bold mb-2 ml-2 flex gap-2">
              <div className="bg-yellow-500 w-2 h-4"></div>Contact
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>

          </div>
        </div>
      </div>


      <div className="relative h-screen bg-cover bg-center bg-white">
        <div className="container mx-auto p-6">
          {/* Contact Section */}
          <div className="bg-blue-900 text-white p-12 rounded-lg">
            <div className="md:flex md:justify-between">
              {/* Contact Information */}
              <div className="md:w-1/2 space-y-4">
                <h2 className="text-3xl font-bold mb-4">Get in touch with us</h2>
                <p className="text-gray-300 mb-4">
                  Have questions or need assistance with your shipping needs? Contact us today for reliable and efficient freight forwarding solutions. We're here to help!
                </p>
                <ul className="space-y-2">
                  {/* <li className="flex items-center">
                    <div className="flex items-center space-x-2">
                      <div className="bg-blue-800 text-white rounded-full p-2">
                        <FaClock />
                      </div>
                      <span>
                        Mon - Sat 9:00 - 18:00
                        <br />
                        Sunday Closed
                      </span>
                    </div>
                  </li> */}

                  {/* <li className="flex items-center">
                    <div className="flex items-center space-x-2">
                      <div className="bg-blue-800 text-white rounded-full p-2">
                        <FaEnvelope />
                      </div>
                      <span>
                        Email
                        <br />
                        cse@ustl.in
                      </span>
                    </div>

                  </li> */}
                  <li className="flex items-center">
                    <div className="flex items-center space-x-2">
                      <div className="bg-blue-800 text-white rounded-full p-2">
                        <FaPhone />
                      </div>
                      <span>
                        Call Us
                        <br />
                        +91 11 27351591
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Contact Form */}
              <div className="md:w-1/2 mt-8 md:mt-0">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Your name" className="p-3 rounded-lg w-full bg-gray-100 text-gray-900" />
                    <input type="email" placeholder="Email" className="p-3 rounded-lg w-full bg-gray-100 text-gray-900" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Phone Number" className="p-3 rounded-lg w-full bg-gray-100 text-gray-900" />
                    <input type="text" placeholder="City" className="p-3 rounded-lg w-full bg-gray-100 text-gray-900" />
                  </div>
                  <textarea placeholder="Your Message" className="p-3 rounded-lg w-full bg-gray-100 text-gray-900" rows="4"></textarea>
                  <button type="submit" className="bg-yellow-500 text-blue-900 px-6 py-2 rounded-full shadow-md hover:bg-yellow-600">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>









        </div>
      </div>










    </div>
  )
}

export default Contact
