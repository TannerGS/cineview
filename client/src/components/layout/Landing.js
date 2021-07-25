import React from 'react';
import Slider from './Slider';

const Landing = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default Landing;
