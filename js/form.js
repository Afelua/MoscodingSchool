var button = document.getElementById("sent");

function showName(event){
  event.preventDefault();

  var name = document.getElementById("name");

  if (name.value == ""){
    name.style.border = "1px solid red";
  } else {
    name.style.border = "1px solid lightgrey";
  }

}
button.addEventListener("click", showName);
