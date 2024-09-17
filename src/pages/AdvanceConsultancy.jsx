import React from 'react';

function AdvanceConsultancy() {
    return (
        <div style={styles.container}>
            <div style={styles.overlay}>
                <h1 style={styles.heading}>Advance Consultancy</h1>
                <p style={styles.description}>
                    Advance Consultancy provides advocacy for
                    government policies and gives consultancy services to companies from
                    various industries while also being associated with prominent business
                    chambers.
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

export default AdvanceConsultancy;