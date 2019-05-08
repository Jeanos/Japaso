// Most if and else in the STATE, Not in the UI

var pkg = {
    catChoice: "",
    itemName: "",
    itemLocation: "",
    itemRestaurant: "",
    choiceCity: "",
    choicePostalCode: "",
    itemDescription: "",
    price: "",
    minPrice: 0,
    maxPrice: 25,
    rate: "",
    minRate: "",
    maxRate: "",
    itemFiltered: "",
    displayResearch: ""
};
/* ============== STATE =============== . */
var handler = {
    set: function (obj, props, value) {
        //when pkg is changed, call func
        if (props === "catChoice") {
           showLabelChoice();
        }
        if (props === "itemLocation") {
            displaySearchLocation(value);
        }
        
        if (props === "price") {
            displaySearchPrice(value);
        }
        
        if (props === "rate") {
            displaySearchRate(value);
        }
        if (props === "itemFiltered") {
            displayResearchFinalUI(value);
        }

    }
}

var proxPkg = new Proxy(pkg, handler);


// FUNCTIONS THAT NOT INTERACT WITH THE PACKAGE
function selectCategory(val){
    localStorage.setItem('Category', val.alt);
    
    location.href ="filterPage.html";
}

function setCategory(){
    pkg.catChoice = localStorage.getItem("Category");
    
}

function filteredItems(){
    var filtered = food[pkg.catChoice].filter(function(obj,i){
        return(

            ((obj.price >= pkg.minPrice) && (obj.price <= pkg.maxPrice)) && ((obj.restaurants[0].locations[0].City.indexOf(pkg.itemLocation) != -1)||(obj.restaurants[0].locations[1].City.indexOf(pkg.itemLocation) != -1)||(obj.restaurants[0].locations[2].City.indexOf(pkg.itemLocation) != -1))
        );
    });
    pkg.itemFiltered = filtered;
    
    if (pkg.itemFiltered = "") {
        proxPkg.itemFiltered = "Item not found..";
    }
    proxPkg.itemFiltered = filtered;
}
// FUNCTION THAT CHANGE STATE ON THE PACKAGE

function selectLocation(){
    pkg.itemLocation = document.querySelector('#location').value;
    proxPkg.itemLocation = pkg.itemLocation;
    
}

function selectPrice(){
    pkg.price = document.querySelector('#price').value;
    if( pkg.price == "5To10"){
        pkg.minPrice = 5;
        pkg.maxPrice = 10;
    }
    
    if( pkg.price == "11To20"){
        pkg.minPrice = 11;
        pkg.maxPrice = 20;
    }
    
    if( pkg.price == "21To30"){
        pkg.minPrice = 21;
        pkg.maxPrice = 30;
    }
    
    proxPkg.price = ("Price Range: From $" + pkg.minPrice + " to $" + pkg.maxPrice);
    
}
function selectRate(){
    pkg.rate = document.querySelector('#rate').value;
    if( pkg.rate == "less2Stars"){
        pkg.minRate = 0;
        pkg.maxRate = 2;
    }
    
    if( pkg.rate == "3To4Stars"){
        pkg.minRate = 3;
        pkg.maxRate = 4;
    }
    
    if( pkg.rate == "5stars"){
        pkg.minRate = 5;
        pkg.max > 5;
    }
    
     proxPkg.rate = ("Rate: From " + pkg.minRate + " to" + pkg.maxRate);
}




////click on search

// CHANGE UI FUNCTIONS


function displaySearchPrice(val){
    document.querySelector("#priceDisplay").innerHTML = val;  
}


function displaySearchLocation(val){
    document.querySelector("#locationDisplay").innerHTML = val;  

}

function displaySearchRate(val){
    document.querySelector("#rateDisplay").innerHTML = val;     
}

function displayResearchFinalUI(value){
    
    var itemFound = document.querySelector(".itemsFound");
    itemFound.innerText = "";
    document.querySelector("#locationDisplay").style.display = "none";
    document.querySelector("#priceDisplay").style.display = "none";
    document.querySelector("#rateDisplay").style.display = "none";
    document.querySelector("#loader").style.display = "block";
    
    for(var i=0; i < value.length; i++){
        
//        itemFound.innerHTML += "<p>"+value[i].name+ ' '+ '$' + " "+value[i].price + " \
//        "+value[i].restaurants[0].locations[0].City + " <br/> \
//        "+value[i].restaurants[0].locations[1].City + " <br/> \
//        "+value[i].restaurants[0].locations[2].City + "</p><br>";
        
        itemFound.innerHTML += "<div class='displayReviews'> <div class='flexImg'> "+"\
        "+ "<img src='" + value[i].image + "' >" + "</div> \
        "+"<div class='descrItemFound'> \
        "+ value[i].name+ ' '+  " <br/>Price: $"+value[i].price + " <br/>\
        "+value[i].restaurants[0].locations[0].City + " <br/> \
        "+value[i].restaurants[0].locations[1].City + " <br/> \
        "+value[i].restaurants[0].locations[2].City + "<br/></div><div><button class='red'> Check this Item</button></div></div><br/>";
    }
    
    console.log(value);
    myFunction();
    return false
}

function showLabelChoice(){
    document.querySelector("#label").innerText = "You are in: " + pkg.catChoice;
}



// functions that load when page is load
window.onload = function(){
    setCategory();
    showLabelChoice();
}

