import React, { Component } from 'react';

export class Education extends Component {
  render() {
    return (
      <div className='p-5 mb-10'>
        <span className='text-3xl text-teal-600'>EDUCATION</span>
        <div>
          <div className='pb-4'>
            <div className='font-bold text-lg'>MBA</div>
            <div>CONCENTRATION INFORMATION SYSTEMS</div>
            <div>Purdue University Northwest | December 2013</div>
          </div>
          <div className='mb-10'>
            <div className='font-bold text-lg'>B.S. BUSINESS MANAGEMENT</div>
            <div>CONCENTRATION FINANCE</div>
            <div>Purdue University | May 2012</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
