var pkg = {
    foodCategory: "",
    foodName: "",
    location: "",
    price: "",
    rate: ""
}




// ===== PROXY

var handler = {
    set: function(obj, props, value){
    // when pkg is changed, call this func 
    if (props == "foodName"){
        //;
    }
      
    if (props == "foodCategory"){
        // Do something
     }   
    if (props == "location"){
        // Do something
    }
            
    if (props == "price"){
        // Do something
    }
    if (props == "rate"){
        // Do something
    }
  
}

var prox = new Proxy(pkg, handler);

// ======= Function that update state
function searchItems(el){
    //
}


// ======= Change UI Funcs =========   //

function displayItems(val){
    // Display Values in Selection div
}

function keepInLocalStorage(val){
    // Keep values of Item clicked in localstorage
}

function ChangeUrlUI(title){
    console.log("change UI Title", title);
    document.querySelector("#previewTitle").innerHTML = title;
}

ChangeImageUI(pkg.url);
ChangeTitleUI(pkg.title);
