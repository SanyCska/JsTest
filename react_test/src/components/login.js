
let isAuthorized = sessionStorage.getItem('authorized');
console.log('проверка авторизации')
console.log(isAuthorized)
console.log(typeof(isAuthorized))
if (isAuthorized === 'true'){
    document.getElementById('profile').href = "./profile.html";
    console.log('да')
}
else{
    document.getElementById('profile').href = "./login.html";
    console.log('нет')
}


let verification = function() {
    console.log(sessionStorage.getItem('nick'));
    console.log(sessionStorage.getItem('password'));
    console.log(document.getElementById("nick").value);
    console.log(document.getElementById("password").value);
    if (sessionStorage.getItem('nick') === document.getElementById("nick").value && 
        sessionStorage.getItem('password') === document.getElementById("password").value){
            sessionStorage.setItem("authorized", true);
            setTimeout(function(){document.location.href = "./profile.html";},500);
            // window.location.href = "profile.html";
    } else{
        alert('неправильный логин/пароль')
    }
}

let login_button = document.getElementById("login_button");

if (login_button !== null){
    login_button.onclick = verification
    
}


    