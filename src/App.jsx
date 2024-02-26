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
    const test = this.state.clips.filter((x)=> this.state.clips.key.includes(x))
    console.log(test)
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
            <button onClick={('click', ()=> this.handleClick)}>Q</button>
            <button variant="danger">W</button>
            <button variant="success">E</button>
          </div>

          <div className="mr">
            <button variant="info">A</button>
            <button>S</button>
            <button variant="warning">D</button>
          </div>

          <div className="mr">
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
