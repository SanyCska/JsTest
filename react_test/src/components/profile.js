let logout_button = document.getElementById("logout_button");

if (logout_button !== null){
    logout_button.onclick = function(){
        console.log('logout')
        sessionStorage.setItem("authorized", false);
        setTimeout(function(){document.location.href = "./login.html";},500);
        // window.location.href = "login.html";
    }
}