import React from "react";

function LandingPage() {
  return (
    <section>
      <div className='landingpage'>
        <div className='landingpage__overlay'>
          <div className='landingpage__title'>
            <h2>You got the travel plans, we got the travel vans.</h2>
          </div>
          <div className='landingpage__decription'>
            <p>
              Add adventure to your life by joining the #vanlife movement. Rent
              the perfect van to make your perfect road trip.
            </p>
          </div>
          <div className='landingpage__btn'>
            <button className='landingpage__btn-btn'>Find your van</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
