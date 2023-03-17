function Mobile_Detection(){
console.log("1");
  if (
  navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/iPhone/i)
) {
  var main = document.getElementById("main");
  document.getElementById("main").style.fontSize = "80%";
}
}