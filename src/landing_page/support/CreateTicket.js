import React from 'react';

function CreateTicket() {
    return ( 
            <div className="bg-primary text-white py-5">
              <div className="container">
                <div className="row align-items-center">
                  {/* Left Section */}
                  <div className="col-md-8">
                    <h2 className="mb-4">Support Portal</h2>
                    <p className="mb-3">
                      Search for an answer or browse help topics to create a ticket
                    </p>
        
                    {/* Search Box */}
                    <div className="input-group mb-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Eg: how do I activate F&O, why is my order getting rejected..."
                      />
                      <button className="btn btn-light">
                        <i className="bi bi-search"></i>
                      </button>
                    </div>
        
                    {/* Links Section */}
                    <div className="d-flex flex-wrap">
                      <a href="#" className="text-white me-4 mb-2 text-decoration-underline">
                        Track account opening
                      </a>
                      <a href="#" className="text-white me-4 mb-2 text-decoration-underline">
                        Track segment activation
                      </a>
                      <a href="#" className="text-white me-4 mb-2 text-decoration-underline">
                        Intraday margins
                      </a>
                      <a href="#" className="text-white text-decoration-underline">
                        Kite user manual
                      </a>
                    </div>
                  </div>
        
                  {/* Right Section */}
                  <div className="col-md-4">
                    <h4 className="mb-3">Featured</h4>
                    <ol className="list-unstyled">
                      <li>
                        <a
                          href="#"
                          className="text-white text-decoration-underline"
                        >
                          Non-business day for mutual funds on Wednesday, November 20, 2024
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-white text-decoration-underline"
                        >
                          MCX Option contracts expiry - November 2024
                        </a>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          );
        
}

export default CreateTicket;