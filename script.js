function Mobile_Detection(){
console.log("1");
  if (
  navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/iPhone/i)
) {
  var main = document.getElementById("main");
  document.getElementById("main").style.fontSize = "80%";
  document.getElementById("main").style.width = "100%";
}
}

function Menuscroll() {
  var myLinks = document.getElementById("myLinks");
  if (myLinks.style.display === "block") {
    myLinks.style.display = "none";
  } else {
    myLinks.style.display = "block";
  }
}
