//javascript
console.log("check!!");

//login

//add skill
document.getElementById("addSkill").onclick = function () {
  // var modal = document.getElementsByClassName('addModal');

  const modalWrap = document.getElementById("addModalWrap");
  removeClass(modalWrap, "hide");
  addClass(modalWrap, "show");

  document.getElementsByClassName("modalTitle")[0].innerHTML="Add Skill";
};

//closeModal
document.querySelector('.modalBottom button').onclick = function(){
  const modalWrap = document.getElementById("addModalWrap");
  removeClass(modalWrap, "show");
  addClass(modalWrap, "hide");
};

document.getElementById("addFile").onchange = function(){
  readURL(this);
  
}

function readURL(input){
  console.log(input);
  
  // if (input.files && input.files[0]) {
  //   var reader = new FileReader();
    
  //   reader.onload = function (e) {
  //    $('#image_section').attr('src', e.target.result);  
  //   }
    
  //   reader.readAsDataURL(input.files[0]);
  //   }
  
  console.log(input.files);
  console.log(input.files[0]);

  if (input.files && input.files[0]) {
      let reader = new FileReader();

      reader.onload = function(e){
        let uploadImageArea = document.getElementById('uploadImage');
        uploadImageArea.setAttribute('src',e.target.result);
      }

      reader.readAsDataURL(input.files[0]);
  }

}

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
