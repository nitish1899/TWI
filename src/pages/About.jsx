import React from "react";
import logo from "../resource/About us banner.jpeg";
import { Link } from "react-router-dom";
import ocean from "../resource/ocean.png";
import cargo from "../resource/cargo.png";
import air from "../resource/air.png";
import land from "../resource/land.png";
import pusparaj from "../resource/pusparaj.png";
import uttam from "../resource/uttam.png";
import col1 from "../resource/form-col1.png";
import col2 from "../resource/form-col2.png";
import col3 from "../resource/form-col3.png";
import col4 from "../resource/form-col4.png";
import col5 from "../resource/form-col5.png";
import PCSinghal from "../resource/PCSinghal.webp";
import RadhaSinghal from "../resource/RadhaSinghal.webp";

import servicestruck from "../resource/servicestruck.png";

function About() {


  return (
    <div className="w-full overflow-x-hidden">

      <div className="container mx-auto p-4 mb-0">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Legacy</h2>
        </div>

        {/* <div className="mb-12">
          <div className="flex justify-center mb-4">
            <img src={PCSinghal} alt="Late Shri Punam Chand Singhal" className="w-48 h-48 rounded-lg object-cover" />
          </div>

          <div>
            <div className="text-center">
              <h3 className="text-xl font-bold">Shri Punam Chand Singhal</h3>
            </div>
            <div className="text-center mt-4 px-6">
              <p className="text-gray-700">
                The Founder Late Shri Punam Chand Singhal had remained Chairperson & Managing Director of the Company Since Incorporation till his demise on Aug 31st, 2000. He was a Social person having vast knowledge & high repute, big political connections, Knowledgable, chairman of the Transport Association for 15 years. He is a man of Words & had all-time helpful & dedicated to services to customers, employees & vendors along with great recognition in Society.
              </p>
            </div>
          </div>
        </div> */}

        <div className="mb-12 flex flex-col items-center  m-60 mt-10" >
          <div className="flex flex-col md:flex-row items-center justify-center ">

            <div className="md:mr-6 mb-4 md:mb-0 ">
              <img src={PCSinghal} alt="Late Shri Punam Chand Singhal" className="w-full md:w-auto h-auto rounded-lg object-cover" />
            </div>

            <div className="w-full text-center md:text-left ">
              <h3 className="text-xl font-bold">Shri Punam Chand Singhal</h3>
              <div className="mt-4 px-6 md:px-0">
                <p className="flex justify-center text-gray-700 line-clamp-5">
                  The Founder Late Shri Punam Chand Singhal had remained Chairperson & Managing Director of the Company Since Incorporation till his demise on Aug 31st, 2000. He was a Social person having vast knowledge & high repute, big political connections, Knowledgable, chairman of the Transport Association for 15 years. He is a man of Words & had all-time helpful & dedicated to services to customers, employees & vendors along with great recognition in Society.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12 flex flex-col items-center  m-60 mt-10">
          <div className="flex flex-col md:flex-row items-center justify-center ">

            <div className="md:mr-6 mb-4 md:mb-0 ">
              <img src={RadhaSinghal} alt="Smt. Radha Devi Singhal" className="w-full md:w-auto h-auto rounded-lg object-cover" />
            </div>

            <div className="w-full text-center md:text-left ">
              <h3 className="text-xl font-bold">Smt. Radha Devi Singhal</h3>
              <div className="mt-4 px-6 md:px-0">
                <p className="flex justify-center text-gray-700 line-clamp-5">
                  Smt. Radha Devi Singhal is working as Director in the Company since 1988 and She had been looking after all the Financial & Accounting Policies of the Company. She is a very pious and religious Lady with lots of respect in the entire Organisation and all-time helpful & caring.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="container mx-auto p-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Leadership</h2>
        </div>

        <div className="mb-12 flex flex-col items-center  m-60 mt-10" >
          <div className="flex flex-col md:flex-row items-center justify-center ">

            <div className="md:mr-6 mb-4 md:mb-0 ">
              <img src={pusparaj} alt="Mr. Purushottam P Singhal" className="w-full md:w-60 h-50 rounded-lg object-cover" />
            </div>

            <div className="w-full text-center md:text-left ">
              <h3 className="text-xl font-bold">Mr. Purushottam P Singhal</h3>
              <div className="mt-4 px-6 md:px-0">
                <p className="flex justify-center text-gray-700 line-clamp-5">
                  CEO of the Company is well equipped with experience shared by his Father Late Shri P.C.Singhal.
                  Big high in his quality ( B.Com, Mores, MBA – Logistics ) and working since 1990 in the Organization
                  and has achieved several milestones in the last 26 years and complete various job in Pan India in a
                  most satisfactory manner under his leadership. He is also Social Activist and has a good social reputation.
                  He is a Trustee of S.H.Jaiparia International Hospital™ and part of various other Social Services to society &
                  possess good expertise in handling & movement of critical & superficial Jobs too.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12 flex flex-col items-center  m-60 mt-10">
          <div className="flex flex-col md:flex-row items-center justify-center ">

            <div className="md:mr-6 mb-4 md:mb-0 ">
              <img src={uttam} alt="Dr. Uttam Singhal" className="w-full md:w-60 h-58 rounded-lg object-cover" />
            </div>

            <div className="w-full text-center md:text-left ">
              <h3 className="text-xl font-bold">Dr. Uttam Singhal</h3>
              <div className="mt-4 px-6 md:px-0">
                <p className="flex justify-center text-gray-700 line-clamp-5">
                  Managing Director of the Company, B.Com (H) & MBA (Fin) had been actively leading all the activities & managing well
                  through his accrued knowledge, well experienced, high qualified in good organisation in 2006 and had achieved various
                  Unfathomable Achievement & recognised best service providers with new outlook & modern approach & solutions.
                  He is well connected through Pan India links & has a great span of vendor base all over India. He is a Person of Vision &
                  enthusiasm is promoted to deliver what he commits always & this is his best quality.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Member 1 */}
        {/* <div className="mb-12">
          <div className="flex justify-center mb-4">
            <img src={pusparaj} alt="Mr. Purushottam P Singhal" className="w-48 h-48 rounded-lg object-cover" />
          </div>
          <div>
            <div className="text-center">
              <h3 className="text-xl font-bold">Mr. Purushottam P Singhal</h3>
              <p className="text-gray-600">CEO</p>
              <div className="flex justify-center space-x-2 mt-2">
                <a href="#" className="text-yellow-500"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-yellow-500"><i className="fab fa-facebook"></i></a>
                <a href="#" className="text-yellow-500"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
            <div className="text-center mt-4 px-6">
              <p className="text-gray-700">
                CEO of the Company is well equipped with experience shared by his Father Late Shri P.C.Singhal.
                Big high in his quality ( B.Com, Mores, MBA – Logistics ) and working since 1990 in the Organization
                and has achieved several milestones in the last 26 years and complete various job in Pan India in a
                most satisfactory manner under his leadership. He is also Social Activist and has a good social reputation.
                He is a Trustee of S.H.Jaiparia International Hospital™ and part of various other Social Services to society &
                possess good expertise in handling & movement of critical & superficial Jobs too.
              </p>
            </div>
          </div>

        </div> */}

        {/* Team Member 2 */}
        {/* <div className="mb-12">
          <div className="flex justify-center mb-4">
            <img src={uttam} alt="Dr. Uttam Singhal" className="w-48 h-48 rounded-lg object-cover" />
          </div>
          <div>
            <div className="text-center">
              <h3 className="text-xl font-bold">Dr. Uttam Singhal</h3>
              <p className="text-gray-600">Managing Director</p>
              <div className="flex justify-center space-x-2 mt-2">
                <a href="#" className="text-yellow-500"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-yellow-500"><i className="fab fa-facebook"></i></a>
                <a href="#" className="text-yellow-500"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
            <div className="text-center mt-4 px-6">
              <p className="text-gray-700">
                Managing Director of the Company, B.Com (H) & MBA (Fin) had been actively leading all the activities & managing well
                through his accrued knowledge, well experienced, high qualified in good organisation in 2006 and had achieved various
                Unfathomable Achievement & recognised best service providers with new outlook & modern approach & solutions.
                He is well connected through Pan India links & has a great span of vendor base all over India. He is a Person of Vision &
                enthusiasm is promoted to deliver what he commits always & this is his best quality.
              </p>
            </div>
          </div>

        </div> */}
      </div>






      {/* <div className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <img src={col1} alt="Gallery Image 1" className="w-full h-40 object-cover rounded-lg" />
          <img src={col2} alt="Gallery Image 2" className="w-full h-40 object-cover rounded-lg" />
          <img src={col3} alt="Gallery Image 3" className="w-full h-40 object-cover rounded-lg" />
          <img src={col4} alt="Gallery Image 4" className="w-full h-40 object-cover rounded-lg" />
          <img src={col5} alt="Gallery Image 5" className="w-full h-40 object-cover rounded-lg" />
        </div>
      </div> */}

      <div className="relative h-50 bg-cover bg-center bg-yellow-400 mt-4 pt-0 pb-3">
        <div className="container mx-auto p-2 ">

          {/* <div className="bg-blue-900 text-white p-12 rounded-lg">
            <div className="md:flex md:justify-between">
           
              <div className="md:w-1/2 space-y-4">
                <h2 className="text-3xl font-bold mb-4">Get in touch with us</h2>
                <p className="text-gray-300 mb-4">
                  Have questions or need assistance with your shipping needs? Contact us today for reliable and efficient freight forwarding solutions. We're here to help!
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
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
                  </li>

                  <li className="flex items-center">
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

                  </li>
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
          </div> */}


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
      </div>
    </div>
  )
}

export default About
