document.querySelector(".bannerImg").src = localStorage.getItem("SelectedItemImage");
document.querySelector(".foundName").innerText = localStorage.getItem("SelectedItemName");
document.querySelector(".locations").innerText = localStorage.getItem("SelectedItemLocation");
document.querySelector(".description").innerText = localStorage.getItem("SelectedDescription");
document.querySelector("#label").innerText = "You are in: " + pkg.catChoice;
