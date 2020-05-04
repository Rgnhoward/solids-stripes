function dragStart(event) {
  event.dataTransfer.setData("Text", event.target.id);
}
function dragEnd(event) {
  //var e = document.getElementByClassName("solids" || "stripes"){
  //if(e.currentTarget.className !== img.className)
  event.preventDefault();
  event.target.style.opacity = "";
}

function dragEnter(event) {
  if (event.target.className == "droptarget") {
    document.getElementById("demo").innerHTML =
      "Border turns red on drag Enter, black on dragLeave, and blue onDrop";
    event.target.style.border = "3px dashed red";
  }
}

function dragLeave(event) {
  if (event.target.className == "droptarget") {
    document.getElementById("demo").innerHTML = "leaving the div";
    event.target.style.border = "";
    event.currentTarget.style.background = "white";
  }
}

function allowDrop(event) {
  console.log("yes");
  event.preventDefault();
}
function drop(event) {
  //  var e = getElementsByClassName("solids","stripes");
  //if (event.currenTarget.className === img.className) {
  event.preventDefault();
  event.target.style.border = "3px solid blue";
  var data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));
}