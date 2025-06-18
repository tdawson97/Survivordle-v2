import { React } from "react";

import GuessRow from "../GuessRow/guessRow";


function GuessDisplay({correct, feedback, turn, foundList}) {

  

  return (
    <div>
    <div class="guess">
    <table>
        
        <tbody>
          {foundList.map((found, i) => <GuessRow found={found} correct={correct} key={i} />)}
        </tbody>
    </table>
      
    </div>
    <div class="turn">Guesses Left: {turn}</div>
    <div class="feedback">{feedback}</div>
    </div>
  )
};

export default GuessDisplay;