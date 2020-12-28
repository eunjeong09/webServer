//javascript
console.log("check");

//login

//add skill
document.getElementById("addSkill").onclick = function () {
  console.log("에드스킬");
  // var modal = document.getElementsByClassName('addModal');

  const modalWrap = document.getElementById("addModalWrap");
  removeClass(modalWrap, "hide");
  addClass(modalWrap, "show");

  document.getElementsByClassName("modalTitle")[0].innerHTML="Add Skill";
};

//파일 업로드
document.getElementById("upload").onclick = function () {
  var xhr = new XMLHttpRequest();

  xhr.open("POST", "./php/upload.php", true);
  xhr.setRequestHeader("Content-type", "image");

  var file = document.getElementById("addFile").files[0];
  if (file) {
    var formdata = new FormData();
    formdata.append("addFile", file);
    xhr.send(formdata);
  }
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log("file업로드 성공?");
      //some code
    }
  };
};

//add work

//모달 재활용,,,

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
