import castaways from "../../castaways";
import React, { useState } from "react";
import GuessDisplay from "../GuessDisplay/guessDisplay";
import scores from "../../scores";


const correct = castaways[Math.floor(Math.random() * castaways.length)];
const correctScore = scores.find(score => score.castaway_id === correct.castaway_id);

function Board() {
  
  const [guess, setGuess] = useState('');
  
  const [foundList, setFoundList] = useState([])
  const [suggestions, setSuggestions] = useState([]);
  const [feedback, setFeedback] = useState('');
  const [turn, setTurn] = useState(6);

  let names = [];
  for (let i=0; i<castaways.length; i++){
    let obj = castaways[i];
    let full_name = obj.full_name
    names.push(full_name)
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setGuess(value);
    if (value.length > 0) {
      const filteredSuggestions = names.filter(suggestion =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions.slice(0,10));
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (value) => {
    setGuess(value);
    setSuggestions([]);
  };
  
  const submitGuess = () => {
    setTurn(turn - 1)
    const search = castaways.find(obj => obj.full_name === guess);
        if (search) {
          
          
          setFoundList(foundList.concat(search))
          
          if (guess === correct.full_name) {
            let message = "You win!";
            setFeedback(message);
            document.getElementById("sugg").style.display = "none"
            document.getElementById("submit").style.display = "none"
            document.getElementById("input-text").style.display = "none"
            document.getElementById("correct-answer").style.display = "block"
          } else if (turn === 1){
            let message = "You lose!";
            setFeedback(message);
            document.getElementById("sugg").style.display = "none"
            document.getElementById("submit").style.display = "none"
            document.getElementById("input-text").style.display = "none"
            document.getElementById("correct-answer").style.display = "block"
          } 
        } else {
          let message = 'No castaway with that name found. Try again.';
          setFeedback(message);
        }
        setGuess("");
        setSuggestions([]);
  };

  const refreshPage = () => {
    window.location.reload();
  };

  return(

  <div className="board">
    <h1>Survivordle</h1>
    <h3>Guess the Survivor castaway in 6 tries or less!</h3>
    <p class="instructions">Clues are based on the castaways' first season.<br></br> Clues in yellow are within 3 of the correct answer</p>
    <GuessDisplay correct={ correct } feedback ={ feedback } turn = {turn} foundList = {foundList}/>
    
    <input
        id="input-text"
        type="text"
        title='Enter your guess'
        value={guess}
        onChange={handleInputChange}
        class = "input" />
    <button id="submit" class="submit" onClick={submitGuess}>Submit</button>
    <div id="sugg"> Start typing for a list of suggestions
        {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((suggestion, index) => (
            <li className="list-items"
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              // Additional props
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
    <div id="correct-answer"><p>Correct answer: 
      <td><div className="green" id="category-name">
      Name: <div class="found">{correct.full_name}</div>
      </div></td>

      <td><div className="green" id="category">
        Placement: <div class="found">{correct.place}</div>
      </div></td>

      <td><div className="green" id="category">
        Season: <div class="found">{correct.season}</div>
      </div></td>

      <td><div className="green" id="category">
        Days Played: <div class="found">{correct.day}</div>
      </div></td>

      <td><div className="green" id="category">
        Tribals Attended: <div class="found">{correctScore.n_tribals}</div>
      </div></td>

      <td><div className="green" id="category">
        Votes Received: <div class="found">{correctScore.n_votes_received}</div>
      </div></td></p>
    <p>Click <a class="refresh" onClick={refreshPage}>here</a> to play again.</p></div>
  </div>
  )
  };

export default Board;