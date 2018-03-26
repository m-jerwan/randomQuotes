
//============  SWAPPER:
var i=1
while (i<6) {
  var randomNo =+Math.floor((Math.random() * 5) + 1); //----[PROBLEM: PICTURES MIGHT APPEAR TWICE:]
  document.getElementById('imgq'+i).src = "img/img"+randomNo+".jpg";   //changing img
  document.getElementById('quote'+i).style.backgroundImage = "url(img/bcg"+randomNo+".jpg)";  //changing bcg
  i=i+1;
}
