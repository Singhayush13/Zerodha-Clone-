import React from 'react';

function Hero() {
    return (
        <div className="container py-5 mb-5">
            <div className="row justify-content-center text-center">
                <div className="col-12">
                    <img
                        src="media/images/homeHero.png"
                        alt="Hero-Image"
                        className="img-fluid mb-4"
                        style={{ maxWidth: "100%" }}
                    />
                    <h1 className="mt-4 fs-3">Invest in Everything</h1>
                    <p className="mb-4">
                        Online platform to invest in Stocks, Derivatives, Mutual Funds, and more.
                    </p>
                    <div>
                        <button className="btn btn-primary px-4 py-2 fs-5">
                            Signup Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
