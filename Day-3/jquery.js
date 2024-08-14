$(function(){
    $("#btnId").click(() => {
        $("p").html(`Welcome`).css('color',"red")
    })
    $("#uName").keyUp((e) => {
        $("p").html(`${'#uName'}.val()`)
    })
})