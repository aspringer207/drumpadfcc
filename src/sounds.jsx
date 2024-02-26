

const myClips = [
  sticks,
  ride,
  crash,
  crash2,
  hihatclosed,
  hihatopen,
  kick,
  midtom,
  hitom,
];
const myClipObject = [
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
    myMidTom: {
      name: 'midtom',
      src: midtom,
      key: ['X', 'x'],
    },
  },
  {
    myHiTom: {
      name: 'hitom',
      src: hitom,
      key: ['C', 'c'],
    },
  },
];

function SourceList() {
  return <ul>{
    myClips
    .map((x) => `<media src=${x.src}></media>`)}</ul>;
}
export default SourceList;
