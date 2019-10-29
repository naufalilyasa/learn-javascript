// Declare variable to store references custom-name id, randomize class, and story class
let customName = document.querySelector("#custom-name");
let randomize = document.querySelector(".randomize");
let story = document.querySelector(".story");

// Function to takes an array, and returns one of the items stored inside the array at random
function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Variable to store a paragraph
let storyText =
  "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:,\
   they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was\
   not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

// The first array to store set of three strings
let insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];

// The first array to store set of three strings
let insertY = ["the soup kitchen", "Disneyland", "the White House"];

// The first array to store set of three strings
let insertZ = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away"
];

// Event click to randomize story
randomize.addEventListener("click", result);

function result() {
  let newStory = storyText;
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);
  newStory = newStory.replace(/:insertx:/g, xItem);
  // newStory = newStory.replace(":insertx:", xItem);
  newStory = newStory.replace(":inserty:", yItem);
  newStory = newStory.replace(":insertz:", zItem);
  // newStory = newStory.replace(":insertx:", xItem);

  // Condition to check that input custom name is not empty then replace to custom name
  if (customName.value !== "") {
    let name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  // Condition to check that uk is checked and change weight and temperature
  if (document.querySelector("#uk").checked) {
    let weight = Math.round(300 / 14);
    let temperature = Math.round((94 - 32) * (5 / 9));
    newStory = newStory.replace("300 pounds", weight + " stone");
    newStory = newStory.replace("94 fahrenheit", temperature + " centigrade");
  }

  story.textContent = newStory;
  story.style.visibility = "visible";
}
