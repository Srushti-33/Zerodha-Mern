import React from 'react';
function Hero() {
    return (
      <section className="container-fluid" id="supportHero">
        <div className="p-5" id="supportWrapper">
          <h3>Support Portal</h3>
          <a href="">Track Details</a>
        </div>
        <div className="row p-5 m-3">
          <div className="col-6 p-5 ">
            <h1 className="fs-3">
              Search for an answer or browse help topics to create a ticket
            </h1>
            <input placeholder="Eg.how do I activate F&Q"></input>
            <br></br>
            <a href="">Track Account Opening </a>

            <a href="">Track segment Activation</a>
            <a href="">Intraday margins</a>
            <a href="">Kite user manual</a>
          </div>
          <div className="col-6 p-5">
            <h1 className="fs-3">Featured</h1>
            <ol>
              <li>
                <a href="">Current Takeovers and Delisting -January 2024</a>
              </li>
            
              <li>
                {" "}
                <a href="">Latest Intraday leverages -MIS & CO</a>
              </li>
            </ol>
          </div>
        </div>
      </section>
    );
}

export default Hero;