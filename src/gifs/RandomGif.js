
import logo1 from './apricot.gif'
import logo2 from './carlwestin.gif'
import logo3 from './Caveira1.gif'
import logo4 from './design-passion.gif'
import logo5 from './funky-computer.gif'
import logo6 from './helicopter.gif'
import logo7 from './messenger.gif'
import logo8 from './nokia.gif'
import logo9 from './QuestionTicker1.gif'
import logo10 from './Cwindows.gif'


const gifs = [
   logo1,
   logo2,
   logo3,
   logo4,
   logo5,
   logo6,
   logo7,
   logo8,
   logo9,
   logo10,
]


export function GetRandomFunction() {
   return gifs[Math.floor(Math.random() * gifs.length)];
}
