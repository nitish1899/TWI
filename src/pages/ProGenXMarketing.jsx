
import React from 'react';

function ProGenXMarketing() {
    return (
        <div style={styles.container}>
            <div style={styles.overlay}>
                <h1 style={styles.heading}>Pro GenX Marketing Pvt Ltd</h1>
                <p style={styles.description}>
                    Pro GenX is a marketing company with
                    shares in 2 manufacturing plants, one being an EV manufacturing plant
                    in Nasik, Maharashtra, and second, Alkaline water ionizer manufacturing
                    plant in Gandhinagar, Gujarat.
                </p>
                <h2 style={styles.comingSoon}>Coming Soon...</h2>
            </div>
        </div>
    );
}

const styles = {
    container: {
        backgroundImage: "url('https://example.com/your-image.jpg')", // Replace with your background image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Full-screen height
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark overlay
        padding: '50px',
        borderRadius: '15px',
        textAlign: 'center',
        color: 'white',
    },
    heading: {
        fontSize: '3rem',
        fontWeight: 'bold',
    },
    description: {
        fontSize: '1.5rem',
        margin: '20px 0',
    },
    comingSoon: {
        fontSize: '2rem',
        fontStyle: 'italic',
    },
};

export default ProGenXMarketing;