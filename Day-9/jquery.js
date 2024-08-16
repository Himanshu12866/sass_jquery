$("#BtnLogin").on("click", () => {
    let username = $("#inpt").val();
    let password = $("#psw").val();
    if(username == "" && password == ""){
        alert("Please enter your username and password");
    }
    else{
        $.cookie("name", username);
        $.cookie("pass", password);
        location.href = "../Day-8/index.html"
    }
})