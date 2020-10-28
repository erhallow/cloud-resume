import React from 'react';

const Profile = ({ data }) => {
    return (
      <div className='p-5'>
        <h1 className='text-3xl text-teal-600 mb-3'>
          { data.intro.title }
        </h1>
        <div className='mb-6'>
          { data.intro.description }
        </div>
        <div>
          <h2 className='font-bold text-xl'>{data.experience.title}</h2>
          <h3>{data.experience.date}</h3>
          <ul className='list-disc pl-5'>    
            <div>
               { data.experience.skillset.map((item) => (<li>{item}</li>) )}
            </div>
          
          </ul>
        </div>
      </div>
    );
  };

export default Profile;
