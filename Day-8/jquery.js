$(() => {
    $("#login").dialog();
    $("#dept").datepicker();
    $("#faqs").accordion()
})
$("#btnSignout").on("click" ,()=>{
    alert("Do want to Signout ?")
    $.removeCookie("name");
    $.removeCookie("pass");
    location.href ="../Day-9/index.html"
})