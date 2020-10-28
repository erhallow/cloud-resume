import React from 'react';

const Interests = ({ data }) => {
    return (
      <div className='p-5 pt-2 pb-10'>
        <div className='text-3xl text-teal-600 pb-3'>{data.title}</div>
        <div className='text-xl'>
          {data.list}
        </div>
      </div>
    );
}

export default Interests;
