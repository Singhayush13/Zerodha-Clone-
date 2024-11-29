import React from 'react';

function Awards() {
    return (
        <div className="container mt-5">
            <div className="row align-items-center">
                {/* Left Section */}
                <div className="col-12 col-md-6 text-center p-5">
                    <img
                        src="media/images/largestBroker.svg"
                        alt="broker"
                        className="img-fluid"
                    />
                </div>
                {/* Right Section */}
                <div className="col-12 col-md-6 p-5">
                    <h1 className="mb-4 fs-3">Largest Stock Broker in India</h1>
                    <p className="mb-5">
                        2+ Million Zerodha Clients Contribute to Over 15% of All
                    </p>
                    <div className="row">
                        <div className="col-6">
                            <ul className="list-unstyled">
                                <li>Futures & Options</li>
                                <li>Commodity & Derivatives</li>
                                <li>Currency Derivatives</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul className="list-unstyled">
                                <li>Stocks & IPOs</li>
                                <li>Direct Mutual Funds</li>
                                <li>Bonds & Government Securities</li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center">
                        <img
                            src="media/images/pressLogos.png"
                            alt="Press-logo"
                            className="img-fluid"
                            style={{ maxWidth: "90%" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Awards;
