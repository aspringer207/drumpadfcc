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
      volume: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(event){
    event.preventDefault();
    let curr;
    switch(event.target.id){
      case "sticks":
        curr = document.getElementById("q");
        this.setState({current: curr})
        this.state.current.play();
      case "crash":
        curr = document.getElementById("w");
        this.setState({current: curr})
        curr.play();
      case "crash2":
        curr = document.getElementById("e");
        this.setState({current: curr})
        curr.play();
      case "hihatopen":
        curr = document.getElementById("a");
        this.setState({current: curr})
        curr.play();
      case "hihatclosed":
        curr = document.getElementById("s");
        this.setState({current: curr})
        curr.play();
      case "ride":
        curr = document.getElementById("d");
        this.setState({current: curr})
        curr.play();
      case "snare":
        curr = document.getElementById("z");
        this.setState({current: curr})
        curr.play();
      case "kick":
        curr = document.getElementById("x");
        this.setState({current: curr})
        curr.play();
      case "tom":
        curr = document.getElementById("c");
        this.setState({current: curr})
        curr.play();
    }
    
    
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
            <button id="snare" type="button" variant="warning">Z</button>
            <button id="kick" type="button" variant="danger">X</button>
            <button id="tom" type="button" variant="info">C</button>
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
