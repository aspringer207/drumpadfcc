import './style.scss';
import React from 'react';
import { Range } from './Range';
import clipObj from './sounds';


class App extends React.Component {
  constructor(props) {
    super()
    this.state = {
      clips: [],
      volume: 0
    }
  }
  clipList() {
    const list = []
    const myClips = clipObj;
    for (const clip of clipObj) {
      const el = `<media src="${clip.src}" id="${clip.key[0]}"></media>`
      list.push(clip)
    }
    
    this.setState({clips: [...list]})
  }


  render() {
    return (
      <div fluid id="wrapper" className="App">
        <div class="box">
          <div class="mr">
            <Range />
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
}

export default App;
