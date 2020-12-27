//javascript
console.log("dd");

//login

//add skill
document.getElementById("addSkill").onclick = function () {
  console.log("에드스킬");
  var modal = document.getElementsByClassName('addModal');
  removeClass(modal,'hide');
  addClass(modal,'show');
};

//add work


// addClass
function addClass(element, className) {
  element.className += " " + className;
}

// removeClass
function removeClass(element, className) {
  var check = new RegExp("(\\s|^)" + className + "(\\s|$)");
  console.log(check);
  element.className = element.className.replace(check, " ").trim();
}
