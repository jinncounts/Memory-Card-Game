

totalTime.innerText = "Total Time : " + localStorage.time + " seconds"; // Update the Total Time from retriving data from the local storage.
moves.innerText = localStorage.moves ; // Update the number of moves from retriving data from the local storage.
finalstar.style.cssText = localStorage.star; // Update the star's image from retriving data from the local storage.

localStorage.removeItem("time"); // Remove the time item from the local storange.
localStorage.removeItem("moves"); // Remove the move item from the local storange.
localStorage.removeItem("star"); // Remove the star item from the local storange.
