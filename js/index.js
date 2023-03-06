var bookMarkName = document.getElementById("name")
var bookMarkURL = document.getElementById("url")
var bookMarkList=[]

if (localStorage.getItem("list") == null) {
    bookMarkList = [];
}
else {
    bookMarkList = JSON.parse(localStorage.getItem("list"));
    display(...bookMarkList);
}
function add() {
    if(nameValidation()==true && urlValidation()==true){
    var bookMark = {
        name: bookMarkName.value,
       url : bookMarkURL.value,
    }
    bookMarkList.push(bookMark);
    localStorage.setItem("list", JSON.stringify(bookMarkList));
    clearForm();
    display(...bookMarkList);
}}

function display(...list) {
    var x = ``;
    for (var i = 0; i < list.length; i++) {
       x += `     <div   class="out p-4">
       <div class="row out-content">
           <div class="col-md-5">
               <p class="fs-4">${list[i].name}</p>
           </div>
           <div class="col-md-4 d-flex ">
               <button onclick="deleteBookMark(${i})" class="btn btn-lg btn-danger me-5">Delete</button>
               <button  class="btn btn-lg btn-primary px-4"> <a target="blank " href="${bookMarkList[i].url}">visit</a></button>
           </div>
       </div>
      </div>`

    }
    document.getElementById('out').innerHTML = x;
}
function clearForm() {
    bookMarkName.value = "";
    bookMarkURL.value = "";
}
function deleteBookMark(index) {
    bookMarkList.splice(index, 1);
    localStorage.setItem("list", JSON.stringify(bookMarkList));
    display(...bookMarkList);
    console.log(index,bookMarkList)
}
function nameValidation(){
    var regex=/^[A-Z][a-z]{3,8}$/;
    if(regex.test(bookMarkName.value)==true){
        bookMarkName.style.border="none";
        document.getElementById("nameValidationMessege").classList.replace("d-block","d-none")

        return true;
    }else{
        bookMarkName.style.border="2px solid Red";
        document.getElementById("nameValidationMessege").classList.replace("d-none","d-block")
        return false;
    }
}
function urlValidation(){
    var regex=/^[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;
    if(regex.test(bookMarkURL.value)==true){
        bookMarkURL.style.border="none";
        document.getElementById("invalidURL").classList.replace("d-block","d-none")
        return true;
    }else {
        bookMarkURL.style.border="2px solid Red";
        document.getElementById("invalidURL").classList.replace("d-none","d-block")
        return false;

    }}



