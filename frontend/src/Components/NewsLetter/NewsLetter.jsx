import React from 'react'
import "./NewsLetter.css"
const NewsLetter = () => {
  return (
    <div className="Newsletter">
        <h1>Get Exclusive Offers on Your Email</h1>
        <hr/>
        <p>Subscribe to Our NewsLetter and Stay Updated</p>
        <div className='news-letter-input'>
            <input type="email" placeholder="Enter Your Mail"/>
        </div>
        <button>Subscribe</button>
    </div>
  )
}

export default NewsLetter