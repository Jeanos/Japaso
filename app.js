var home = document.querySelector(".fa-home");
var back = document.querySelector(".fa-arrow-circle-left");
var myVar;



function myFunction() {
  myVar = setTimeout(showPage, 2000);
    document.querySelector("body").style.opacity = "0.5";
}

function showPage() {
  document.querySelector("#loader").style.display = "none";
  document.querySelector(".itemsFound").style.display = "flex";
    document.querySelector("body").style.opacity = "1";
}



//states
var package = {
    menuLeft:0,
    menuOpacity:1
}

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


// Button Click

home.addEventListener("click", function(){
    location.href = "Getstarted.html";
})

back.addEventListener("click", function(){
    window.history.back();
})

function goToSearchMenu(){
    location.href = "./index.html";
}

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
