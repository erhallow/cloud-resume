import React, { Component } from 'react';

export class Education extends Component {
  render() {
    return (
      <div className='p-5'>
        <span className='text-3xl text-teal-600'>EDUCATION</span>
        <div>
          <div className='pb-4 pt-3'>
            <div className='font-bold text-xl'>MBA</div>
            <div>CONCENTRATION INFORMATION SYSTEMS</div>
            <div>Purdue University Northwest | December 2013</div>
          </div>
          <div>
            <div className='font-bold text-xl'>B.S. BUSINESS MANAGEMENT</div>
            <div>CONCENTRATION FINANCE</div>
            <div>Purdue University | May 2012</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
