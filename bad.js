/**
 * Writing better functions
 *
 * Demo for slides: https://docs.google.com/presentation/d/1nV_rFnPB6LFDtssi-EWTnfcbJOUX0PpsBpsxualVey8/edit#slide=id.gc326cfddb2_0_0
 *
 * Code for duck dating app. We want to allow two ducks to talk to eachother and maybe go on a duck date.
 */

// Bad examples

const mgs = []; // Bad name
const ducks = [];

const snd = (duck1, duck2, msg) => {
  // Bad arg naming. Who's the recipient, who's the sender?
  
  // Doing too much. It's creating ducks too!
  if (!ducks.map(duck => duck.name).includes(duck1)) {
    ducks.push({
        name: duck1
    });
  }

  if (!ducks.map(duck => duck.name).includes(duck2)) {
    ducks.push({
        name: duck2
    });
  }

  // Affecting a global state. Messages are not scoped to the duck
  mgs.push({
      duck1,
      duck2,
      msg
  });
};

const rcv = (duck1, duck2) => {
    return mgs.filter(msg => msg.duck1 === duck1 && msg.duck2 === duck2).map(msg => msg.msg)
};

snd("Donald", "Daffie", "Hi cutie!")
snd("Daffie", "Donald", "Nice beak!")

const a = rcv("Donald", "Daffie")
a
const b = rcv("Daffie", "Donald")
b