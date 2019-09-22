
// "const cards" contain fixed string array of 32 pairs of cards. The number denotes that they are the same. The second pair ends with an "a" after the number.
const cards = ["001-cherry.png')", "002-bamboo.png')", "003-peanut.png')", "004-pitaya.png')", "005-onion.png')", "006-tomato.png')", "007-durian.png')", "008-lettuce.png')"
        , "009-broccoli.png')", "010-corn.png')", "011-breast-milk-fruit.png')", "012-blueberry.png')", "013-potato.png')", "014-mango.png')", "015-bell-pepper.png')", "016-avocado.png')"
        , "017-strawberry.png')", "018-peas.png')", "019-kiwi.png')", "020-grape.png')", "021-parsley.png')", "022-cucumber.png')", "023-ginger.png')", "024-spring-onion.png')"
        , "025-pomegranate.png')", "026-bananas.png')", "027-watermelon.png')", "028-artichoke.png')", "029-carrot.png')", "030-rose-apple.png')", "031-rambutan.png')", "033-peach.png')"
        , "001a-cherry.png')", "002a-bamboo.png')", "003a-peanut.png')", "004a-pitaya.png')", "005a-onion.png')", "006a-tomato.png')", "007a-durian.png')", "008a-lettuce.png')"
        , "009a-broccoli.png')", "010a-corn.png')", "011a-breast-milk-fruit.png')", "012a-blueberry.png')", "013a-potato.png')", "014a-mango.png')", "015a-bell-pepper.png')", "016a-avocado.png')"
        , "017a-strawberry.png')", "018a-peas.png')", "019a-kiwi.png')", "020a-grape.png')", "021a-parsley.png')", "022a-cucumber.png')", "023a-ginger.png')", "024a-spring-onion.png')"
        , "025a-pomegranate.png')", "026a-bananas.png')", "027a-watermelon.png')", "028a-artichoke.png')", "029a-carrot.png')", "030a-rose-apple.png')", "031a-rambutan.png')", "033a-peach.png')"];
var moves = 0; // Changeable "moves" declared value of 0.
var points = 0; // Changeable variable "points" declared value of 0.
startTime = 0; // StartTime set to be 0.
var winningCounts = 0; // winningCount declared to check if the player has successfully flip and match the pair. There are 32 pairs.
var randomCards = [];  // randomCards is an empty pair to store randomize cards from "cards".
var arrNumber = [];  // arrNumber stores the card ID number from the HTML page, once the "td" is clicked.
var arrstrNumber = []; // arrStrNumber stored the string card ID number from the HTML page, once the "td" is clicked.
var testClick = []; // Declared an empty array "testClick" to store the click's event.
var flippedCard = []; // Declared an empty array "flippedCard" to store the history of matched cards.

/*The while statement below rearrage the "cards" randomly and sotre them in the "randomCards" array */
while (cards.length > 0){
  var show = cards[Math.floor(Math.random() * cards.length)];
  for (j = 0 ; j <= cards.length ; j++) {
    if (cards[j] == show) {
      cards.splice(j, 1);
      randomCards.push(show);
    }
  }
}

/* This function change the time in the card game.*/
function timer() {
  startTime = startTime + 1;
  time.innerHTML = "Time : " +startTime;
  return starTime2 = startTime;
}

/*gameOver() function allows fade out effects when the game is over,
and directs the player to the last page.*/
function gameOver(){
  body.style.animation = "fadeOut 2s forwards"
  setTimeout(function(){ window.location.href = 'last-page.html'; }, 3000);
}

/*lastMove() flips last two card to green and direct the function to gameOver(). */
function lastMove(winningCounts){
  if (winningCounts == 31) {
    document.querySelector('#card'+arrstrNumber[0]).style.animation= "greenCard 0.6s forwards";
    document.querySelector('#card'+arrstrNumber[1]).style.animation= "greenCard 0.6s forwards";
    winningCounts = winningCounts + 1;
  }
  gameOver()
}

