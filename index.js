var vines = [
  "Look at all those chickens!",
  "Stop! I coulda dropped my croissant",
  "Can I get a waffle",
  "Two bros chilli in a hot tub",
  "Look at this graph",
  "And they were roomates",
  "Two shots of vodka",
  "LeBroN jAmEs",
  "Lesbian? I thought you were American",
  "Hi welcome to Chilis",
  "Girl you're thicer than a bowl of oatmeal",
  "I wanna be a cowboy baaaby",
  "Happy Birthday Raven!!!",
  "I'm washin me and ma clothes",
  "So you're just gonna bring a birthday gift to my birthday party on my birthday with a birthday gift?",
  "So I was sitting there with barbeque sauce",
  "You're not my Dad!",
  "Oovoo Javer",
  "Anything for you Beyonce",
  "Kermit the Frog: Shawty I don't mind",
  "Why you always lyin?",
  "Is that a weed? I'm calling the police",
  "What are thooose",
  "Squidward hit the dab",
  "Iridocyclitis",
  "Chillin in Cedar Rapids",
  "You can't sit with us. Actually Megan I can't sit anywhere because I have hemmeroids",
  "Road work ahead? Uh yeah, I sure hope it does",
  "Come get y'all juice",
];

var button = $('.vinebtn');
var clear = $('.clearbtn');
// var inspo = document.querySelector('.inspo');

button.on("click", appendVine);
button.on("click", removeVine);

function appendVine() {
  var random = Math.floor(Math.random() * vines.length);
  var vine = $('.text');
  vine.text(`${vines[random]}`);

}

  // appendVine() {
  //   console.log();
  // }
  // inspo??


function removeVine() {
  // insop??
}
