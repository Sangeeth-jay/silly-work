import { useState } from "react";
import './App.css';

const phrases = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Pookie please",
  "Don't do this to me",
  "I'm gonn cry...",
  "You're breaking my heart"
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed,setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick(){
    setNoCount(noCount + 1);
  }

  function getNoButton(){
    return phrases[Math.min(noCount, phrases.length -1)];
  }

  return (
    <div className="valentine-container">
        {yesPressed ? (
          <>
            <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"></img>
            <div className="text">Yay!!!</div>
          </>
        ):(
          <>
            <img src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"></img>

            <div>Will you be my valentine?</div>
            <div>
              <button
                className="yesButton"
                style={{ fontSize: yesButtonSize , background: "green"}}
                onClick={()=> setYesPressed(true)}
              >
                Yes
              </button>
              <button
                className="noButton"
                style={{background: "red"}}
                onClick={handleNoClick}
              >
                {getNoButton()}
              </button>
            </div>
          </>
        )}
    </div>
  );
}

export default App;
