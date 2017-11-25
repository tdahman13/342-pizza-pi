"use strict";

$(document).ready(function($){
    let pizzaOrder = getOrder();
    
    checkOrder(pizzaOrder);

    $(".reset-button").on("click", function(e){
        pizzaOrder.crustChoice = null;
        pizzaOrder.pizzaSize = null;
        pizzaOrder.pizzaPrice = 0.00;
        pizzaOrder.toppingsMeat = [];
        pizzaOrder.toppingsMisc = [];
        saveOrder(pizzaOrder);
        $(".form-check-label input").attr("checked", false);
        $("#pizza-size-container").addClass("hidden");
        $(".toppings-container").addClass("hidden");
        $(".price-reset-section").addClass("hidden");
    });
});

function getChanges() {
    return (sessionStorage["pizza_changes"])
        ? JSON.parse(sessionStorage["pizza_changes"])
        : [];
}

function addChanges(pick, order) {
    let changes = getChanges();
    let toppings = (order.toppingsMeat).length + (order.toppingsMisc).length;
    changes.push(pick);
    changes.push(order.pizzaPrice.toFixed(2));
    changes.push(toppings);
    console.log(changes);
    return changes;
}

function displayTable() {
	return
}