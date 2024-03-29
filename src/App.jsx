import './style.scss';
import React from 'react';
import {useState} from 'react';
import { Form, Card } from 'react-bootstrap'
import checkKeys from './keymap';
import clipObj from './sounds';

  


  export default function App() {

    const [buttonKeys, setButtonKeys] = useState(()=> checkKeys);

    const [volume, setVolume] = useState(0.5);
    const handleChange = (event) => {
      event.preventDefault()
      setState({
        volume: event.target.value
      })
  
    }
    const handleClick = (event) => {
      const source = event.target.value;
      let med = document.getElementById(source);
      med.volume = state.volume;
      med.play();
    };

    


    return (
      <div id="wrapper" className="App">
        <div className="box">
          <div className="mr">
            <div class="slider">
              <Form.Label className="display-5">Volume
                <Form.Range id="volume" min="0" max="1" step=".05" onChange={(e)=>handleChange(e)} defaultValue={50} /></Form.Label>
            </div>
            <div id="clips" />
          </div>
        </div>
        <div className="box btn-box">
          <div className="mr">
            <button id="sticks" type="button" value="q" onClick={handleClick}>Q</button>
            <button id="crash" type="button" value="w" onClick={handleClick} variant="danger">W</button>
            <button id="crash2" type="button" value="e" onClick={handleClick} variant="success">E</button>
          </div>

          <div className="mr">
            <button id="hihatopen" value="a" onClick={handleClick} type="button" variant="info">A</button>
            <button id="hihatclosed" value="s" onClick={handleClick} type="button">S</button>
            <button id="ride" value="d" type="button" onClick={handleClick} variant="warning">D</button>
          </div>

          <div className="mr">
            <button id="snare" value="z" type="button" onClick={handleClick} variant="warning">Z</button>
            <button id="kick" value="x" type="button" onClick={handleClick} variant="danger">X</button>
            <button id="tom" value="c" type="button" onClick={handleClick} variant="info">C</button>
          </div>
        </div>
        <audio id="q" volume={state.volume} src="./src/sound/sticks.mp3"></audio>
        <audio id="w" volume={state.volume} src="./src/sound/crash.mp3"></audio>
        <audio id="e" volume={state.volume} src="./src/sound/crash2.mp3"></audio>
        <audio id="a" volume={state.volume} src="./src/sound/hihatopen.mp3"></audio>
        <audio id="s" volume={state.volume} src="./src/sound/hihatclosed.mp3"></audio>
        <audio id="d" volume={state.volume} src="./src/sound/ride.mp3"></audio>
        <audio id="z" volume={state.volume} src="./src/sound/snare.mp3"></audio>
        <audio id="x" volume={state.volume} src="./src/sound/kick.mp3"></audio>
        <audio id="c" volume={state.volume} src="./src/sound/tom.mp3"></audio>


      </div>

    );

    

    };
