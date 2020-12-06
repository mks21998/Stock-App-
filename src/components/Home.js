import React from 'react'
import google_logo from '../image/google-logo.png'


export default function Home() {
    return (
        <div>
            <h3>Popular Stocks</h3>
                <div className="heading-stock">
                    <p>COMPANY</p>
                    <p>MARKET PRICE</p>
            </div>
            <div className='row'>
                <div className='col-6 '>
                  <img src={google_logo} alt='google logo' height="40px"/>
                  <small>Google</small>
                </div>
                <div className='col-6 text-right'>
                    <p>$2500 <small className="usd">USD</small></p>
                    <small>+$250 USD (2.33%)</small>
                </div>
            </div>
        </div>
    )
}
