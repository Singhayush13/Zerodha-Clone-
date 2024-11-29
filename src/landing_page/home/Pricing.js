import React from 'react';

function Pricing() {
    return (
        <div className="container my-5 mt-5 mb-5">
            <div className="row align-items-center">
                {/* Left Section */}
                <div className="col-md-6 mb-4 mb-md-0">
                    <h1 className="mb-3 fs-4">Unbeatable Pricing</h1>
                    <p>
                        We pioneered the concept of discount broking and price transparency in India. 
                        Flat fees and no hidden charges.
                    </p>
                    <a href="#" className="text-decoration-none">
                        See Pricing
                    </a>
                </div>
                {/* Right Section */}
                <div className="col-md-6">
                    <div className="row text-center">
                        {/* Free Pricing */}
                        <div className="col-12 col-sm-6 mb-3 mb-sm-0">
                            <div className="p-3 border h-100">
                                <h1 className="mb-3">₹0</h1>
                                <p className="mb-0">
                                    Free Equity Delivery and Direct Mutual Funds
                                </p>
                            </div>
                        </div>
                        {/* Paid Pricing */}
                        <div className="col-12 col-sm-6">
                            <div className="p-3 border h-100">
                                <h1 className="mb-3">₹20</h1>
                                <p className="mb-0">Intraday & F&O</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
        </div>
    );
}

export default Pricing;
