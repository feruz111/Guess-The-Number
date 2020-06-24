let guesses = [];
let correctNumber = getRandomNumber();

window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);
    getRandomNumber();
}

function playGame(){
  let numberGuess = document.getElementById("number-guess").value;  
  displayResult(numberGuess);
  displayHistory(numberGuess)
}

function displayResult(numberGuess){
  if (numberGuess == correctNumber){
     showYouWon();
  }else if (numberGuess < correctNumber){
     showNumberBelow();
  }else if(numberGuess > correctNumber)
  showNumberAbove();

guesses.push(numberGuess)
}

function initGame(){
  getRandomNumber()
  document.getElementById("result").innerHTML = "";
  document.getElementById("history").innerHTML = "";
  correctNumber = getRandomNumber()
  guesses = [];
}

function getRandomNumber(){
  let randomNum = Math.floor((Math.random() * 100)+1);
  return randomNum;
}

function displayHistory() {
  let list = "<ul class='list-group'>";
  for(let i=0;i<guesses.length;i++)
  list += ` <li class='list-group-item'>You guessed ${guesses[i]}</li></ul>`
 
  document.getElementById("history").innerHTML = list;
}

function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

function showYouWon(){
  const text = "Awesome job, you got it!"
  let dialog = getDialog('won', text);

  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove(){
  const text = "Your guess is too high!"
  let dialog = getDialog('warning', text);

  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
  const text = "Your guess is too low!"
  let dialog = getDialog('warning', text);

  document.getElementById("result").innerHTML = dialog;
}

 