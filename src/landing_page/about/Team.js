import React from 'react';

function Team() {
    return (
        <div className="container">
            {/* Team Heading Section */}
            <div className="row p-5 mb-3 mt-5 border-top">
                <h1 className="fs-2 text-center mb-5">Meet Our Team</h1>
            </div>

            {/* Founder Section */}
            <div className="row mb-5 align-items-center">
                <div className="col-12 col-md-6 d-flex flex-column align-items-center text-center">
                    <img
                        src="media/images/ayush.jpg"
                        alt="Ayush Singh"
                        className="img-fluid rounded-circle shadow"
                        style={{ width: "75%", maxWidth: "300px", height: "auto" }}
                    />
                    <h4 className="mt-4 mb-1">Ayush Singh</h4>
                    <h6 className="text-muted">Founder, CEO</h6>
                    <div className="mt-3">
                        {/* Social Icons */}
                        <a href="https://instagram.com/ayush" target="_blank" rel="noopener noreferrer" className="text-dark me-3">
                            <i className="fab fa-instagram fa-lg"></i>
                        </a>
                        <a href="https://linkedin.com/in/ayush" target="_blank" rel="noopener noreferrer" className="text-dark me-3">
                            <i className="fab fa-linkedin fa-lg"></i>
                        </a>
                        <a href="https://twitter.com/ayush" target="_blank" rel="noopener noreferrer" className="text-dark">
                            <i className="fab fa-twitter fa-lg"></i>
                        </a>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <p>
                        Ayush Singh, currently pursuing a Bachelor of Science in Information Technology (B.Sc. IT) at Thakur Ramnarayan College, is the visionary founder behind a cutting-edge platform inspired by Zerodha. With a passion for innovation and technology, Ayush has demonstrated his entrepreneurial skills by conceptualizing and developing this advanced trading platform.
                    </p>
                    <p>
                        Alongside his academic pursuits, he serves as an Admin-Executive at Aakaar Education, Vasai, where he effectively manages marketing strategies and operational workflows, showcasing his expertise in both management and technology.
                    </p>
                </div>
            </div>

            <hr />

            {/* Additional Team Members Section */}
            <div className="row mt-5 gy-4">
                {/* Team Member 1 */}
                <div className="col-12 col-md-6 col-lg-6 d-flex flex-column align-items-center text-center">
                    <img
                        src="media/images/ritesh.jpg"
                        alt="Ritesh Singh"
                        className="img-fluid rounded-circle shadow"
                        style={{ width: "200px", height: "200px", objectFit: "cover" }}
                    />
                    <h4 className="mt-4 mb-1">Ritesh Singh</h4>
                    <h6 className="text-muted">CTO</h6>
                    <p>
                        Ritesh brings extensive experience in technology and product development. He leads the technical team to create robust and scalable solutions for the platform.
                    </p>
                    <div className="mt-3">
                        <a href="https://instagram.com/ritesh" target="_blank" rel="noopener noreferrer" className="text-dark me-3">
                            <i className="fab fa-instagram fa-lg"></i>
                        </a>
                        <a href="https://linkedin.com/in/ritesh" target="_blank" rel="noopener noreferrer" className="text-dark me-3">
                            <i className="fab fa-linkedin fa-lg"></i>
                        </a>
                        <a href="https://twitter.com/ritesh" target="_blank" rel="noopener noreferrer" className="text-dark">
                            <i className="fab fa-twitter fa-lg"></i>
                        </a>
                    </div>
                </div>

                {/* Team Member 2 */}
                <div className="col-12 col-md-6 col-lg-6 d-flex flex-column align-items-center text-center">
                    <img
                        src="media/images/kishan.jpg"
                        alt="Kishan Singh"
                        className="img-fluid rounded-circle shadow"
                        style={{ width: "200px", height: "200px", objectFit: "cover" }}
                    />
                    <h4 className="mt-4 mb-1">Kishan Singh</h4>
                    <h6 className="text-muted">COO</h6>
                    <p>
                        Kishan oversees operations and ensures seamless execution of projects. His strategic vision and organizational skills drive the team's success.
                    </p>
                    <div className="mt-3">
                        <a href="https://instagram.com/kishan" target="_blank" rel="noopener noreferrer" className="text-dark me-3">
                            <i className="fab fa-instagram fa-lg"></i>
                        </a>
                        <a href="https://linkedin.com/in/kishan" target="_blank" rel="noopener noreferrer" className="text-dark me-3">
                            <i className="fab fa-linkedin fa-lg"></i>
                        </a>
                        <a href="https://twitter.com/kishan" target="_blank" rel="noopener noreferrer" className="text-dark">
                            <i className="fab fa-twitter fa-lg"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;
