/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#the-excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = ["dragon", "elf", "pirate", "villain", "president", "martian"];
  let action = [
    "eat my",
    "destroyed my",
    "sold my",
    "took my",
    "conjured my",
    "stole my"
  ];
  let possetion = ["homework", "car", "soul", "brother", "power", "house"];
  let where = [
    "in the castle",
    "in Westeros",
    "the in white house",
    "in the black pearl",
    "in the moon",
    "the planet Titan"
  ];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possetionIndex = Math.floor(Math.random() * possetion.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    possetion[possetionIndex] +
    " " +
    where[whereIndex]
  );

  return "my brother broke my leg";
};
