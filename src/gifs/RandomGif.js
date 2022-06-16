const gifs = [
   './apricot.gif',
   './carlwestin.gif',
   './Caveira1.gif',
   './design-passion.gif',
   './funky-computer.gif',
   './helicopter.gif',
   './messenger.gif',
   './nokia.gif',
   './QuestionTicker1.gif',
   './Cwindows.gif'
];

function GetRandomFunction() {
   return gifs[Math.floor(Math.random()*gifs.length)];
}
