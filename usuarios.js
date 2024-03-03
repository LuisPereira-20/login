function saveUser(){
    let nickname = document.getElementById("nickname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    localStorage.setItem("nickname", nickname);
}

function showNickname(){
    let nickname = localStorage.setItem("nickname");
    document.getElementById("nickname").value = nickname;
}