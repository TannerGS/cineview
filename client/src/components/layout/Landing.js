import React from 'react';
import Search from './Search';

const Landing = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <Search />
        </div>
      </div>
    </section>
  );
};

export default Landing;
