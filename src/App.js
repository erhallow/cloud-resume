import React, { Component } from 'react';
import Header from './components/Header';
import Certs from './components/Certs';
import Profile from './components/Profile';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Interests from './components/Interests';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    visitCount: [],
  };

  async componentDidMount() {
    const res = await axios.get(
      'https://dst2vfdbm6.execute-api.us-east-2.amazonaws.com/Prod/count'
    );

    this.setState({ visitCount: res.data.Attributes.visitNum });
  }

  render() {
    return (
      <div>
        <div className='bg-hero'>
          <div className='grid grid-cols-9 md:grid lg:grid-cols-12 text-white'>
            <div className='col-start-1 md:col-start-2 lg:col-start-3 xl:col-start-4 col-end-10 md:col-end-9 lg:col-end-11 xl:col-end-10'>
              <Header visitCount={this.state.visitCount} />
              <Certs />
              <Skills />
              <Profile />
              <Projects />
              <Education />
              <Interests />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
