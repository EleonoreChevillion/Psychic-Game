
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    var wins = 0;
    var numberOfGuess = 10;

    var directionsText = document.getElementById("directions-text");
    var userChoiceText = document.getElementById("userchoice-text");
    var computerChoiceText = document.getElementById("computerchoice-text");
    var winsText = document.getElementById("wins-text");
    var numberOfGuessText = document.getElementById("numberOfGuess-text");

    document.onkeyup = function(event) {

      var userGuess = event.key;

      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
        if (userGuess === computerGuess) {
          wins++;
        } else {
          numberOfGuess--;
        } 
        if (numberOfGuess < 0){
          document.write ("LOSER")
        }

        directionsText.textContent = "";

        userChoiceText.textContent = "You chose: " + userGuess;
        computerChoiceText.textContent = "The computer chose: " + computerGuess;
        winsText.textContent = "wins: " + wins;
        numberOfGuessText.textContent = "Number of guesses left: " + numberOfGuess;
      
    };

//     let word1 = ["G", "I", "R", "A", "F", "F", "E"]

// //choose word randomly
// let randNum = Math.floor(Math.random() * celestial_bodies.length);
// let chosenWord = celestial_bodies[randNum];
// let underScore = [];
// let rightAnswer = [];
// let wrongAnswer = [];


// //dom manipulation
// let tempUnderScore = document.getElementById('underScore');
// let tempRightAnswer = document.getElementById('rightAnswer');
// let tempWrongAnswer = document.getElementById('wrongAnswer');



// //create underscore based on the word length

// let generateUnderscore = () => {
//    for (let i = 0; i < chosenWord.length; i++) {
//        underScore.push('_');
//    }
//    return underScore;
// }

// //get users guess
// document.addEventListener('keypress', (event) => {
//    let keyword = String.fromCharCode(event.keyCode);
//    if(keyword.indexOf(chosenWord) > -1) {
//        //if right push to rightAnswer array
//        rightAnswer.push(keyword);

//        // replace underscore with right letter
//        underScore[chosenWord.indexOf(keyword)] = keyword;
//        tempUnderScore[0].innerHTML = underScore.join(' ');
//        tempRightAnswer[0].innerHTML = rightAnswer.join(' ');
//        //check to see if right answer
//        if(underScore.join('') == chosenWord ) {
//            alert('You won!')
//        }
//        //if wrong push to wrongAnswer array
//    } else {
//        wrongAnswer.push(keyword);
//        tempWrongAnswer[0].innerHTML = wrongAnswer.join(' ');
//    }
// });

// tempUnderScore[0].innerHTML = generateUnderscore.join('');

// '