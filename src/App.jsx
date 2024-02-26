import './style.scss';
import React from 'react';
import { Range } from './Range';
import clipObj from './sounds';

function clipList(){
  const list = []
  const myClips = clipObj;
  for (const clip of clipObj) {
    const el = `<media src="${clip.src}" id="${clip.key[0]}"></media>`
    list.push(clip)
  }
  
  return list
}
class App extends React.Component {
  constructor(props) {
    super()
    this.state = {
      clips: ()=>clipList(),
      volume: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(event){
    const btn = event.target.id;
    console.log(event.target)
    
    
  }
  


  render() {
    return (
      <div id="wrapper" className="App">
        <div className="box">
          <div className="mr">
            <Range />
            <div id="clips" />
          </div>
        </div>
        <div className="box btn-box">
          <div className="mr">
            <button id="q" type="button" onClick={this.handleClick}>Q</button>
            <button id="w" type="button" variant="danger">W</button>
            <button id="e" type="button" variant="success">E</button>
          </div>

          <div className="mr">
            <button id="a" type="button" variant="info">A</button>
            <button id="s" type="button">S</button>
            <button id="d" type="button" variant="warning">D</button>
          </div>

          <div className="mr">
            <button id="z" type="button" variant="warning">Z</button>
            <button id="x" type="button" variant="danger">X</button>
            <button id="c" type="button" variant="info">C</button>
          </div>
        </div>
        <data>
          <audio id="q" src="./src/sound/sticks.mp3"></audio>
          <audio id="w" src="./src/sound/crash.mp3"></audio>
          <audio id="e" src="./src/sound/crash2.mp3"></audio>
          <audio id="a" src="./src/sound/hihatopen.mp3"></audio>
          <audio id="s" src="./src/sound/hihatclosed.mp3"></audio>
          <audio id="d" src="./src/sound/ride.mp3"></audio>
          <audio id="z" src="./src/sound/snare.mp3"></audio>
          <audio id="x" src="./src/sound/kick.mp3"></audio>
          <audio id="c" src="./src/sound/tom.mp3"></audio>

        </data>

      </div>

    );
  }
}

export default App;
