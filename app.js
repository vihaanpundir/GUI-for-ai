document.getElementById("heading").innerHTML =
  localStorage["title"] || "Start"; // default text


setInterval(function() {
  // fuction that is saving the innerHTML of the div
  localStorage["title"] = document.getElementById("heading").innerHTML; // heading div
}, 1000);
