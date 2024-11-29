import React from 'react';

function Education() {
    return (
        <div className="container mt-5 my-5">
            <div className="row align-items-center">
                <div className="col-md-6 text-center mb-4 mb-md-0">
                    <img
                        src="media/images/education.svg"
                        alt="education"
                        className="img-fluid"
                        style={{ maxWidth: "70%" }}
                    />
                </div>
                <div className="col-md-6">
                    <h1 className="mb-3 fs-4">Free and Open Market Education</h1>
                    <p>
                        Varsity, the largest online stock market education book in the world
                        covering everything from the basics to advanced trading.
                    </p>
                    <a href="#" className="text-decoration-none">
                        Varsity
                    </a>
                    <p>x
                        TradingQ&A, the most active trading and investment community in India
                        for all your market-related queries.
                    </p>
                    <a href="#" className="text-decoration-none">
                        TradingQ&A
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Education;
