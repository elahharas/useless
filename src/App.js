import { useState } from 'react'
import './App.css'
import { GetRandomFunction } from './gifs/RandomGif';
import logo from './write-carpe-diem-16-06-2022__1_.gif';

function App() {
  const [inputValue, setInputValue] = useState('')
  const [showUseless, setShowUseless] = useState(false)


  let decoded = {
    a: 'c', b: 'd', c: 'e',
    d: 'f', e: 'g', f: 'h',
    g: 'i', h: 'j', i: 'k',
    j: 'l', k: 'm', l: 'n',
    m: 'o', n: 'p', o: 'q',
    p: 'r', q: 's', r: 't',
    s: 'u', t: 'v', u: 'x',
    v: 'y', w: 'z', x: 'å',
    y: 'ä', z: 'ö', å: 'a',
    ä: 'b', ö: 'c'
  }

  function charIsLetter(char) {
    if (typeof char !== 'string') {
      return false;
    }

    return char.toLowerCase() !== char.toUpperCase();
  }


  const onChangeInput = (char) => {
    if (charIsLetter(char)) setInputValue(inputValue + decoded[char])
    else if (' ') setInputValue(inputValue + ' ')
  }



  return (
    <div className="App" >
      <div className="Outer">

        <div className="Inner">
          {/* <ReactAudioPlayer
            src="public/music.mp3"
            autoPlay

          /> */}
          <img src={GetRandomFunction()} alt="" />

          <img src={logo} alt="" />
          {showUseless && <iframe src="https://giphy.com/embed/xT9IgFBdbnrx74PYPK" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>}
          <div className="Input_div">
            <input onChange={({ target }) => onChangeInput(target.value.slice(-1))} value={inputValue}></input>
            <button onClick={() => setInputValue('')}>CLEAR</button>
            <button>ENGAGE</button>
            <button>ENGAGE</button>

          </div>
        </div>
      </div>

    </div >
  );
}

export default App;
