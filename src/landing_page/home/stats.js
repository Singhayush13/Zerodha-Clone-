import React from 'react';

function Stats() {
    return (
        <div className="container py-5 mb-5">
            <div className="row align-items-center">
                {/* Left Content Section */}
                <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                    <h1 className="fs-3 mb-4">Trust with Confidence</h1>

                    <h2 className="fs-5 mt-4">Customer-First Always</h2>
                    <p className="text-muted">
                        That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.
                    </p>

                    <h2 className="fs-5 mt-4">No Spam or Gimmicks</h2>
                    <p className="text-muted">
                        No gimmicks, spam, "gamification," or annoying push notifications. High-quality apps that you use at your pace, the way you like.
                    </p>

                    <h2 className="fs-5 mt-4">The Zerodha Universe</h2>
                    <p className="text-muted">
                        Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
                    </p>

                    <h2 className="fs-5 mt-4">Do Better with Money</h2>
                    <p className="text-muted">
                        With initiatives like Nudge and Kill Switch, we don't just facilitate transactions but actively help you do better with your money.
                    </p>
                </div>

                {/* Right Image Section */}
                <div className="col-12 col-lg-6 text-center mb-3">
                    <img
                        src="media/images/ecosystem.png"
                        className="img-fluid mb-4"
                        alt="ecosystem"
                        style={{ maxWidth: "90%" }}
                    />
                    <div>
                        <a href="#" className="btn btn-link text-decoration-none me-3">
                            Explore Our Products
                        </a>
                        <a href="#" className="btn btn-link text-decoration-none">
                            Try Kite Demo
                        </a>
                    </div>
                </div>
            </div>
            <br></br>
        </div>
    );
}

export default Stats;
