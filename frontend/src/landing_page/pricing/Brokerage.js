import React from 'react';
function Brokerage() {
    return ( 
    <div className="container ">
      <div className="row p-5 mt-5 text-center border-top" >
        <div className="col-8 p-4">
        <a href='' style={{textDecoration:"none"}}>
            <h3 className='fs-5'>Brokerage calculator</h3></a>
            <ul style={{textAlign:"left",lineHeight:"2.5",fontSize:"12px"}}className='text-muted'>
                <li>Call & Trade and RMS auto-squareoff:Additional charges of 50 rupees +GST per order.</li>
                <li>Digital contracts note will be sent via e-mail</li>
                <li>Physical copies of contracts notes, if required, shall be charged 20 ruppes per contract note. Courier charges apply.</li>
                <li>For NRI account (non-PIS), 0.5% or 100 rupees executed oredr for equity (whichever is lower)</li>
                <li>For NRI account (PIS), 0.5% or 200 ruppes</li>
                <li>If the account is in debit balance, any order will be placed charges 40 ruppes per executed order instead of 20 rupees per executed order</li>
            </ul>
        </div>
        <div className="col-4 p-4">
        <a href=''style={{textDecoration:"none"}}><h3 className='fs-5'>List of Charges</h3></a>    
            </div>         
      </div>
    </div>
     );
}

export default Brokerage;