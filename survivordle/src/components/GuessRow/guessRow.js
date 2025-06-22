import { React } from "react";
import classNames from "classnames";
import scores from "../../scores";

function GuessRow({ found, correct}) {

  const foundScore = scores.find(score => score.castaway_id === found.castaway_id)
  const correctScore = scores.find(score => score.castaway_id === correct.castaway_id)

  const conditionalStylesName = classNames("Guess", {
    "green": found.full_name === correct.full_name,
    "none": found.full_name
  });

  const conditionalStylesSeason = classNames("Guess", {
    "green": found.season === correct.season,
    "yellow": found.season !== correct.season && found.season >= correct.season - 3 && found.season <= correct.season + 3,
    "none": found.season 
  });

  const conditionalStylesplace = classNames("Guess", {
    "green": found.place === correct.place,
    "yellow": found.place !== correct.place && found.place >= correct.place - 3 && found.place <= correct.place + 3,
    "none": found.place
  });

  const conditionalStylesVotesAgainst = classNames("Guess", {
    "green": foundScore.n_votes_received === correctScore.n_votes_received,
    "yellow": foundScore.n_votes_received !== correctScore.n_votes_received && foundScore.n_votes_received >= correctScore.n_votes_received - 3 && foundScore.n_votes_received <= correctScore.n_votes_received + 3,
    "none": foundScore.n_votes_received
  });

  const conditionalStylesDaysPlayed = classNames("Guess", {
    "green": found.day === correct.day,
    "yellow": found.day !== correct.day && found.day >= correct.day - 3 && found.day <= correct.day + 3,
    "none": found.day
  });

  const conditionalStylesTribals = classNames("Guess", {
    "green": foundScore.n_tribals === correctScore.n_tribals,
    "yellow": foundScore.n_tribals !== correctScore.n_tribals && foundScore.n_tribals >= correctScore.n_tribals - 3 && foundScore.n_tribals <= correctScore.n_tribals + 3,
    "none": foundScore.n_tribals
  });

return (
  <div>
    <tr>
  <td><div className={conditionalStylesName} id="category-name">
      Name: <div class="found">{found.full_name}</div>
      </div></td>

      <td><div className={conditionalStylesplace} id="category">
        Placement: <div class="found">{found.place}</div>
      </div></td>

      <td><div className={conditionalStylesSeason} id="category">
        Season: <div class="found">{found.season}</div>
      </div></td>

      <td><div className={conditionalStylesDaysPlayed} id="category">
        Days Played: <div class="found">{found.day}</div>
      </div></td>

      <td><div className={conditionalStylesTribals} id="category">
        Tribals Attended: <div class="found">{foundScore.n_tribals}</div>
      </div></td>

      <td><div className={conditionalStylesVotesAgainst} id="category">
        Votes Received: <div class="found">{foundScore.n_votes_received}</div>
      </div></td>
      </tr>
      </div>
)
};
export default GuessRow;