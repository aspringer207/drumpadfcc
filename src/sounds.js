import sticks from './sound/sticks.mp3';
import ride from './sound/ride.mp3';
import crash from './sound/crash.mp3';
import crash2 from './sound/crash2.mp3';
import snare from './sound/snare.mp3';
import hihatclosed from './sound/hihatclosed.mp3';
import hihatopen from './sound/hihatopen.mp3';
import kick from './sound/kick.mp3';
import tom from './sound/tom.mp3';
import tom2 from './sound/tom2.mp3';


const myClips = [
  sticks,
  ride,
  crash,
  crash2,
  snare,
  hihatclosed,
  hihatopen,
  kick,
  tom,
  tom2,
];
const clipObj = [
  {
    mySticks: {
      name: 'sticks',
      src: sticks,
      key: ['Q', 'q'],
    },
  },
  {
    myRide: {
      name: 'ride',
      src: ride,
      key: ['W', 'w'],
    },
  },
  {
    myCrash: {
      name: 'crash',
      src: crash,
      key: ['E', 'e'],
    },
  },
  {
    myCrash2: {
      name: 'crash2',
      src: crash2,
      key: ['A', 'a'],
    },
  },
  {
    myHiHatClosed: {
      name: 'hihatclosed',
      src: hihatclosed,
      key: ['S', 's'],
    },
  },
  {
    myHiHatOpen: {
      name: 'hihatopen',
      src: hihatopen,
      key: ['D', 'd'],
    },
  },
  {
    myKick: {
      name: 'kick',
      src: kick,
      key: ['Z', 'z'],
    },
  },
  {
    myTom: {
      name: 'tom',
      src: tom,
      key: ['X', 'x'],
    },
  },
  {
    myTom2: {
      name: 'tom2',
      src: tom2,
      key: ['C', 'c'],
    },
  },
];
export default clipObj;
