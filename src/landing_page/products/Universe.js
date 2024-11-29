import React from 'react';

function Universe() {
    return (
        <div className="container mt-5">
            {/* Header */}
            <div className="text-center">
                <h1 className="display-5 fw-bold">The Zerodha Universe</h1>
                <p className="text-muted fs-5">
                    Extend your trading and investment experience even further with our partner platforms
                </p>
            </div>

            {/* Partner Platforms */}
            <div className="row gy-4 mt-4">
                {/* First Row */}
                <div className="col-sm-6 col-lg-4 text-center">
                    <img
                        src="media/images/smallcaselogo.png"
                        className="img-fluid mb-3"
                        alt="Smallcase Logo"
                        style={{ width: '120px', height: '120px', objectFit: 'contain' }}
                    />
                    <p className="fw-semibold text-muted">Smallcase - Discover Investment Ideas</p>
                </div>
                <div className="col-sm-6 col-lg-4 text-center">
                    <img
                        src="media/images/streaklogo.png"
                        className="img-fluid mb-3"
                        alt="Streak Logo"
                        style={{ width: '120px', height: '120px', objectFit: 'contain' }}
                    />
                    <p className="fw-semibold text-muted">Streak - Simplify Algorithmic Trading</p>
                </div>
                <div className="col-sm-6 col-lg-4 text-center">
                    <img
                        src="media/images/dittologo.png"
                        className="img-fluid mb-3"
                        alt="Ditto Logo"
                        style={{ width: '120px', height: '120px', objectFit: 'contain' }}
                    />
                    <p className="fw-semibold text-muted">Ditto - Insurance Made Simple</p>
                </div>

                {/* Second Row */}
                <div className="col-sm-6 col-lg-4 text-center">
                    <img
                        src="media/images/sensibulllogo.svg"
                        className="img-fluid mb-3"
                        alt="Sensibull Logo"
                        style={{ width: '120px', height: '120px', objectFit: 'contain' }}
                    />
                    <p className="fw-semibold text-muted">Sensibull - Options Simplified</p>
                </div>
                <div className="col-sm-6 col-lg-4 text-center">
                    <img
                        src="media/images/sensibulllogo.svg"
                        className="img-fluid mb-3"
                        alt="Ticker Logo"
                        style={{ width: '120px', height: '120px', objectFit: 'contain' }}
                    />
                    <p className="fw-semibold text-muted">Ticker - Advanced Analytics</p>
                </div>
                <div className="col-sm-6 col-lg-4 text-center">
                    <img
                        src="media/images/sensibulllogo.svg"
                        className="img-fluid mb-3"
                        alt="LearnApp Logo"
                        style={{ width: '120px', height: '120px', objectFit: 'contain' }}
                    />
                    <p className="fw-semibold text-muted">LearnApp - Learn Trading and Investing</p>
                </div>
            </div>
                 <div className='containter text-center'>
                       <button className=" text-center btn btn-primary px-4 py-2 fs-5">
                            Signup for Free
                        </button>
        </div>
        </div>
    );
}

export default Universe;
