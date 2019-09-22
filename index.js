var levelMemory=[];

function gameStart(event){
  if (levelMemory[levelMemory.length-1]=="coconut"){
    window.location.href = 'advance.html';
  } else if (levelMemory[levelMemory.length-1]=="walnut"){
      alert("This level is locked.")
  } else if (levelMemory[levelMemory.length-1]=="mango"){
      alert("This level is locked.")
  }
}

function selection(event) {
  var level= event.srcElement.id;
  if (level=="walnut") {
    document.querySelector('#section1').style.cssText = "background-image: url('images/leftsection3.png')";
    levelMemory.push("walnut");
    document.querySelector('#start').style.animation = "none";
  } else if (level=="mango") {
    document.querySelector('#section1').style.cssText = "background-image: url('images/leftsection4.png')";
    levelMemory.push("mango");
    document.querySelector('#start').style.animation = "none";
  } else if (level=="coconut") {
    document.querySelector('#section1').style.cssText = "background-image: url('images/leftsection5.png')";
    levelMemory.push("coconut");
    document.querySelector('#start').style.animation = "startButton 1s forwards";
  }
}


section1.addEventListener('click',selection)

start.addEventListener('click',gameStart)
