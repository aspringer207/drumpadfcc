import './style.scss';
import React from 'react';
import { Range } from './Range';


function App() {
  return (
    <div fluid id="wrapper" className="App">
      <div class="box">
        <div class="mr">
          <Range></Range>
          <SourceList />
        </div>
      </div>
      <div className="box btn-box">
        <div className="mr" fluid>
          <button>Q</button>
          <button variant="danger">W</button>
          <button variant="success">E</button>
        </div>

        <div className="mr" fluid>
          <button variant="info">A</button>
          <button>S</button>
          <button variant="warning">D</button>
        </div>

        <div className="mr" fluid>
          <button variant="warning">Z</button>
          <button variant="danger">X</button>
          <button variant="info">C</button>
        </div>
      </div>
      <audio></audio>

    </div>
    
  );
}

export default App;
