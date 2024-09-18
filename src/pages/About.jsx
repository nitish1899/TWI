import React from "react";
import PCSinghal from "../resource/PCSinghal.webp";
import RadhaSinghal from "../resource/RadhaSinghal.webp";
import pusparaj from "../resource/pusparaj.png";
import uttam from "../resource/uttam.png";
import col1 from "../resource/form-col1.png";
import col2 from "../resource/form-col2.png";
import col3 from "../resource/form-col3.png";
import col4 from "../resource/form-col4.png";
import col5 from "../resource/form-col5.png";

function About() {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Header Section */}
        <div className="text-center mb-12 mt-2">
          <h2 className="text-3xl font-bold mb-4">Legacy</h2>
        </div>

        {/* Shri Punam Chand Singhal Section */}
        <div className="mb-12 flex flex-col items-center md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col md:flex-row items-center md:space-x-8 w-full max-w-6xl mx-auto">
            <div className="mb-4 md:mb-0 w-full md:w-1/3 lg:w-1/6">
              <img
                src={PCSinghal}
                alt="Late Shri Punam Chand Singhal"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>

            <div className="w-full md:w-2/3 lg:w-3/4 text-center md:text-left">
              <h3 className="text-xl font-bold">Shri Punam Chand Singhal</h3>
              <div className="mt-4">
                <p className="text-gray-700">
                  The Founder Late Shri Punam Chand Singhal had remained
                  Chairperson & Managing Director of the Company Since
                  Incorporation till his demise on Aug 31st, 2000. He was a
                  Social person having vast knowledge & high repute, big
                  political connections, knowledgeable, chairman of the
                  Transport Association for 15 years. He is a man of Words &
                  had all-time helpful & dedicated to services to customers,
                  employees & vendors along with great recognition in Society.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Smt. Radha Devi Singhal Section */}
        <div className="mb-12 flex flex-col items-center md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col md:flex-row items-center md:space-x-8 w-full max-w-6xl mx-auto">
            <div className="mb-4 md:mb-0 w-full md:w-1/3 lg:w-1/6">
              <img
                src={RadhaSinghal}
                alt="Smt. Radha Devi Singhal"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>

            <div className="w-full md:w-2/3 lg:w-3/4 text-center md:text-left">
              <h3 className="text-xl font-bold">Smt. Radha Devi Singhal</h3>
              <div className="mt-4">
                <p className="text-gray-700">
                  Smt. Radha Devi Singhal is working as Director in the Company
                  since 1988 and She had been looking after all the Financial &
                  Accounting Policies of the Company. She is a very pious and
                  religious Lady with lots of respect in the entire Organisation
                  and all-time helpful & caring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container mx-auto px-4 md:px-8 lg:px-16">
      
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Leadership</h2>
        </div>

      
        <div className="mb-12 flex flex-col items-center md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col md:flex-row items-center md:space-x-8 w-full max-w-6xl mx-auto">
            <div className="mb-4 md:mb-0 w-full md:w-1/3 lg:w-1/6">
              <img
                src={pusparaj}
                alt="Mr. Purushottam P Singhal"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>


            <div className="w-full md:w-2/3 lg:w-3/4 text-center md:text-left">
              <h3 className="text-xl font-bold">Mr. Purushottam P Singhal</h3>
              <div className="mt-4">
                <p className="text-gray-700">
                  CEO of the Company is well equipped with experience shared by
                  his Father Late Shri P.C.Singhal. Big high in his quality
                  (B.Com, Mores, MBA – Logistics) and working since 1990 in the
                  Organization and has achieved several milestones in the last 26
                  years and completed various jobs in Pan India in a most
                  satisfactory manner under his leadership. He is also a Social
                  Activist and has a good social reputation.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:space-x-6">
            <div className="w-full md:w-1/3 lg:w-1/4">
              <img
                src={uttam}
                alt="Dr. Uttam Singhal"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>

            <div className="w-full md:w-2/3 lg:w-3/4 text-center md:text-left">
              <h3 className="text-xl font-bold">Dr. Uttam Singhal</h3>
              <div className="mt-4">
                <p className="text-gray-700">
                  Managing Director of the Company, B.Com (H) & MBA (Fin) had been
                  actively leading all the activities & managing well through his
                  accrued knowledge. He is well connected through Pan India links
                  & has a great span of vendor base all over India. He is a Person
                  of Vision & enthusiasm is promoted to deliver what he commits
                  always & this is his best quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="container mx-auto px-4 md:px-8 lg:px-16">
      
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Leadership</h2>
        </div>

     
        <div className="mb-12 space-y-12 md:space-y-0">
    
          <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between">
            <div className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
              <img
                src={pusparaj}
                alt="Mr. Purushottam P Singhal"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>

            <div className="w-full md:w-2/3 lg:w-3/4 text-center md:text-left">
              <h3 className="text-xl font-bold">Mr. Purushottam P Singhal</h3>
              <div className="mt-4">
                <p className="text-gray-700">
                  CEO of the Company is well equipped with experience shared by
                  his Father Late Shri P.C.Singhal. Big high in his quality
                  (B.Com, Mores, MBA – Logistics) and working since 1990 in the
                  Organization and has achieved several milestones in the last 26
                  years and completed various jobs in Pan India in a most
                  satisfactory manner under his leadership. He is also a Social
                  Activist and has a good social reputation.
                </p>
              </div>
            </div>
          </div>

        
          <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between">
            <div className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
              <img
                src={uttam}
                alt="Dr. Uttam Singhal"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>

            <div className="w-full md:w-2/3 lg:w-3/4 text-center md:text-left">
              <h3 className="text-xl font-bold">Dr. Uttam Singhal</h3>
              <div className="mt-4">
                <p className="text-gray-700">
                  Managing Director of the Company, B.Com (H) & MBA (Fin) had been
                  actively leading all the activities & managing well through his
                  accrued knowledge. He is well connected through Pan India links
                  & has a great span of vendor base all over India. He is a Person
                  of Vision & enthusiasm is promoted to deliver what he commits
                  always & this is his best quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Leadership</h2>
        </div>

        {/* Leadership Section */}
        <div className="mb-12 space-y-12 md:space-y-10">
          {/* Leadership Item 1 */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8  w-full max-w-6xl mx-auto">
            <div className="flex-shrink-0 w-full md:w-1/3 lg:w-1/6 mb-4 md:mb-0">
              <img
                src={pusparaj}
                alt="Mr. Purushottam P Singhal"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>

            <div className="w-full md:w-2/3 lg:w-3/4 text-center md:text-left">
              <h3 className="text-xl font-bold">Mr. Purushottam P Singhal</h3>
              <div className="mt-4">
                <p className="text-gray-700">
                  CEO of the Company is well equipped with experience shared by
                  his Father Late Shri P.C.Singhal. Big high in his quality
                  (B.Com, Mores, MBA – Logistics) and working since 1990 in the
                  Organization and has achieved several milestones in the last 26
                  years and completed various jobs in Pan India in a most
                  satisfactory manner under his leadership. He is also a Social
                  Activist and has a good social reputation.
                </p>
              </div>
            </div>
          </div>

          {/* Leadership Item 2 */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8  w-full max-w-6xl mx-auto">
            <div className="flex-shrink-0 w-full md:w-1/3 lg:w-1/6 mb-4 md:mb-0">
              <img
                src={uttam}
                alt="Dr. Uttam Singhal"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>

            <div className="w-full md:w-2/3 lg:w-3/4 text-center md:text-left">
              <h3 className="text-xl font-bold">Dr. Uttam Singhal</h3>
              <div className="mt-4">
                <p className="text-gray-700">
                  Managing Director of the Company, B.Com (H) & MBA (Fin) had been
                  actively leading all the activities & managing well through his
                  accrued knowledge. He is well connected through Pan India links
                  & has a great span of vendor base all over India. He is a Person
                  of Vision & enthusiasm is promoted to deliver what he commits
                  always & this is his best quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Gallery Section */}
      <div className="relative bg-cover bg-center bg-yellow-400 mt-4 pt-4 pb-3">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <img
              src={col1}
              alt="Gallery Image 1"
              className="w-full h-40 object-cover rounded-lg"
            />
            <img
              src={col2}
              alt="Gallery Image 2"
              className="w-full h-40 object-cover rounded-lg"
            />
            <img
              src={col3}
              alt="Gallery Image 3"
              className="w-full h-40 object-cover rounded-lg"
            />
            <img
              src={col4}
              alt="Gallery Image 4"
              className="w-full h-40 object-cover rounded-lg"
            />
            <img
              src={col5}
              alt="Gallery Image 5"
              className="w-full h-40 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;


// import React from "react";
// import PCSinghal from "../resource/PCSinghal.webp";
// import RadhaSinghal from "../resource/RadhaSinghal.webp";
// import pusparaj from "../resource/pusparaj.png";
// import uttam from "../resource/uttam.png";
// import col1 from "../resource/form-col1.png";
// import col2 from "../resource/form-col2.png";
// import col3 from "../resource/form-col3.png";
// import col4 from "../resource/form-col4.png";
// import col5 from "../resource/form-col5.png";

// function About() {
//   return (
//     <div className="w-full overflow-x-hidden">
//       <div className="container mx-auto p-4">
//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold mb-4">Legacy</h2>
//         </div>

//         {/* Shri Punam Chand Singhal Section */}
//         <div className="mb-12 flex flex-col items-center md:flex-row md:items-start md:justify-between px-4">
//           <div className="flex flex-col md:flex-row items-center md:space-x-6 md:mr-60 md:ml-60">
//             <div className="mb-4 md:mb-0 w-full md:w-1/3 lg:w-1/4">
//               <img
//                 src={PCSinghal}
//                 alt="Late Shri Punam Chand Singhal"
//                 className="w-full h-auto rounded-lg object-cover"
//               />
//             </div>

//             <div className="w-full md:w-2/3 lg:w-3/4 text-center md:text-left">
//               <h3 className="text-xl font-bold">Shri Punam Chand Singhal</h3>
//               <div className="mt-4">
//                 <p className="text-gray-700">
//                   The Founder Late Shri Punam Chand Singhal had remained
//                   Chairperson & Managing Director of the Company Since
//                   Incorporation till his demise on Aug 31st, 2000. He was a
//                   Social person having vast knowledge & high repute, big
//                   political connections, knowledgeable, chairman of the
//                   Transport Association for 15 years. He is a man of Words &
//                   had all-time helpful & dedicated to services to customers,
//                   employees & vendors along with great recognition in Society.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Smt. Radha Devi Singhal Section */}
//         <div className="mb-12 flex flex-col items-center md:flex-row md:items-start md:justify-between px-4">
//           <div className="flex flex-col md:flex-row items-center md:space-x-6">
//             <div className="mb-4 md:mb-0 w-full md:w-1/3 lg:w-1/4">
//               <img
//                 src={RadhaSinghal}
//                 alt="Smt. Radha Devi Singhal"
//                 className="w-full h-auto rounded-lg object-cover"
//               />
//             </div>

//             <div className="w-full md:w-2/3 lg:w-3/4 text-center md:text-left">
//               <h3 className="text-xl font-bold">Smt. Radha Devi Singhal</h3>
//               <div className="mt-4">
//                 <p className="text-gray-700">
//                   Smt. Radha Devi Singhal is working as Director in the Company
//                   since 1988 and She had been looking after all the Financial &
//                   Accounting Policies of the Company. She is a very pious and
//                   religious Lady with lots of respect in the entire Organisation
//                   and all-time helpful & caring.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto p-4">
//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold mb-4">Leadership</h2>
//         </div>

//         {/* Leadership Section */}
//         <div className="mb-12 flex flex-col items-center md:flex-row md:justify-between px-4">
//           <div className="flex flex-col md:flex-row items-center md:space-x-6 mb-4 md:mb-0">
//             <div className="w-full md:w-1/3 lg:w-1/4">
//               <img
//                 src={pusparaj}
//                 alt="Mr. Purushottam P Singhal"
//                 className="w-full h-auto rounded-lg object-cover"
//               />
//             </div>

//             <div className="w-full md:w-2/3 lg:w-3/4 text-center md:text-left">
//               <h3 className="text-xl font-bold">Mr. Purushottam P Singhal</h3>
//               <div className="mt-4">
//                 <p className="text-gray-700">
//                   CEO of the Company is well equipped with experience shared by
//                   his Father Late Shri P.C.Singhal. Big high in his quality
//                   (B.Com, Mores, MBA – Logistics) and working since 1990 in the
//                   Organization and has achieved several milestones in the last 26
//                   years and completed various jobs in Pan India in a most
//                   satisfactory manner under his leadership. He is also a Social
//                   Activist and has a good social reputation.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-col md:flex-row items-center md:space-x-6 mb-4 md:mb-0">
//             <div className="w-full md:w-1/3 lg:w-1/4">
//               <img
//                 src={uttam}
//                 alt="Dr. Uttam Singhal"
//                 className="w-full h-auto rounded-lg object-cover"
//               />
//             </div>

//             <div className="w-full md:w-2/3 lg:w-3/4 text-center md:text-left">
//               <h3 className="text-xl font-bold">Dr. Uttam Singhal</h3>
//               <div className="mt-4">
//                 <p className="text-gray-700">
//                   Managing Director of the Company, B.Com (H) & MBA (Fin) had been
//                   actively leading all the activities & managing well through his
//                   accrued knowledge. He is well connected through Pan India links
//                   & has a great span of vendor base all over India. He is a Person
//                   of Vision & enthusiasm is promoted to deliver what he commits
//                   always & this is his best quality.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Gallery Section */}
//       <div className="relative bg-cover bg-center bg-yellow-400 mt-4 pt-4 pb-3">
//         <div className="container mx-auto p-2">
//           <div className="mt-4">
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
//               <img
//                 src={col1}
//                 alt="Gallery Image 1"
//                 className="w-full h-40 object-cover rounded-lg"
//               />
//               <img
//                 src={col2}
//                 alt="Gallery Image 2"
//                 className="w-full h-40 object-cover rounded-lg"
//               />
//               <img
//                 src={col3}
//                 alt="Gallery Image 3"
//                 className="w-full h-40 object-cover rounded-lg"
//               />
//               <img
//                 src={col4}
//                 alt="Gallery Image 4"
//                 className="w-full h-40 object-cover rounded-lg"
//               />
//               <img
//                 src={col5}
//                 alt="Gallery Image 5"
//                 className="w-full h-40 object-cover rounded-lg"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;



// import React from "react";
// import logo from "../resource/About us banner.jpeg";
// import { Link } from "react-router-dom";
// import ocean from "../resource/ocean.png";
// import cargo from "../resource/cargo.png";
// import air from "../resource/air.png";
// import land from "../resource/land.png";
// import pusparaj from "../resource/pusparaj.png";
// import uttam from "../resource/uttam.png";
// import col1 from "../resource/form-col1.png";
// import col2 from "../resource/form-col2.png";
// import col3 from "../resource/form-col3.png";
// import col4 from "../resource/form-col4.png";
// import col5 from "../resource/form-col5.png";
// import PCSinghal from "../resource/PCSinghal.webp";
// import RadhaSinghal from "../resource/RadhaSinghal.webp";
// import servicestruck from "../resource/servicestruck.png";

// function About() {
//   return (
//     <div className="w-full overflow-x-hidden">
//       <div className="container mx-auto p-4 mb-0">
//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold mb-4">Legacy</h2>
//         </div>

//         {/* Shri Punam Chand Singhal Section */}
//         <div className="mb-12 flex flex-col items-center md:flex-row md:items-start justify-center m-6 md:m-10">
//           <div className="flex flex-col md:flex-row items-center justify-center md:mr-60 md:ml-60">
//             <div className="md:mr-6 mb-4 md:mb-0 w-full md:w-auto max-w-xs md:max-w-none">
//               <img
//                 src={PCSinghal}
//                 alt="Late Shri Punam Chand Singhal"
//                 className="w-3/4 sm:w-full lg:w-50 h-auto rounded-lg object-cover"
//               />
//             </div>

//             <div className="w-full text-center md:text-left ">
//               <h3 className="text-xl font-bold">Shri Punam Chand Singhal</h3>
//               <div className="mt-4 px-4 md:px-0">
//                 <p className="text-gray-700">
//                   The Founder Late Shri Punam Chand Singhal had remained
//                   Chairperson & Managing Director of the Company Since
//                   Incorporation till his demise on Aug 31st, 2000. He was a
//                   Social person having vast knowledge & high repute, big
//                   political connections, knowledgeable, chairman of the
//                   Transport Association for 15 years. He is a man of Words &
//                   had all-time helpful & dedicated to services to customers,
//                   employees & vendors along with great recognition in Society.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Smt. Radha Devi Singhal Section */}
//         <div className="mb-12 flex flex-col items-center md:flex-row md:items-start justify-center m-6 md:m-10">
//           <div className="flex flex-col md:flex-row items-center justify-center md:mr-60 md:ml-60">
//             <div className="md:mr-6 mb-4 md:mb-0 w-full md:w-auto max-w-xs md:max-w-none">
//               <img
//                 src={RadhaSinghal}
//                 alt="Smt. Radha Devi Singhal"
//                 className="w-3/4 sm:w-full lg:w-50 h-auto rounded-lg object-cover"
//               />
//             </div>

//             <div className="w-full text-center md:text-left">
//               <h3 className="text-xl font-bold">Smt. Radha Devi Singhal</h3>
//               <div className="mt-4 px-4 md:px-0">
//                 <p className="text-gray-700">
//                   Smt. Radha Devi Singhal is working as Director in the Company
//                   since 1988 and She had been looking after all the Financial &
//                   Accounting Policies of the Company. She is a very pious and
//                   religious Lady with lots of respect in the entire Organisation
//                   and all-time helpful & caring.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto p-4">
//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold mb-4">Leadership</h2>
//         </div>

//         {/* Leadership Section */}
//         <div className="mb-12 flex flex-col items-center md:flex-row  md:items-start justify-center m-6 md:m-10">
//           <div className="md:mr-6 lg:mr-4 mb-4 md:mb-0">
//             <img
//               src={pusparaj}
//               alt="Mr. Purushottam P Singhal"
//               className="w-3/4 sm:w-full lg:w-48 h-auto rounded-lg object-cover"
//             />
//           </div>

//           <div className="w-full text-center md:text-left md:max-w-lg">
//             <h3 className="text-xl font-bold">Mr. Purushottam P Singhal</h3>
//             <div className="mt-4 px-4 md:px-0">
//               <p className="text-gray-700">
//                 CEO of the Company is well equipped with experience shared by
//                 his Father Late Shri P.C.Singhal. Big high in his quality
//                 (B.Com, Mores, MBA – Logistics) and working since 1990 in the
//                 Organization and has achieved several milestones in the last 26
//                 years and completed various jobs in Pan India in a most
//                 satisfactory manner under his leadership. He is also a Social
//                 Activist and has a good social reputation.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="mb-12 flex flex-col items-center md:flex-row justify-center m-6 md:m-10">
//           <div className="md:mr-6 lg:mr-4 mb-4 md:mb-0">
//             <img
//               src={uttam}
//               alt="Dr. Uttam Singhal"
//               className="w-3/4 sm:w-full lg:w-48 h-auto rounded-lg object-cover"
//             />
//           </div>

//           <div className="w-full text-center md:text-left md:max-w-lg">
//             <h3 className="text-xl font-bold">Dr. Uttam Singhal</h3>
//             <div className="mt-4 px-4 md:px-0">
//               <p className="text-gray-700">
//                 Managing Director of the Company, B.Com (H) & MBA (Fin) had been
//                 actively leading all the activities & managing well through his
//                 accrued knowledge. He is well connected through Pan India links
//                 & has a great span of vendor base all over India. He is a Person
//                 of Vision & enthusiasm is promoted to deliver what he commits
//                 always & this is his best quality.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Gallery Section */}
//       <div className="relative h-auto bg-cover bg-center bg-yellow-400 mt-4 pt-0 pb-3">
//         <div className="container mx-auto p-2">
//           <div className="mt-4">
//             <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
//               <img
//                 src={col1}
//                 alt="Gallery Image 1"
//                 className="w-full h-40 object-cover rounded-lg"
//               />
//               <img
//                 src={col2}
//                 alt="Gallery Image 2"
//                 className="w-full h-40 object-cover rounded-lg"
//               />
//               <img
//                 src={col3}
//                 alt="Gallery Image 3"
//                 className="w-full h-40 object-cover rounded-lg"
//               />
//               <img
//                 src={col4}
//                 alt="Gallery Image 4"
//                 className="w-full h-40 object-cover rounded-lg"
//               />
//               <img
//                 src={col5}
//                 alt="Gallery Image 5"
//                 className="w-full h-40 object-cover rounded-lg"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;



// import React from "react";
// import logo from "../resource/About us banner.jpeg";
// import { Link } from "react-router-dom";
// import ocean from "../resource/ocean.png";
// import cargo from "../resource/cargo.png";
// import air from "../resource/air.png";
// import land from "../resource/land.png";
// import pusparaj from "../resource/pusparaj.png";
// import uttam from "../resource/uttam.png";
// import col1 from "../resource/form-col1.png";
// import col2 from "../resource/form-col2.png";
// import col3 from "../resource/form-col3.png";
// import col4 from "../resource/form-col4.png";
// import col5 from "../resource/form-col5.png";
// import PCSinghal from "../resource/PCSinghal.webp";
// import RadhaSinghal from "../resource/RadhaSinghal.webp";

// import servicestruck from "../resource/servicestruck.png";

// function About() {
//   return (
//     <div className="w-full overflow-x-hidden">
//       <div className="container mx-auto p-4 mb-0">
//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold mb-4">Legacy</h2>
//         </div>

//         {/* Shri Punam Chand Singhal Section */}
//         <div className="mb-12 flex flex-col items-center md:flex-row md:items-start justify-center m-6 md:m-10">
//           <div className="flex flex-col md:flex-row items-center justify-center">
//             <div className="md:mr-6 mb-4 md:mb-0 w-full md:w-auto max-w-xs md:max-w-none">
//               <img
//                 src={PCSinghal}
//                 alt="Late Shri Punam Chand Singhal"
//                 className="w-3/4 sm:w-full h-auto rounded-lg object-cover"
//               />
//             </div>

//             <div className="w-full text-center md:text-left md:max-w-lg">
//               <h3 className="text-xl font-bold">Shri Punam Chand Singhal</h3>
//               <div className="mt-4 px-4 md:px-0">
//                 <p className="text-gray-700">
//                   The Founder Late Shri Punam Chand Singhal had remained Chairperson & Managing Director of the Company Since Incorporation till his demise on Aug 31st, 2000. He was a Social person having vast knowledge & high repute, big political connections, knowledgeable, chairman of the Transport Association for 15 years. He is a man of Words & had all-time helpful & dedicated to services to customers, employees & vendors along with great recognition in Society.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Smt. Radha Devi Singhal Section */}
//         <div className="mb-12 flex flex-col items-center md:flex-row md:items-start justify-center m-6 md:m-10">
//           <div className="flex flex-col md:flex-row items-center justify-center">
//             <div className="md:mr-6 mb-4 md:mb-0 w-full md:w-auto max-w-xs md:max-w-none">
//               <img
//                 src={RadhaSinghal}
//                 alt="Smt. Radha Devi Singhal"
//                 className="w-3/4 sm:w-full h-auto rounded-lg object-cover"
//               />
//             </div>

//             <div className="w-full text-center md:text-left md:max-w-lg">
//               <h3 className="text-xl font-bold">Smt. Radha Devi Singhal</h3>
//               <div className="mt-4 px-4 md:px-0">
//                 <p className="text-gray-700">
//                   Smt. Radha Devi Singhal is working as Director in the Company since 1988 and She had been looking after all the Financial & Accounting Policies of the Company. She is a very pious and religious Lady with lots of respect in the entire Organisation and all-time helpful & caring.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto p-4">
//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold mb-4">Leadership</h2>
//         </div>

//         {/* Leadership Section */}
//         <div className="mb-12 flex flex-col items-center md:flex-row justify-center m-6 md:m-10">
//           <div className="md:mr-6 mb-4 md:mb-0">
//             <img
//               src={pusparaj}
//               alt="Mr. Purushottam P Singhal"
//               className="w-3/4 sm:w-full md:w-60 h-auto rounded-lg object-cover"
//             />
//           </div>

//           <div className="w-full text-center md:text-left md:max-w-lg">
//             <h3 className="text-xl font-bold">Mr. Purushottam P Singhal</h3>
//             <div className="mt-4 px-4 md:px-0">
//               <p className="text-gray-700">
//                 CEO of the Company is well equipped with experience shared by his Father Late Shri P.C.Singhal. Big high in his quality (B.Com, Mores, MBA – Logistics) and working since 1990 in the Organization and has achieved several milestones in the last 26 years and completed various jobs in Pan India in a most satisfactory manner under his leadership. He is also a Social Activist and has a good social reputation.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="mb-12 flex flex-col items-center md:flex-row justify-center m-6 md:m-10">
//           <div className="md:mr-6 mb-4 md:mb-0">
//             <img
//               src={uttam}
//               alt="Dr. Uttam Singhal"
//               className="w-3/4 sm:w-full md:w-60 h-auto rounded-lg object-cover"
//             />
//           </div>

//           <div className="w-full text-center md:text-left md:max-w-lg">
//             <h3 className="text-xl font-bold">Dr. Uttam Singhal</h3>
//             <div className="mt-4 px-4 md:px-0">
//               <p className="text-gray-700">
//                 Managing Director of the Company, B.Com (H) & MBA (Fin) had been actively leading all the activities & managing well through his accrued knowledge. He is well connected through Pan India links & has a great span of vendor base all over India. He is a Person of Vision & enthusiasm is promoted to deliver what he commits always & this is his best quality.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Gallery Section */}
//       <div className="relative h-auto bg-cover bg-center bg-yellow-400 mt-4 pt-0 pb-3">
//         <div className="container mx-auto p-2">
//           <div className="mt-4">
//             <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
//               <img src={col1} alt="Gallery Image 1" className="w-full h-40 object-cover rounded-lg" />
//               <img src={col2} alt="Gallery Image 2" className="w-full h-40 object-cover rounded-lg" />
//               <img src={col3} alt="Gallery Image 3" className="w-full h-40 object-cover rounded-lg" />
//               <img src={col4} alt="Gallery Image 4" className="w-full h-40 object-cover rounded-lg" />
//               <img src={col5} alt="Gallery Image 5" className="w-full h-40 object-cover rounded-lg" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;



// import React from "react";
// import logo from "../resource/About us banner.jpeg";
// import { Link } from "react-router-dom";
// import ocean from "../resource/ocean.png";
// import cargo from "../resource/cargo.png";
// import air from "../resource/air.png";
// import land from "../resource/land.png";
// import pusparaj from "../resource/pusparaj.png";
// import uttam from "../resource/uttam.png";
// import col1 from "../resource/form-col1.png";
// import col2 from "../resource/form-col2.png";
// import col3 from "../resource/form-col3.png";
// import col4 from "../resource/form-col4.png";
// import col5 from "../resource/form-col5.png";
// import PCSinghal from "../resource/PCSinghal.webp";
// import RadhaSinghal from "../resource/RadhaSinghal.webp";
// import servicestruck from "../resource/servicestruck.png";

// function About() {
//   return (
//     <div className="w-full overflow-x-hidden">
//       {/* Container for Header and Legacy Section */}
//       <div className="container mx-auto px-4 py-8">
//         {/* Header Section */}
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-bold">Legacy</h2>
//         </div>

//         {/* Legacy Content */}
//         <div className="mb-12 flex flex-col items-center md:flex-row md:justify-center">
//           <div className="md:mr-6 mb-4 md:mb-0">
//             <img
//               src={PCSinghal}
//               alt="Late Shri Punam Chand Singhal"
//               className="w-full md:w-auto h-auto rounded-lg object-cover"
//             />
//           </div>
//           <div className="w-full text-center md:text-left">
//             <h3 className="text-xl font-bold">Shri Punam Chand Singhal</h3>
//             <div className="mt-4 px-6 md:px-0">
//               <p className="text-gray-700">
//                 The Founder Late Shri Punam Chand Singhal had remained
//                 Chairperson & Managing Director of the Company Since
//                 Incorporation till his demise on Aug 31st, 2000. He was a social
//                 person with vast knowledge & high repute, big political
//                 connections, and served as chairman of the Transport Association
//                 for 15 years. He was always helpful and dedicated to serving
//                 customers, employees, and vendors.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="mb-12 flex flex-col items-center md:flex-row md:justify-center">
//           <div className="md:mr-6 mb-4 md:mb-0">
//             <img
//               src={RadhaSinghal}
//               alt="Smt. Radha Devi Singhal"
//               className="w-full md:w-auto h-auto rounded-lg object-cover"
//             />
//           </div>
//           <div className="w-full text-center md:text-left">
//             <h3 className="text-xl font-bold">Smt. Radha Devi Singhal</h3>
//             <div className="mt-4 px-6 md:px-0">
//               <p className="text-gray-700">
//                 Smt. Radha Devi Singhal has been working as Director of the
//                 Company since 1988. She oversees all financial and accounting
//                 policies of the Company. She is a pious and respected figure in
//                 the organization, known for her caring and helpful nature.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Leadership Section */}
//       <div className="container mx-auto px-4 py-8">
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-bold">Leadership</h2>
//         </div>

//         {/* Leadership Members */}
//         <div className="mb-12 flex flex-col items-center md:flex-row md:justify-center">
//           <div className="md:mr-6 mb-4 md:mb-0">
//             <img
//               src={pusparaj}
//               alt="Mr. Purushottam P Singhal"
//               className="w-full md:w-60 h-50 rounded-lg object-cover"
//             />
//           </div>
//           <div className="w-full text-center md:text-left">
//             <h3 className="text-xl font-bold">Mr. Purushottam P Singhal</h3>
//             <div className="mt-4 px-6 md:px-0">
//               <p className="text-gray-700">
//                 CEO of the Company, Mr. Singhal has been working since 1990 and
//                 has achieved several milestones over the years. He is a social
//                 activist, well connected through Pan India, and has significant
//                 expertise in handling critical jobs.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="mb-12 flex flex-col items-center md:flex-row md:justify-center">
//           <div className="md:mr-6 mb-4 md:mb-0">
//             <img
//               src={uttam}
//               alt="Dr. Uttam Singhal"
//               className="w-full md:w-60 h-58 rounded-lg object-cover"
//             />
//           </div>
//           <div className="w-full text-center md:text-left">
//             <h3 className="text-xl font-bold">Dr. Uttam Singhal</h3>
//             <div className="mt-4 px-6 md:px-0">
//               <p className="text-gray-700">
//                 Managing Director of the Company, Dr. Uttam Singhal has been
//                 leading the organization since 2006. He is recognized for his
//                 vision, expertise, and ability to deliver on commitments, making
//                 him a highly regarded figure in the industry.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Gallery Section */}
//       <div className="bg-yellow-400 py-8">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-8">
//             <h2 className="text-3xl font-bold">Our Work</h2>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
//             <img
//               src={col1}
//               alt="Gallery Image 1"
//               className="w-full h-40 object-cover rounded-lg"
//             />
//             <img
//               src={col2}
//               alt="Gallery Image 2"
//               className="w-full h-40 object-cover rounded-lg"
//             />
//             <img
//               src={col3}
//               alt="Gallery Image 3"
//               className="w-full h-40 object-cover rounded-lg"
//             />
//             <img
//               src={col4}
//               alt="Gallery Image 4"
//               className="w-full h-40 object-cover rounded-lg"
//             />
//             <img
//               src={col5}
//               alt="Gallery Image 5"
//               className="w-full h-40 object-cover rounded-lg"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;



// import React from "react";
// import logo from "../resource/About us banner.jpeg";
// import { Link } from "react-router-dom";
// import ocean from "../resource/ocean.png";
// import cargo from "../resource/cargo.png";
// import air from "../resource/air.png";
// import land from "../resource/land.png";
// import pusparaj from "../resource/pusparaj.png";
// import uttam from "../resource/uttam.png";
// import col1 from "../resource/form-col1.png";
// import col2 from "../resource/form-col2.png";
// import col3 from "../resource/form-col3.png";
// import col4 from "../resource/form-col4.png";
// import col5 from "../resource/form-col5.png";
// import PCSinghal from "../resource/PCSinghal.webp";
// import RadhaSinghal from "../resource/RadhaSinghal.webp";

// import servicestruck from "../resource/servicestruck.png";

// function About() {


//   return (
//     <div className="w-full overflow-x-hidden">

//       <div className="container mx-auto p-4 mb-0">
//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold mb-4">Legacy</h2>
//         </div>

//         <div className="mb-12 flex flex-col items-center  m-60 mt-10" >
//           <div className="flex flex-col md:flex-row items-center justify-center ">

//             <div className="md:mr-6 mb-4 md:mb-0 ">
//               <img src={PCSinghal} alt="Late Shri Punam Chand Singhal" className="w-full md:w-auto h-auto rounded-lg object-cover" />
//             </div>

//             <div className="w-full text-center md:text-left ">
//               <h3 className="text-xl font-bold">Shri Punam Chand Singhal</h3>
//               <div className="mt-4 px-6 md:px-0">
//                 <p className="flex justify-center text-gray-700 line-clamp-5">
//                   The Founder Late Shri Punam Chand Singhal had remained Chairperson & Managing Director of the Company Since Incorporation till his demise on Aug 31st, 2000. He was a Social person having vast knowledge & high repute, big political connections, Knowledgable, chairman of the Transport Association for 15 years. He is a man of Words & had all-time helpful & dedicated to services to customers, employees & vendors along with great recognition in Society.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="mb-12 flex flex-col items-center  m-60 mt-10">
//           <div className="flex flex-col md:flex-row items-center justify-center ">

//             <div className="md:mr-6 mb-4 md:mb-0 ">
//               <img src={RadhaSinghal} alt="Smt. Radha Devi Singhal" className="w-full md:w-auto h-auto rounded-lg object-cover" />
//             </div>

//             <div className="w-full text-center md:text-left ">
//               <h3 className="text-xl font-bold">Smt. Radha Devi Singhal</h3>
//               <div className="mt-4 px-6 md:px-0">
//                 <p className="flex justify-center text-gray-700 line-clamp-5">
//                   Smt. Radha Devi Singhal is working as Director in the Company since 1988 and She had been looking after all the Financial & Accounting Policies of the Company. She is a very pious and religious Lady with lots of respect in the entire Organisation and all-time helpful & caring.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>

//       <div className="container mx-auto p-4">
//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold mb-4">Leadership</h2>
//         </div>

//         <div className="mb-12 flex flex-col items-center  m-60 mt-10" >
//           <div className="flex flex-col md:flex-row items-center justify-center ">

//             <div className="md:mr-6 mb-4 md:mb-0 ">
//               <img src={pusparaj} alt="Mr. Purushottam P Singhal" className="w-full md:w-60 h-50 rounded-lg object-cover" />
//             </div>

//             <div className="w-full text-center md:text-left ">
//               <h3 className="text-xl font-bold">Mr. Purushottam P Singhal</h3>
//               <div className="mt-4 px-6 md:px-0">
//                 <p className="flex justify-center text-gray-700 line-clamp-5">
//                   CEO of the Company is well equipped with experience shared by his Father Late Shri P.C.Singhal.
//                   Big high in his quality ( B.Com, Mores, MBA – Logistics ) and working since 1990 in the Organization
//                   and has achieved several milestones in the last 26 years and complete various job in Pan India in a
//                   most satisfactory manner under his leadership. He is also Social Activist and has a good social reputation.
//                   He is a Trustee of S.H.Jaiparia International Hospital™ and part of various other Social Services to society &
//                   possess good expertise in handling & movement of critical & superficial Jobs too.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="mb-12 flex flex-col items-center  m-60 mt-10">
//           <div className="flex flex-col md:flex-row items-center justify-center ">

//             <div className="md:mr-6 mb-4 md:mb-0 ">
//               <img src={uttam} alt="Dr. Uttam Singhal" className="w-full md:w-60 h-58 rounded-lg object-cover" />
//             </div>

//             <div className="w-full text-center md:text-left ">
//               <h3 className="text-xl font-bold">Dr. Uttam Singhal</h3>
//               <div className="mt-4 px-6 md:px-0">
//                 <p className="flex justify-center text-gray-700 line-clamp-5">
//                   Managing Director of the Company, B.Com (H) & MBA (Fin) had been actively leading all the activities & managing well
//                   through his accrued knowledge, well experienced, high qualified in good organisation in 2006 and had achieved various
//                   Unfathomable Achievement & recognised best service providers with new outlook & modern approach & solutions.
//                   He is well connected through Pan India links & has a great span of vendor base all over India. He is a Person of Vision &
//                   enthusiasm is promoted to deliver what he commits always & this is his best quality.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="relative h-50 bg-cover bg-center bg-yellow-400 mt-4 pt-0 pb-3">
//         <div className="container mx-auto p-2 ">
//           <div className="mt-4 ">
//             <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
//               <img src={col1} alt="Gallery Image 1" className="w-full h-40 object-cover rounded-lg" />
//               <img src={col2} alt="Gallery Image 2" className="w-full h-40 object-cover rounded-lg" />
//               <img src={col3} alt="Gallery Image 3" className="w-full h-40 object-cover rounded-lg" />
//               <img src={col4} alt="Gallery Image 4" className="w-full h-40 object-cover rounded-lg" />
//               <img src={col5} alt="Gallery Image 5" className="w-full h-40 object-cover rounded-lg" />
//             </div>
//           </div>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default About
