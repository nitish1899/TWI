import React from 'react';

function GreenEarthPulpPaper() {
    return (
        <div className="bg-cover bg-center h-screen flex justify-center items-center" style={{ backgroundImage: "url('https://example.com/your-image.jpg')" }}>
            <div className="bg-black bg-opacity-60 p-8 md:p-16 rounded-lg text-center text-white">
                <h1 className="text-3xl md:text-5xl font-bold">Green Earth Pulp & Paper Pvt Ltd</h1>
                <p className="text-lg md:text-2xl mt-4">
                    Green Earth Pulp and Paper PVT LTD is
                    Bharat’s first commercial bamboo paste pulp mill upcoming in the
                    North Eastern region.
                </p>
                <h2 className="text-2xl md:text-4xl italic mt-6">Coming Soon...</h2>
            </div>
        </div>
    );
}


// function GreenEarthPulpPaper() {
//     return (
//         <div style={styles.container}>
//             <div style={styles.overlay}>
//                 <h1 style={styles.heading}>Green Earth Pulp & Paper Pvt Ltd</h1>
//                 <p style={styles.description}>
//                     Green Earth Pulp and Paper PVT LTD is
//                     Bharat’s first commercial bamboo paste pulp mill upcoming in the
//                     North Eastern region.
//                 </p>
//                 <h2 style={styles.comingSoon}>Coming Soon...</h2>
//             </div>
//         </div>
//     );
// }

// const styles = {
//     container: {
//         backgroundImage: "url('https://example.com/your-image.jpg')", // Replace with your background image URL
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         height: '100vh', // Full-screen height
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     overlay: {
//         backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark overlay
//         padding: '50px',
//         borderRadius: '15px',
//         textAlign: 'center',
//         color: 'white',
//     },
//     heading: {
//         fontSize: '3rem',
//         fontWeight: 'bold',
//     },
//     description: {
//         fontSize: '1.5rem',
//         margin: '20px 0',
//     },
//     comingSoon: {
//         fontSize: '2rem',
//         fontStyle: 'italic',
//     },
// };

export default GreenEarthPulpPaper;
