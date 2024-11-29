import React from 'react';

function LeftSection({ imageUrl, productname, productDescription, tryDemo, learnmore, googleplay, appStore }) {
    return (
        <div className="container border-top mb-5">
            <div className="row align-items-center">
                {/* Image Section */}
                <div className="col-12 col-md-6 p-3 p-md-5">
                    <img
                        src={imageUrl}
                        alt={productname}
                        className="img-fluid"
                        style={{
                            borderRadius: "8px",
                        }}
                    />
                </div>

                {/* Content Section */}
                <div className="col-12 col-md-6 p-3 p-md-5">
                    <h1 className="mb-4">{productname}</h1>
                    <p className="mb-4">{productDescription}</p>

                    {/* Buttons for Try Demo and Learn More */}
                    <div className="d-flex gap-3 flex-wrap mb-4">
                        <a
                            href={tryDemo}
                            className="btn btn-primary"
                            style={{
                                borderRadius: "5px",
                                padding: "10px 20px",
                            }}
                        >
                            Try Demo
                        </a>
                        <a
                            href={learnmore}
                            className="btn btn-outline-secondary"
                            style={{
                                borderRadius: "5px",
                                padding: "10px 20px",
                            }}
                        >
                            Learn More
                        </a>
                    </div>

                    {/* Store Badges */}
                    <div className="d-flex gap-3 flex-wrap">
                        <a href={googleplay}>
                            <img
                                src="media/images/googlePlayBadge.svg"
                                alt="Google Play Badge"
                                className="img-fluid"
                                style={{ maxHeight: "50px" }}
                            />
                        </a>
                        <a href={appStore}>
                            <img
                                src="media/images/appstoreBadge.svg"
                                alt="App Store Badge"
                                className="img-fluid"
                                style={{ maxHeight: "50px" }}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;
