import React from 'react';

function Footer() {
    return (
        <div className='container border-top mt-5'>
            <div className='row mt-5'>
                {/* Logo Section */}
                <div className='col-md-3 text-center text-md-start'>
                    <img src='media/images/logo.svg' alt="Logo" style={{ width: "50%" }} />
                    <p className='mt-3'>© 2010 - 2024, Zerodha Broking Ltd. All rights reserved.</p>
                </div>

                {/* Company Links */}
                <div className='col-md-3'>
                    <p className='fw-bold'>Company</p>
                    <ul className='list-unstyled'>
                        <li><a href='#' className="text-decoration-none text-muted">About</a></li>
                        <li><a href='#' className="text-decoration-none text-muted">Products</a></li>
                        <li><a href='#' className="text-decoration-none text-muted">Pricing</a></li>
                        <li><a href='#' className="text-decoration-none text-muted">Referral programme</a></li>
                        <li><a href='#' className="text-decoration-none text-muted">Careers</a></li>
                        <li><a href='#' className="text-decoration-none text-muted">Zerodha.tech</a></li>
                        <li><a href='#' className="text-decoration-none text-muted">Press & media</a></li>
                        <li><a href='#' className="text-decoration-none text-muted">Zerodha Cares (CSR)</a></li>
                    </ul>
                </div>

                {/* Support Links */}
                <div className='col-md-3'>
                    <p className='fw-bold'>Support</p>
                    <ul className='list-unstyled'>
                        <li><a href='#' className="text-decoration-none text-muted">Contact us</a></li>
                        <li><a href='#' className="text-decoration-none text-muted">Support portal</a></li>
                        <li><a href='#' className="text-decoration-none text-muted">Z-Connect blog</a></li>
                        <li><a href='#' className="text-decoration-none text-muted">List of charges</a></li>
                        <li><a href='#' className="text-decoration-none text-muted">Downloads & resources</a></li>
                        <li><a href='#' className="text-decoration-none text-muted">Videos</a></li>
                        <li><a href='#' className="text-decoration-none text-muted">Market overview</a></li>
                        <li><a href='#' className="text-decoration-none text-muted">How to file a complaint?</a></li>
                        <li><a href='#' className="text-decoration-none text-muted">Status of your complaints</a></li>
                    </ul>
                </div>

                {/* Account Links */}
                <div className='col-md-3'>
                    <p className='fw-bold'>Account</p>
                    <ul className='list-unstyled'>
                        <li><a href='#' className="text-decoration-none text-muted">Open An Account</a></li>
                        <li><a href='#' className="text-decoration-none text-muted">Fund transfer</a></li>
                    </ul>
                </div>
            </div>

            {/* Disclaimer and Info Section */}
            <div className='mt-5 text-muted' style={{ fontSize: "0.875rem" }}>
                <p>
                    Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href="mailto:complaints@zerodha.com" className="text-decoration-none text-muted">complaints@zerodha.com</a>, for DP related to <a href="mailto:dp@zerodha.com" className="text-decoration-none text-muted">dp@zerodha.com</a>.
                </p>
                <p>
                    Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF.
                </p>
                <p>
                    Investments in securities market are subject to market risks; read all the related documents carefully before investing.
                </p>
                <p>
                    Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker/depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge.
                </p>
                <p>
                    <strong>Prevent unauthorized transactions in your account:</strong> Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. KYC is one-time exercise while dealing in securities markets.
                </p>
            </div>
        </div>
    );
}

export default Footer;
