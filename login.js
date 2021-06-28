function login(){
    window.location ="bookhut.html"
    var user_name= document.getElementById("user_name").value;
localStorage.setItem("user_name", user_name);
console.log("User name= "+user_name);
var password= document.getElementById("password").value;
localStorage.setItem("password", password);
console.log("Password= "+password);
}
