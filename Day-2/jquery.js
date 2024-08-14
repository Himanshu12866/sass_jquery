$(function(){
    var categories = ["All" , "Men Fashion" , "Women Fashion" , "Kid Fashion" , "Electronics"];
    categories.map(item => {
        $(`<li>${item}</li>`).appendTo("ol");
        $(`<option>${item}</option>`).appendTo("select")
    })
})