$(document).ready(function () {
    var category = getUrlParameter("category");
    loadRestaurants(food[category]);

    selectCategory(category);
});

function loadRestaurants(restaurants) {
    if (!restaurants) {
        return;
    }

    restaurants.forEach(restaurant => {
        var restaurantHtml = createRestaurantView(restaurant);
        $(restaurantHtml).appendTo("#content");
    });
}

function createRestaurantView(restaurant) {
    var html =
        `<hr>
    <div class="restaurant-view">
        <div class="flexImg">
            <img class="featuredImageBox commentImg" src="imgs/placeholder.png">
        </div>
        <div onclick="onRestaurantClick()">
            <h3>{{name}}</h3>
            <div class="review">{{review}}</div>
            <p>{{description}}</p>
        </div>
    </div>`

    return html.replace('{{name}}', restaurant.name)
        .replace('{{review}}', createReview(restaurant.rate))
        .replace('{{description}}', restaurant.description);
}

function createReview(review) {
    var html = '';

    for (let i = 1; i <= 5; i++) {
        if (i <= review) {
            html += '<span class="fa fa-star checked"></span>';
        } else {
            html += '<span class="fa fa-star"></span>';
        }
    }

    return html;
}

function selectCategory(id) {
    var category = categories.find(c => c.id == id),
        name = "Unknown";
    if(category) {
        name = category.name;
    }

    $("#categorySelection").text('Selection: ' + name);
}

function onRestaurantClick() {
    location.href = 'filterPage.html';
}