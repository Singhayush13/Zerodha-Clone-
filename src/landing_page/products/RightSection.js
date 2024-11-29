import React from 'react';

function Rightsection({ imageUrl, productname, productDescription,learnmore}) {
    return ( 
       
        <div className="container border-top mb-5">
        <div className="row align-items-center">
            {/* Content Section */}
            <div className="col-12 col-md-6 p-3 p-md-5">
                <h1 className="mb-4">{productname}</h1>
                <p className="mb-4">{productDescription}</p>

                {/* Buttons for Try Demo and Learn More */}
                <div className="d-flex gap-3 flex-wrap mb-4">
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
            </div>
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
        </div>
    </div>

     );
}

export default Rightsection;