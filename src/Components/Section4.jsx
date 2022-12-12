import React from 'react'
import bitcoin from '../Images/bitcoin-img.png'
import mobile from '../Images/mobile-img.png'
import piggybank from '../Images/rafiki.png'
import '../styles/section4.css'

const Section4 = () => {
  return (
    <div classname = 'section4'>
<div className='sec4-top'>
<h4>Buy and Sell your Cryptocurrency in 3 simple steps</h4>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est lectus faucibus et nunc id sollicitudin pretium nulla. Et nunc tempus mauris ullamcorper mauris, rhoncus sed magna. Eu consectetur nulla aliquam consectetur lectus. Rutrum feugiat et, tellus mattis donec et odio molestie amet.</p>

</div>
<div className='sell-div'>
<div className='left-div'>
<p className='no1'>1</p>
<div className="left-text">
    <h5>Create a free Account</h5>
    <p>Sign up for your free TradExpress Wallet on web, iOS, or Android devices and follow our easy process to set up your profile.</p>
</div>
<img src={mobile} alt="" />
</div>
</div>
<div className='sell-div'>
<img src={piggybank} alt="" />

<div className='deposit-div'>
<p className='no1'>2</p>
<div className="left-text">
    <h5>Create a free Account</h5>
    <p>Sign up for your free TradExpress Wallet on web, iOS, or Android devices and follow our easy process to set up your profile.</p>
</div>
</div>
</div>

<div className='sell-div'>
<div className='left-div'>
<p className='no1'>3</p>
<div className="left-text">
    <h5>Buy/ Sell Crypto</h5>
    <p>Sign up for your free TradExpress Wallet on web, iOS, or Android devices and follow our easy process to set up your profile.</p>
</div>
<img src={bitcoin} alt="" />
</div>
</div>
    </div>
  )
}

export default Section4