import React, { Component } from 'react';
import ccp from './aws-ccp.png';
import saa from './aws-saa.png';

export class Certs extends Component {
  render() {
    return (
      <div>
        <h1 className='text-3xl text-teal-600 p-5'>CERTIFICATIONS</h1>

        <div className='flex pl-4 pr-5'>
          <div className='h-32 w-32 container'>
            <img className='cert-icon' src={ccp} alt='saa'></img>
            <div className='overlay'>
              <div className='text'>
                <a
                  href='https://www.youracclaim.com/badges/33bab85d-19ce-4797-88c5-6d4084602a2f'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Verify
                </a>
              </div>
            </div>
          </div>

          <div className='flex-1'>
            <div className='ml-3 mt-6'>
              <div>CLOUD PRACTICIONER</div>
              <div>August 2020</div>
            </div>
          </div>
        </div>

        <div className='flex pl-4 pt-4'>
          <div className='h-32 w-32 container'>
            <img className='cert-icon' src={saa} alt='saa'></img>
            <div className='overlay'>
              <div className='text'>
                <a
                  href='https://www.youracclaim.com/badges/3a3d6350-223f-4721-82e6-e40a72c2f776'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-mono'
                >
                  Verify
                </a>
              </div>
            </div>
          </div>

          <div className='flex-1'>
            <div className='ml-3 mt-6'>
              <div>SOLUTIONS ARCHITECT ASSOCIATE</div>
              <div>August 2020</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Certs;
