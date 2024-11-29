import React from "react";

function Brokerage() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Brokerage and Charges</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered text-center align-middle shadow">
          {/* Table Header */}
          <thead className="table-dark">
            <tr>
              <th scope="col">Equity Delivery</th>
              <th scope="col">Equity Intraday</th>
              <th scope="col">F&O - Futures</th>
              <th scope="col">F&O - Options</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {/* Brokerage Row */}
            <tr>
              <td>Zero Brokerage</td>
              <td>0.03% or ₹20/executed order whichever is lower</td>
              <td>0.03% or ₹20/executed order whichever is lower</td>
              <td>Flat ₹20 per executed order</td>
            </tr>

            {/* STT/CTT Row */}
            <tr>
              <td>0.1% on buy & sell</td>
              <td>0.025% on the sell side</td>
              <td>0.02% on the sell side</td>
              <td>
                <ul className="list-unstyled text-start mb-0">
                  <li>0.125% of the intrinsic value on options that are bought and exercised</li>
                  <li>0.1% on the sell side (on premium)</li>
                </ul>
              </td>
            </tr>

            {/* Transaction Charges Row */}
            <tr>
              <td>
                NSE: 0.00297% <br />
                BSE: 0.00375%
              </td>
              <td>
                NSE: 0.00297% <br />
                BSE: 0.00375%
              </td>
              <td>
                NSE: 0.00173% <br />
                BSE: 0
              </td>
              <td>
                NSE: 0.03503% (on premium) <br />
                BSE: 0.0325% (on premium)
              </td>
            </tr>

            {/* GST Row */}
            <tr>
              <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              <td>18% on (brokerage + SEBI charges + transaction charges)</td>
            </tr>

            {/* SEBI Charges Row */}
            <tr>
              <td>₹10 / crore</td>
              <td>₹10 / crore</td>
              <td>₹10 / crore</td>
              <td>₹10 / crore</td>
            </tr>

            {/* Stamp Charges Row */}
            <tr>
              <td>0.015% or ₹1500 / crore on buy side</td>
              <td>0.003% or ₹300 / crore on buy side</td>
              <td>0.002% or ₹200 / crore on buy side</td>
              <td>0.003% or ₹300 / crore on buy side</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Brokerage;
