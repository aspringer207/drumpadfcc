import './style.scss';
import React from 'react';
import {useState} from 'react';
import { Form, Card } from 'react-bootstrap'


  const relevantKeys = (function checkKeys() {
    const keymap = [81, 87, 69, 65, 83, 68, 90, 88, 67];
    document.addEventListener ("keydown", (event)=> (
        keymap.includes(event.code)
        ?
        document.addEventListener(
            'keydown',
            (key) =>{
             key.code === 81
            ? document.getElementById('q').play()
            : key.code === 87
            ? document.getElementById('w').play()
            : key.code === 69
            ? document.getElementById('e').play()
            : key.code === 65
            ? document.getElementById('a').play()
            : key.code === 83
            ? document.getElementById('s').play()
            : key.code === 68
            ? document.getElementById('d').play()
            : key.code === 90
            ? document.getElementById('z').play()
            : key.code === 88
            ? document.getElementById('x').play()
            : key.code === 67
            ? document.getElementById('c').play()
            : false;
        }
        ) 
        : false
        )
    )


    
})


  export default function App() {

    const [buttonKeys, setButtonKeys] = useState(()=> checkKeys);

    const [volume, setVolume] = useState(0.5);
    const handleChange = (event) => {
      event.preventDefault()
      setVolume(event.target.value)
      const allVolumeObs = document.querySelectorAll("audio.volume")
      console.log(allVolumeObs)

  
    }

    const handleClick = (event) => {
      const source = event.target.value;
      let med = document.getElementById(source);
      med.play();
    };

    


    return (
      <div id="wrapper" className="App">
        <div className="box">
          <div className="mr">
            <div class="slider">
              <Form.Label className="display-5">Volume
                <Form.Range id="volume" min="0" max="1" step=".05" onChange={handleChange} defaultValue={50} /></Form.Label>
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
        <audio id="q" volume={setVolume} src="./src/sound/sticks.mp3"></audio>
        <audio id="w" volume={setVolume} src="./src/sound/crash.mp3"></audio>
        <audio id="e" volume={setVolume} src="./src/sound/crash2.mp3"></audio>
        <audio id="a" volume={setVolume} src="./src/sound/hihatopen.mp3"></audio>
        <audio id="s" volume={setVolume} src="./src/sound/hihatclosed.mp3"></audio>
        <audio id="d" volume={setVolume} src="./src/sound/ride.mp3"></audio>
        <audio id="z" volume={setVolume} src="./src/sound/snare.mp3"></audio>
        <audio id="x" volume={setVolume} src="./src/sound/kick.mp3"></audio>
        <audio id="c" volume={setVolume} src="./src/sound/tom.mp3"></audio>


      </div>

    );

    

    };
