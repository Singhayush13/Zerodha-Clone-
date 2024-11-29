import React from "react";

function Hero() {
  return (
    <div className="container">
      {/* Section Heading */}
      <div className="row py-5 mt-5 border-top text-center">
        <h1>Pricing</h1>
        <p className="text-muted fs-4 mt-3">
          List of all charges and taxes
        </p>
      </div>
      
      {/* Pricing Cards */}
      <div className="row text-center">
        {/* Card 1 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 p-4 border-0 shadow">
            <img 
              src="media/images/pricingEquity.svg" 
              alt="Equity Pricing" 
              className="img-fluid mb-3"
            />
            <h2 className="fs-4">Free Equity Delivery</h2>
            <p className="text-muted">
              All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 p-4 border-0 shadow">
            <img 
              src="media/images/intradayTrades.svg" 
              alt="Intraday Trades" 
              className="img-fluid mb-3"
            />
            <h2 className="fs-4">Intraday and F&O Trades</h2>
            <p className="text-muted">
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 p-4 border-0 shadow">
            <img 
              src="media/images/pricingEquity.svg" 
              alt="Free Direct MF" 
              className="img-fluid mb-3"
            />
            <h2 className="fs-4">Free Direct MF</h2>
            <p className="text-muted">
              All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