/* star() function takes two arguements "moves" and "startTime, and check the cases of of the arguements."*/
function star(moves, startTime) {
  // If the time reaches more than 200 seconds and the number of moves are in between 50 and 70, the player's star changes to 2.5 stars.
  if (startTime > 200 && moves > 300 && moves < 400) {
    document.querySelector('#stars').style.cssText= "background-image: url('images/stars/two-five-star.png')";
    return typeOfStar = "background-image: url('images/stars/two-five-star.png')";
  } else if (startTime > 400 && moves > 400 && moves < 500) {
    document.querySelector('#stars').style.cssText= "background-image: url('images/stars/two-zero-star.png')";
    return typeOfStar = "background-image: url('images/stars/two-zero-star.png')";
  } else if (startTime > 600 && moves > 500 && moves < 600) {
    document.querySelector('#stars').style.cssText= "background-image: url('images/stars/one-five-star.png')";
    return typeOfStar = "background-image: url('images/stars/one-five-star.png')";
  } else if (startTime > 800 && moves > 600 && moves < 700) {
    document.querySelector('#stars').style.cssText= "background-image: url('images/stars/one-zero-star.png')";
    return typeOfStar = "background-image: url('images/stars/one-zero-star.png')";
  } else if (startTime > 1000 && moves > 700) {
    document.querySelector('#stars').style.cssText= "background-image: url('images/stars/zero-five-star.png')";
    return typeOfStar = "background-image: url('images/stars/zero-five-star.png')";
  }
}

