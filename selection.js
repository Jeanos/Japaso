document.querySelector(".bannerImg").src = localStorage.getItem("SelectedItemImage");
document.querySelector(".foundName").innerText = localStorage.getItem("SelectedItemName") + " Well Served at " + localStorage.getItem("SelectedItemRestaurant");
document.querySelector(".locations").innerText = localStorage.getItem("SelectedItemLocation");
document.querySelector(".description").innerText = localStorage.getItem("SelectedDescription");
document.querySelector(".SelectedItemRestaurant").innerText =  localStorage.getItem("SelectedItemRestaurant");
document.querySelector("#label").innerText = "You are in: " + pkg.catChoice;
document.querySelector("#Comments").innerText = "What people say about " + localStorage.getItem("SelectedItemName");;


function goToSearchMenu(){
    location.href = "./index.html";
}