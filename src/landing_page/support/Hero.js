import React from "react";


function SupportTopics() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">To create a ticket, select a relevant topic</h2>
      <div className="row g-4">
        {/* Account Opening */}
        <div className="col-md-6 col-lg-4">
          <div className="p-3 border rounded shadow-sm h-100">
            <h5 className="d-flex align-items-center mb-3">
              <i className="fas fa-key me-2 text-primary"></i> Account Opening
            </h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-dark">Getting started</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Online</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Offline</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Charges</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Company, Partnership and HUF</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Non Resident Indian (NRI)</a></li>
            </ul>
          </div>
        </div>

        {/* Your Zerodha Account */}
        <div className="col-md-6 col-lg-4">
          <div className="p-3 border rounded shadow-sm h-100">
            <h5 className="d-flex align-items-center mb-3">
              <i className="fas fa-user-circle me-2 text-primary"></i> Your Zerodha Account
            </h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-dark">Login credentials</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Your Profile</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Account modification and segment addition</a></li>
              <li><a href="#" className="text-decoration-none text-dark">CMR & DP ID</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Nomination</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Transfer and conversion of shares</a></li>
            </ul>
          </div>
        </div>

        {/* Trading and Markets */}
        <div className="col-md-6 col-lg-4">
          <div className="p-3 border rounded shadow-sm h-100">
            <h5 className="d-flex align-items-center mb-3">
              <i className="fas fa-chart-line me-2 text-primary"></i> Trading and Markets
            </h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-dark">Trading FAQs</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Kite</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Margins</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Product and order types</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Corporate actions</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Kite features</a></li>
            </ul>
          </div>
        </div>

        {/* Funds */}
        <div className="col-md-6 col-lg-4">
          <div className="p-3 border rounded shadow-sm h-100">
            <h5 className="d-flex align-items-center mb-3">
              <i className="fas fa-wallet me-2 text-primary"></i> Funds
            </h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-dark">Fund withdrawal</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Adding funds</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Adding bank accounts</a></li>
              <li><a href="#" className="text-decoration-none text-dark">eMandates</a></li>
            </ul>
          </div>
        </div>

        {/* Console */}
        <div className="col-md-6 col-lg-4">
          <div className="p-3 border rounded shadow-sm h-100">
            <h5 className="d-flex align-items-center mb-3">
              <i className="fas fa-window-maximize me-2 text-primary"></i> Console
            </h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-dark">IPO</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Portfolio</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Funds statement</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Profile</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Reports</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Referral program</a></li>
            </ul>
          </div>
        </div>

        {/* Coin */}
        <div className="col-md-6 col-lg-4">
          <div className="p-3 border rounded shadow-sm h-100">
            <h5 className="d-flex align-items-center mb-3">
              <i className="fas fa-coins me-2 text-primary"></i> Coin
            </h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-dark">Understanding mutual funds and Coin</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Coin app</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Coin web</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Transactions and reports</a></li>
              <li><a href="#" className="text-decoration-none text-dark">National Pension Scheme (NPS)</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportTopics;
