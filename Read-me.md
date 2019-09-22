
# Read Me document

## Instructions:
<br>
<ol>
  <li> You will reach the first page of the game. The first page of the game has three level to choose from. **The only available level is the coconut level.** </li>
<br>
  <li> After you choose the coconut level. A start button will fade in. Please press the "Start Game" button to initiate the game. </li>
<br>
  <li> Once the game has started, the time(seconds) and the number of move are being recorded. </li>
</ol>

## Points and Performance :
<ol>
  <br>
  <li>Conditions for different number of star :
    <ul>
      <li> Three stars :Time is less than 200 seconds, Move is less than 100. </li>
      <li> Two and a half stars : Time is more than 400 seconds, Move is between 300 to 400. </li>
      <li> Two stars : Time is more than 600 seconds, Move is between 400 to 500. </li>
      <li> One and a half stars : Time is more than 800 seconds, Move is between 500 to 600. </li>
      <li> One star : Time is more than 800 seconds, Move is between 600 to 700. </li>
      <li> Half star : Time is more than 1000 seconds, Move is more than 700. </li>
    </ul>
  </li>
  <br>
  <li> Points calculations :
    <ul>
      <li>Match pair = +100 points. </li>
      <li>Unmatch pair = -1 point. </li>
    </ul>
  </li>
</ol>

## Brief Logic of the Code :

<p> I first shuffle the array that contains the image files' name of the cards. <p>

<p> The files' name start with digits like 001 to 033, and the matches are from 001a to 033a <p>

<p> Because I had the IDs of the "td" tag in the "advance.html" set from the number 0 to 63. I am able to link them to the array of the shuffled cards. </p>