function showElement(event) {
  moves++; // Add 1 to the variable moves.
  typeOfStar = star(moves, startTime) // Direct to the function star() . Change the Image of the Stars .
  /* If the user clicks outsise of the target area which is the "tbody", "table", "tr" tag. The page will send an alert on "Please click on the card."
   The else if statement runs only if the array "Flipped Card" has an element that is similiar to the clicked element.
   else; it will run the dominant part of the script. */
  if (event.target.localName == "tbody" || event.target.localName =="table" || event.target.localName == "tr") {
    alert("Please click on the card.");
  } else if (flippedCard.includes(event.toElement.id)) {
    alert("Please Choose another card.");
  } else {
    testClick.push(event); // testClick store the clicked event into the "testClick" array.
    var clicked = event.srcElement; // the var "clicked" is declared as the srcElement of the clicked event.
    var strNumber = event.toElement.id[4]+event.toElement.id[5]; // strNumber is to get the string number from the event.
    number = parseInt(strNumber,10); // change the string number to an interger number.
    arrstrNumber.push(strNumber); // adding the string number into the string array number.
    arrNumber.push(number); // adding the integer number into the string array number.

    clicked.style.cssText = "background-image: url('images/card-pics/" + randomCards[number]; // change the background image of the clicked item to the element in the randomCards.
    clicked.style.animation = "flipCard 0.5s forwards"; // apply flip animation to the clicked iteam.

    /* The following statement check if the arrNumber reaches the second click, if true, runs the statement.*/
    if (arrNumber.length == 2 && testClick[0].srcElement == testClick[1].srcElement) {
      alert("Please Select Another Card.")
      testClick[0].srcElement.style.cssText=  "background-image: url('images/star.png')"; // Flip back to the original image if click twice on the same card.
      moves--; // The number of moves is minus 1 because the second time click is not counted.
      testClick = []; // Array reset back to an ampty array.
      arrNumber = []; // Array reset back to an ampty array.
      arrstrNumber = []; // Array reset back to an ampty array.
      testClick = []; // Array reset back to an ampty array.
    } else if (winningCounts == 31 && arrNumber.length == 2) {
      totalMove = document.querySelector('#moves').textContent; // The last two cards runs on this which can direct the process to the gameOver() funciton.
      localStorage.setItem('star', typeOfStar); // !!! IMPORTANT: STORE THE RESULT OF THE STAR TO LOCALSTORAGE.
      localStorage.setItem('moves', totalMove); // !!! IMPORTANT: STORE THE TOTAL NUMBER OF MOVES TO LOCALSTORAGE.
      localStorage.setItem('time', startTime); // !!! IMPORTANT: STORE THE TOTAL TIME TAKEN (seconds) TO LOCALSTORAGE.
      clicked.style.cssText= "background-image: url('images/card-pics/" + randomCards[number]; // FLip the last card.
      gameOver(winningCounts) //direct to the function gameOver().
    }

    /* The following statement choose to give user an oppotunity to remember the card better before user put on the click. */
    if (arrNumber.length == 3) { // If the arrNumber array has 3 elements. It will run the following code.
      if (arrNumber.length == 3 && randomCards[arrNumber[0]].substring(1,3) != randomCards[arrNumber[1]].substring(1,3)){ // If the strings are NOT the same.
        document.querySelector('#card'+arrstrNumber[0]).style.cssText =  "background-image: url('images/star.png')"; // The first card flips back to original image.
        document.querySelector('#card'+arrstrNumber[1]).style.cssText =  "background-image: url('images/star.png')"; // The second card flips back to original image.
        document.querySelector('#card'+arrstrNumber[0]).style.animation = "redCard 0.1s"; // Apply red flast animation to first card, because it is fault match.
        document.querySelector('#card'+arrstrNumber[1]).style.animation = "redCard 0.1s"; // Apply red flast animation to second card, because it is fault match with the first card.
        document.querySelector('#card'+arrstrNumber[2]).style.cssText =  "background-image: url('images/star.png')"; // Keep the third card close and hidden.
        points = points - 1;
      } else if (arrNumber.length == 3 && randomCards[arrNumber[0]].substring(1,3) == randomCards[arrNumber[1]].substring(1,3) && testClick[0].srcElement != testClick[1].srcElement) { // If the card are a match.
        if (testClick[1].srcElement==testClick[2].srcElement || testClick[0].srcElement==testClick[2].srcElement){ // If they are open and match, click on either of the card again.
          alert("Please Select Another Card."); // The page gives alert to user to ask to click on another card.
          document.querySelector('#card'+arrstrNumber[0]).style.animation = "greenCard 0.6s forwards"; // Show animation green flash to first card to indicate it is a right match.
          document.querySelector('#card'+arrstrNumber[1]).style.animation = "greenCard 0.6s forwards"; // Show animation green flash to second card to indicate it is a right match.
          flippedCard.push('card'+arrstrNumber[0]); // Store flipped card to "flippedCard" array.
          flippedCard.push('card'+arrstrNumber[1]); // Store flipped card to "flippedCard" array.
          winningCounts = winningCounts + 1; // Add 1 to winningCounts .
          points = points + 100;
        } else {
          document.querySelector('#card'+arrstrNumber[2]).style.cssText =  "background-image: url('images/star.png')"; // Keep the third clicked card close and hidden.
          document.querySelector('#card'+arrstrNumber[0]).style.animation = "greenCard 0.6s forwards"; // Show animation green flash to first card to indicate it is a right match.
          document.querySelector('#card'+arrstrNumber[1]).style.animation = "greenCard 0.6s forwards"; // Show animation green flash to second card to indicate it is a right match.
          flippedCard.push('card'+arrstrNumber[0]); // Store flipped card to "flippedCard" array.
          flippedCard.push('card'+arrstrNumber[1]); // Store flipped card to "flippedCard" array.
          winningCounts = winningCounts + 1; // Add 1 to winningCounts .
          points = points + 100;
          document.querySelector('#card'+arrstrNumber[2]).style.cssText =  "background-image: url('images/star.png')"; // Keep the third clicked card close and hidden.
        }
      }
      moves--; // To minus the third click times.
      arrNumber = []; // Array reset back to an ampty array.
      arrstrNumber = []; // Array reset back to an ampty array.
      testClick = []; // Array reset back to an ampty array.
    }
    document.querySelector('#points').textContent = "Points : " + points;
    document.querySelector('#moves').textContent = "Moves : " + moves; // Update the number of move on the page.
  }
}

document.querySelector('table').addEventListener("click", showElement); // Limit the event listerner to the table tag range.
update = setInterval("timer()",1000); // Begins the timer with increament by 1 seconds.
