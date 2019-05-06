$(document).ready(function(){

  $("#search").click(function(){
    $.getJSON("app.json", function(result){
      $.each(result, function(i, field){
        $("#productImage").append(field.product_image + " " +
        '<span id="boldProName">'+ field.product_name+ '</span> '+
        " " + field.product_price + " " + field.product_color + " " +
        field.product_id);
      });

    });
  });
});

//states
var package = {
    menuLeft:0,
    menuOpacity:1
}
//var menuLeft = 0,
//    menuOpacity = 1;
//functions - changes states
function closeMenu(){
    p.menuLeft = -200;
    p.menuOpacity = 0;
}

function openMenu(){
    p.menuLeft = 0;
    p.menuOpacity = 1;
}
function changeOp(){
    p.menuOpacity = document.querySelector("#opacityInput").value;
}
var mmenu = document.querySelector("#menu");

var packageChange = {
    set: function(obj, prop, value){
        if (prop == "menuLeft"){
            mmenu.style.left = value + "px";
        }

        if (prop == "menuOpacity"){
            mmenu.style.opacity = value ;
        }
    }
}


//PROXY
// 2 arguments (theVariableToObserve, function()onWhatToDo)
var p = new Proxy(package, packageChange);

// Utils
function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};
