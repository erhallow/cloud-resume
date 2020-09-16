import React from 'react';
import Header from './components/Header';
import Certs from './components/Certs';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './App.css';

function App() {
  return (
    <fragment>
      <div className='bg-hero'>
        <div className='grid grid-cols-9 md:grid lg:grid-cols-12 text-white'>
          <div className='col-start-1 md:col-start-2 lg:col-start-3 xl:col-start-4 col-end-10 md:col-end-9 lg:col-end-11 xl:col-end-10'>
            <Header />
            <Certs />
            <Skills />
            <Experience />
            <Projects />
            <Education />
          </div>
        </div>
      </div>
    </fragment>
  );
}

export default App;
