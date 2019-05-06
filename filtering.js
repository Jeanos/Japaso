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
           //
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
            (obj.price > pkg.minPrice) && (obj.price < pkg.maxPrice) && (obj.restaurants[0].locations[0].City.indexOf(pkg.itemLocation) != -1)
        );
    });
    pkg.itemFiltered = filtered;
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
    document.querySelector("#rateDispleay").innerHTML = val;     
}

function displayResearchFinalUI(value){
 
    var itemFound = document.querySelector(".itemFound");
    itemFound.innerHTML = "";
    for(var i=0; i < value.length; i++)
    itemFound.innerHTML += "<p>"+value[i].name+ ' '+ '$' + " "+value[i].price + " "+value[i].restaurants[0].locations[0].City + "</p><br>";
    
    console.log(value);
}



// functions that load when page is load
window.onload = function(){
    setCategory()
}

