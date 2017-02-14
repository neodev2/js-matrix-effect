function randomChar(charSet){
  var rand = charSet[Math.floor(Math.random() * charSet.length)];
  //var rand = String.fromCharCode(1e2+Math.random()*33);
  return rand;
}

function randomRange(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function newMatrixLine(speed, charSet, charLength, charHeight){

  // create line
  var elemLine = document.createElement('div');
  elemLine.style.top = '-'+(charLength * charHeight)+'px';
  elemLine.style.left = randomRange(0, window.innerWidth)+'px';
  elemLine.style.position = 'fixed';
  document.body.appendChild(elemLine);

  // create line letters
  for(let i=0; i<charLength; i++){
    var elemLetter = document.createElement('div');
    elemLetter.innerHTML = randomChar(charSet);
    elemLetter.style.color = linesColor;
    elemLine.appendChild(elemLetter);
  }

  // move line interval (delete after fall)
  var interval1 = setInterval(function(){

    var elemLineTop = parseInt(elemLine.style.top);

    if(elemLineTop < (window.innerHeight - 50)){
      elemLine.style.top = elemLineTop + 10 + 'px';
      //console.log('moving');
    }else{
      elemLine.remove();
      clearInterval(interval1);
    }

  }, speed);

}


var linesGroupCreationInterval = 64;
var maxLinesPerGroup = 2;
var charSet = ['a','b','c'];
var charHeight = 20;
var bodyColor = '#000';
var linesColor = 'lime';
var minLineSpeed = 50;
var maxLineSpeed = 70;
var minCharLength = 4;
var maxCharLength = 20;
var maxLines = 1024;


// create lines at interval
var interval2 = setInterval(function(){

  // max total lines
  if(document.body.children.length < maxLines){

    for(let i=0; i<randomRange(1, maxLinesPerGroup); i++){

      // speed, charSet, charLength
      newMatrixLine(randomRange(minLineSpeed, maxLineSpeed), charSet, randomRange(minCharLength, maxCharLength), charHeight);
    }

  }

}, linesGroupCreationInterval);

document.body.style.background = bodyColor;
