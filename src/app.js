/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  for (let whoCounter = 0; whoCounter < who.length; whoCounter++) {
    let randomWho = Math.floor(Math.random() * who.length);

    for (
      let actionCounter = 0;
      actionCounter < action.length;
      actionCounter++
    ) {
      let randomAction = Math.floor(Math.random() * action.length);

      for (let whatCounter = 0; whatCounter < what.length; whatCounter++) {
        let randomWhat = Math.floor(Math.random() * what.length);

        for (let whenCounter = 0; whenCounter < when.length; whenCounter++) {
          let randomWhen = Math.floor(Math.random() * when.length);

          console.log(
            who[randomWho] +
              action[randomAction] +
              what[randomWhat] +
              when[randomWhen]
          );
        }
      }
    }
  }
  return;
};
