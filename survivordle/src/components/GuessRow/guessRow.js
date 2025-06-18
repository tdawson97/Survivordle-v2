import { React } from "react";
import classNames from "classnames";
import scores from "../../scores";

function GuessRow({ found, correct}) {

  const conditionalStylesName = classNames("Guess", {
    "green": found.full_name === correct.full_name,
    "none": found.full_name
  });

  const conditionalStylesSeason = classNames("Guess", {
    "green": found.season === correct.season,
    "yellow": found.season !== correct.season && found.season >= correct.season - 5 && found.season <= correct.season + 5,
    "none": found.season 
  });

  const conditionalStylesplace = classNames("Guess", {
    "green": found.place === correct.place,
    "yellow": found.place !== correct.place && found.place >= correct.place - 3 && found.place <= correct.place + 3,
    "none": found.place
  });

 /* const conditionalStylesVotesAgainst = classNames("Guess", {
    "green": found["votes against"] === correct["votes against"],
    "yellow": found["votes against"] !== correct["votes against"] && found["votes against"] >= correct["votes against"] - 3 && found["votes against"] <= correct["votes against"] + 3,
    "none": found["votes against"]
  });   */

  const conditionalStylesDaysPlayed = classNames("Guess", {
    "green": found.day === correct.day,
    "yellow": found.day !== correct.day && found.day >= correct.day - 5 && found.day <= correct.day + 5,
    "none": found.day
  });

return (
  <div>
    <tr>
  <td><div className={conditionalStylesName} id="category">
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
      </tr>
      </div>
)
};
export default GuessRow;