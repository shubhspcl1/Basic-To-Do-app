// alert("Connected")

$("ul").on("click", "li", function () {

    // //if li is gray
    // if($(this).css("color") === "rgb(128, 128, 128)"){
    // //    turn it black
    //     $(this).css({
    //         color: "black",
    //         textDecoration: "none"
    //     });
    // }
    // else {
    //     $(this).css({
    //         color: "gray",
    //         textDecoration: "line-through"
    //     });
    //
    // }

    $(this).toggleClass("completed");

});


$("ul").on("click", "span", function (event) {
    // alert("clicked on span");
    $(this).parent().remove();
    event.stopPropagation();

});
//
// $("ul").click(function () {
//     alert("clicked on ul");
//
// });
//
// $("container").click(function () {
//     alert("clicked on container");
//
// });
//
// $("body").click(function () {
//     alert("clicked on body!");
//
// });

$("input[type='text']").keypress(function (event) {
    if(event.which === 13){
        var todoText = $(this).val();
        $(this).val("");

        $("ul").append("<li><span>X</span>  " +todoText + "</li>")
    }

})