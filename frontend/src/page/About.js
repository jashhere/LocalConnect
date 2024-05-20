import React from 'react';
import './about.css'; // Ensure this points to your CSS file

const AboutUs = () => {
    return (
        <div>
            <div className="about-section">
                <h1>About LocalConnnect</h1>
                <p>At LocalConnect, we bring the freshest produce right to your doorstep.</p>
                <p>Founded with a passion for quality and sustainability, we've been committed to connecting families with the freshest, locally-sourced fruits, vegetables, and artisanal products . Our mission is to make grocery shopping seamless, affordable, and eco-friendly.And help local vendors to enhance their business and sales.</p>
            </div>

            <h2 style={{ textAlign: 'center' }}>Meet Our Team</h2>
            <div className="row">
                <div className="column">
                    <div className="card">
                        
                        <div className="container">
                            <h2>Jash Bhagat</h2>
                            <p className="title">Developer</p>
                           
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                      
                        <div className="container">
                            <h2>Chopada Om</h2>
                            <p className="title">Developer</p>
                            
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        
                        <div className="container">
                            <h2>Kranti Patel</h2>
                            <p className="title">Developer</p>
                            
                        </div>
                    </div>
                </div>
                
                <div className="column">
                    <div className="card">
                       
                        <div className="container">
                            <h2>Maharshi Patel</h2>
                            <p className="title">Developer</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
