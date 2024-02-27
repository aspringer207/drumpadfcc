import './style.scss';
import React from 'react';
import { Form, Card } from 'react-bootstrap'
import clipObj from './sounds';

function clipList() {
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
    super(props)
    this.state = {
      current: null,
      clips: () => clipList(),
      volume: 0.50,
      keymap: 
        {"q": 81,
        "w": 87,
        "e": 69, 
        "a":65, 
        "s":83, 
        "d":68, 
        "z":90, 
        "x":88,
        "c":67, }
    
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }
  ComponentDidMount(state){
    const keym = this.state.keymap;
    window.addEventListener('keypress', function(event){
      if (keym.includes(event.key)){
        event.preventDefault();
        const keystring = String(event.key)
        let current = document.getElementById(keystring);
        current.src.play()
      }
      else return
    }
      )
  }
  handleChange(event) {
    event.preventDefault()
    this.setState({
      volume: event.target.value
    })

  }
  handleClick(event) {
    const source = event.target.value;
    const med = document.getElementById(source);
    med.volume = this.state.volume;
    med.play();
  }



  render() {
    return (
      <div id="wrapper" className="App">
        <div className="box">
          <div className="mr">
            <div class="slider">
              <Form.Label className="display-5">Volume
                <Form.Range id="volume" min="0" max="1" step=".05" onChange={this.handleChange} defaultValue={50} /></Form.Label>
            </div>
            <div id="clips" />
          </div>
        </div>
        <div className="box btn-box">
          <div className="mr">
            <button id="sticks" type="button" value="q" onClick={this.handleClick}>Q</button>
            <button id="crash" type="button" value="w" onClick={this.handleClick} variant="danger">W</button>
            <button id="crash2" type="button" value="e" onClick={this.handleClick} variant="success">E</button>
          </div>

          <div className="mr">
            <button id="hihatopen" value="a" onClick={this.handleClick} type="button" variant="info">A</button>
            <button id="hihatclosed" value="s" onClick={this.handleClick} type="button">S</button>
            <button id="ride" value="d" type="button" onClick={this.handleClick} variant="warning">D</button>
          </div>

          <div className="mr">
            <button id="snare" value="z" type="button" onClick={this.handleClick} variant="warning">Z</button>
            <button id="kick" value="x" type="button" onClick={this.handleClick} variant="danger">X</button>
            <button id="tom" value="c" type="button" onClick={this.handleClick} variant="info">C</button>
          </div>
        </div>
          <audio id="q" volume={this.state.volume} src="./src/sound/sticks.mp3"></audio>
          <audio id="w" volume={this.state.volume} src="./src/sound/crash.mp3"></audio>
          <audio id="e" volume={this.state.volume} src="./src/sound/crash2.mp3"></audio>
          <audio id="a" volume={this.state.volume} src="./src/sound/hihatopen.mp3"></audio>
          <audio id="s" volume={this.state.volume} src="./src/sound/hihatclosed.mp3"></audio>
          <audio id="d" volume={this.state.volume} src="./src/sound/ride.mp3"></audio>
          <audio id="z" volume={this.state.volume} src="./src/sound/snare.mp3"></audio>
          <audio id="x" volume={this.state.volume} src="./src/sound/kick.mp3"></audio>
          <audio id="c" volume={this.state.volume} src="./src/sound/tom.mp3"></audio>


      </div>

    );
  }
}

export default App;
