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
    displayResearch: "",
    selectedItemName: "",
    selectedItemHTML: "",
    selectedItemLocation: "",
    selectedItemDescription: "",
    selectedItemImage: "",
    selectedItemRestaurant: "",
    page: ""
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
function selectCategory(val) {
    localStorage.setItem('Category', val.alt);

    location.href = "filterPage.html";
}

function setCategory() {
    pkg.catChoice = localStorage.getItem("Category");

}

function filteredItems() {
    var filtered = food[pkg.catChoice].filter(function (obj, i) {
        return (!pkg.minPrice || obj.price >= pkg.minPrice && obj.price <= pkg.maxPrice) &&
               (!pkg.minRate || obj.rate >= pkg.minRate && obj.rate <= pkg.maxRate) && 
               (!pkg.itemLocation || obj.restaurants[0].locations.some(l => l.City.indexOf(pkg.itemLocation) != -1));
    });
    pkg.itemFiltered = filtered;

    proxPkg.itemFiltered = filtered;
}
// FUNCTION THAT CHANGE STATE ON THE PACKAGE

function selectLocation() {
    pkg.itemLocation = document.querySelector('#location').value;
    proxPkg.itemLocation = pkg.itemLocation;

}

function selectPrice() {
    pkg.price = document.querySelector('#price').value;
    if (pkg.price == "5To10") {
        pkg.minPrice = 5;
        pkg.maxPrice = 10;
    }

    if (pkg.price == "11To20") {
        pkg.minPrice = 11;
        pkg.maxPrice = 20;
    }

    if (pkg.price == "21To30") {
        pkg.minPrice = 21;
        pkg.maxPrice = 30;
    }

    proxPkg.price = ("Price Range: From $" + pkg.minPrice + " to $" + pkg.maxPrice);

}

function selectRate() {
    pkg.rate = document.querySelector('#rate').value;
    if (pkg.rate == "less2Stars") {
        pkg.minRate = 0;
        pkg.maxRate = 2;
    }

    if (pkg.rate == "3To4Stars") {
        pkg.minRate = 3;
        pkg.maxRate = 4;
    }

    if (pkg.rate == "5stars") {
        pkg.minRate = 5;
        pkg.maxRate = 5;
    }

    proxPkg.rate = ("Rate: From " + pkg.minRate + " to" + pkg.maxRate);
}

////click on search

// CHANGE UI FUNCTIONS


function displaySearchPrice(val) {
    var priceDisplay = document.querySelector("#priceDisplay");
    if (priceDisplay) {
        priceDisplay.innerHTML = val;
    }
}

function displaySearchLocation(val) {
    var locationDisplay = document.querySelector("#locationDisplay");
    if (locationDisplay) {
        locationDisplay.innerHTML = val;
    }
}

function displaySearchRate(val) {
    var rateDisplay = document.querySelector("#rateDisplay");
    if (rateDisplay) {
        rateDisplay.innerHTML = val;
    }
}

function displayResearchFinalUI(value) {
    var itemFound = document.querySelector(".itemsFound");

    itemFound.innerText = "";
    document.querySelector("#locationDisplay").style.display = "none";
    document.querySelector("#priceDisplay").style.display = "none";
    document.querySelector("#rateDisplay").style.display = "none";
    document.querySelector("#loader").style.display = "block";

    for (var i = 0; i < value.length; i++) {
        itemFound.innerHTML += "<div class='displayReviews'> <div class='flexImg'> " + "\
        " + "<img src='" + value[i].image + "' >" + "</div> \
        " + "<div class='infos'><div class='descrItemFound'> \
        " + "<span class='nameDisplay'>" + value[i].name + "</span>" + " <br/>Price: $" + value[i].price + " <br/>\
        " + "<span class='restaurantDisplay'>" + value[i].restaurants[0].name + "</span>" + "\
        " + "<span class='descriptionDisplay'>" + value[i].description + "</span>" + "\
        " + "<p class='allLocations'>All Locations</p> <div class='restLocations'>" + getLocations(value[i].restaurants[0]) + "</div>" +
            "</div><div class='checkItemDiv'><button id='checkThisItem' onclick='checkThisProduct(this)'> Check Item</button></div></div></div><br/>";
    }

    if (value.length == 0) {
        itemFound.style.display = "block";
        itemFound.innerText = "Items not in the Database";
    }

    myFunction();
    return false
}

function getLocations(restaurant) {
    return restaurant.locations.map(x => x.City).join(",");
}

function checkThisProduct(el) {
    el.parentNode.parentNode.querySelector(".descriptionDisplay").style.dispay = "flex";
    pkg.selectedItemDescription = el.parentNode.parentNode.querySelector(".descriptionDisplay").innerText;
    pkg.selectedItemLocation = el.parentNode.parentNode.querySelector(".restLocations").innerText;
    pkg.selectedItemName = el.parentNode.parentNode.querySelector(".nameDisplay").innerText;
    pkg.selectedItemImage = el.parentNode.parentNode.parentNode.querySelector(".flexImg").querySelector('img').src;
    pkg.selectedItemRestaurant = el.parentNode.parentNode.querySelector(".restaurantDisplay").innerText;

    localStorage.setItem('SelectedDescription', pkg.selectedItemDescription);
    localStorage.setItem('SelectedItemLocation', pkg.selectedItemLocation);
    localStorage.setItem('SelectedItemName', pkg.selectedItemName);
    localStorage.setItem('SelectedItemImage', pkg.selectedItemImage);
    localStorage.setItem('SelectedItemRestaurant', pkg.selectedItemRestaurant);


    console.log(el.parentNode.parentNode.querySelector(".descriptionDisplay").innerText);
    console.log(el.parentNode.parentNode.querySelector(".restLocations").innerText);
    console.log(el.parentNode.parentNode.querySelector(".nameDisplay").innerText);
    console.log(el.parentNode.parentNode.parentNode.querySelector(".flexImg").querySelector('img').src);
    console.log(el.parentNode.parentNode.querySelector(".restaurantDisplay").innerText);

    location.href = "selection.html";
}

function showLabelChoice() {
    CheckIfHomePage()
    document.querySelector("#label").innerText = "You are in: " + pkg.catChoice;
}

function CheckIfHomePage() {
    if (document.querySelector("#welcome").innerText == "Welcome") {
        pkg.catChoice = "home Page"
    }
}

// functions that load when page is load
window.onload = function () {
    setCategory();
    showLabelChoice();
}