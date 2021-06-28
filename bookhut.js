function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("password");
    window.location= "login.html";
}