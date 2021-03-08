/**
 * Writing better functions
 *
 * Demo for slides: https://docs.google.com/presentation/d/1nV_rFnPB6LFDtssi-EWTnfcbJOUX0PpsBpsxualVey8/edit#slide=id.gc326cfddb2_0_0
 *
 * Code for duck dating app. We want to allow two ducks to talk to eachother and maybe go on a duck date.
 */
// Good examples

const createDuck = (name) => ({
  name,
  channels: [],
  getChannel(sender) {
    return this.channels.find((channel) => channel.sender === sender);
  },
  addChannel(sender) {
    this.channels.push(createChannel(sender));

    return this.getChannel(sender);
  },
});

const createChannel = (sender) => ({
  sender,
  messages: [],
  sendMessage(message) {
    this.messages.push(message);
  },
});

const sendQuack = (sender, recipient, message) => {
  const channel = recipient.getChannel(sender) || recipient.addChannel(sender);
  channel.sendMessage(message);
};

const getQuacks = (sender, recipient) => recipient.getChannel(sender).messages;

const donald = createDuck("Donald");
const daffie = createDuck("Daffie");

sendQuack(donald, daffie, "Hi cutie!");
sendQuack(daffie, donald, "Nice beak ;)");

daffieMsgs = getQuacks(donald, daffie);
donaldMsgs = getQuacks(daffie, donald);

daffieMsgs;
donaldMsgs;
