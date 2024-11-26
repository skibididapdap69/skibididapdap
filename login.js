const btn = document.getElementById("btnlogin");
const username = document.getElementById("username");
const password = document.getElementById("password");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    if(username.value == "server" && password.value == "server"){
        alert ("Successful Login");
        window.location.href = "/mainpage/index.html";
    }else{
        alert("kinabuhi");
    }
})