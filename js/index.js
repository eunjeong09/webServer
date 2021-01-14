//loginModal
document.getElementById("login").onclick = function () {
  const loginModal = document.getElementById("loginModal");

  removeClass(loginModal, "hide");
  addClass(loginModal, "show");
};

//loginButton
document.getElementById("loginButton").onclick = function () {
  let nameValue = document.getElementById("nameValue").value;
  let passValue = document.getElementById("passValue").value;

  let data = new Object();
  data.name = nameValue;
  data.pass = passValue;
  // console.log(data);

  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status == 200) {
      // console.log(this.responseText);
      if(this.responseText > 0){
        alert("login success!");
      }
    }
  };
  xhr.open("POST", "./php/login.php", true);
  xhr.setRequestHeader('Content-type', 'application/json')
  xhr.send(data);
};

//add skill
document.getElementById("addSkill").onclick = function () {
  // var modal = document.getElementsByClassName('addModal');

  const modalWrap = document.getElementById("addModalWrap");
  removeClass(modalWrap, "hide");
  addClass(modalWrap, "show");

  document.getElementsByClassName("modalTitle")[0].innerHTML = "Add Skill";
};

//closeModal
document.querySelector(".modalBottom button").onclick = function () {
  const modalWrap = document.getElementById("addModalWrap");
  removeClass(modalWrap, "show");
  addClass(modalWrap, "hide");
};

document.getElementById("addFile").onchange = function () {
  readURL(this);
};

function readURL(input) {
  if (input.files && input.files[0]) {
    let reader = new FileReader();

    reader.onload = function (e) {
      let uploadImageArea = document.getElementById("uploadImage");
      uploadImageArea.setAttribute("src", e.target.result);
    };

    reader.readAsDataURL(input.files[0]);
  }
}

//파일 업로드
document.getElementById("upload").onclick = function () {

  var fileInput = document.getElementById("addFile");
  var file = fileInput.files[0];
  var formData = new FormData();
  formData.append("uploadFile" , file);

  var xhr = new XMLHttpRequest();
  xhr.open("POST" , "./php/upload.php" , true);
  xhr.send(formData);

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      //file upload success

      //append?
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
