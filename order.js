document.querySelector("#itemName").innerText = localStorage.getItem("SelectedItemName");
document.querySelector(".servedRestaurant").innerText = localStorage.getItem("SelectedItemRestaurant");
document.querySelector("#servedRestaurantBy").innerText = localStorage.getItem("SelectedItemRestaurant");
document.querySelector("#selectedCategory").innerText = localStorage.getItem("Category");
document.querySelector("#choosenImage").src = localStorage.getItem("SelectedItemImage");

function goToSearchMenu(){
    location.href = "./index.html";
}

