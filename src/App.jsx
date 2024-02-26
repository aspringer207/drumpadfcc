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
      current: null,
      clips: ()=>clipList(),
      volume: 50
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event){

  }
  handleClick(event){
    event.preventDefault();
    let myInner = event.target.id.textContent;
    console.log(myInner)
    
    
    
    
  }
  


  render() {
    return (
      <div id="wrapper" className="App">
        <div className="box">
          <div className="mr">
            <Range onChange={this.handleChange} />
            <div id="clips" />
          </div>
        </div>
        <div className="box btn-box">
          <div className="mr">
            <button id="sticks" type="button" onClick={this.handleClick}>Q</button>
            <button id="crash" type="button" onClick={this.handleClick} variant="danger">W</button>
            <button id="crash2" type="button" onClick={this.handleClick} variant="success">E</button>
          </div>

          <div className="mr">
            <button id="hihatopen" onClick={this.handleClick} type="button" variant="info">A</button>
            <button id="hihatclosed" onClick={this.handleClick} type="button">S</button>
            <button id="ride" type="button" onClick={this.handleClick} variant="warning">D</button>
          </div>

          <div className="mr">
            <button id="snare" type="button"  onClick={this.handleClick} variant="warning">Z</button>
            <button id="kick" type="button"  onClick={this.handleClick} variant="danger">X</button>
            <button id="tom" type="button"  onClick={this.handleClick} variant="info">C</button>
          </div>
        </div>
        <data>
          <audio id="q" volume={this.state.volume} src="./src/sound/sticks.mp3"></audio>
          <audio id="w" volume={this.state.volume} src="./src/sound/crash.mp3"></audio>
          <audio id="e" volume={this.state.volume} src="./src/sound/crash2.mp3"></audio>
          <audio id="a" volume={this.state.volume} src="./src/sound/hihatopen.mp3"></audio>
          <audio id="s" volume={this.state.volume} src="./src/sound/hihatclosed.mp3"></audio>
          <audio id="d" volume={this.state.volume} src="./src/sound/ride.mp3"></audio>
          <audio id="z" volume={this.state.volume} src="./src/sound/snare.mp3"></audio>
          <audio id="x" volume={this.state.volume} src="./src/sound/kick.mp3"></audio>
          <audio id="c" volume={this.state.volume} src="./src/sound/tom.mp3"></audio>

        </data>

      </div>

    );
  }
}

export default App;
