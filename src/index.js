if (sessionStorage.getItem("authorized") === null) {
    sessionStorage.setItem("authorized", false);
  }

console.log('авторизован?')
console.log(sessionStorage.getItem("authorized"))



if (sessionStorage.getItem("nick") === null){
    sessionStorage.setItem("nick", "Admin");
    sessionStorage.setItem("password", "12345");
}
