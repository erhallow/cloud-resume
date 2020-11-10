import React from 'react';

const Profile = ({ data }) => {
    return (
      <div className='p-5'>
        <h1 className='text-3xl text-teal-600 mb-3'>
          { data.intro.title }
        </h1>
        <div className='mb-4'>{ data.intro.description }</div>
        <div className='mb-4'>
          <h2 className='font-bold text-xl'>{data.experience.title}</h2>
          <h3>{data.experience.date}</h3>
          <ul className='list-disc pl-5'>    
            <div>
               { data.experience.skillset.map((item) => (<li key={item}>{item}</li>) )}
            </div>
          </ul>
        </div>
        <div>
          <div className='mb-4'>
            <h2 className='font-bold text-xl'>{ data.podcast.title }</h2>
            <span>{ data.podcast.description }</span>
          </div>
          <div className='youtube'>
          <iframe width="560" height="315" title="bowtie certified" src="https://www.youtube.com/embed/d7cFtkl5iCU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    );
  };

export default Profile;
