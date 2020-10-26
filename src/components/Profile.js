import React, { Component } from 'react';

export class Profile extends Component {
  render() {
    return (
      <div className='p-5'>
        <h1 className='text-3xl text-teal-600 mb-3'>
          PROFILE & PROFESSIONAL EXPERIENCE
        </h1>
        <div className='mb-6'>
          After 8 years of playing online poker professionally, I am
          transitioning to the web development space. Although I greatly enjoy
          playing poker, I am seeking a different lifestyle and work/life
          balance. I've always been interested in technology and decided it was
          the right time in my career to make the transition. I am a self-taught
          developer, and I have relied heavily on tutorials and support from the
          community throughout my learning process. The diversity of the skills
          I have acquired so far are outlined below in the Projects section. I
          am looking forward to my first professional opportunity in the Cloud
          space.
        </div>

        <div>
          <h2 className='font-bold text-xl'>PROFESSIONAL POKER PLAYER</h2>
          <h3>June 2012 - Present</h3>
          <ul className='list-disc pl-5'>
            <li>
              Run PostgreSQL database queries of over 2 million hands to
              identify and improve inconsistencies in strategy utilizing a game
              theory optimal framework
            </li>
            <li>
              Continually learn new strategies using Solver Software and
              applying it to real-life situations
            </li>
            <li>
              Manage risk and grow bankroll through diversification of game type
              and stakes
            </li>
            <li>
              Developed a strong growth mindset by working with a mental game
              coach in order to consistently perform at a high level
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Profile;
