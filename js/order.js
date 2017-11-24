"use strict";

// function toggleField(elementId) {
//     $("#" + elementId).removeClass("hidden");

    // let ele = window.document.getElementById(elementId);
    // ele.style.display = "block !important;";

// }

// document.getElementById("crust-choice")
//     .addEventListener('change', function(){
//         console.log(document.getElementById("pizza-size-container"));
//     });

$(document).ready(function($){
    let pizzaOrder = getOrder();
    
    checkOrder(pizzaOrder);

    // if (pizzaOrder.crustChoice === "deep") {
    //     $("#crust-choice").val("deep").find("option[deep]").attr('selected', true);
    //     $("#pizza-size-container").removeClass("hidden");       
    // }

    $("#crust-choice").on("change", function(e){
        $("#pizza-size-container").removeClass("hidden");
    });

    $("#pizza-size").on("change", function(e){
        $(".toppings-container").removeClass("hidden");
    });

    $(".pizza-updater").on("change", function(e){
        let fieldName = $(this).attr('name');
        let choice = $(this).val();
        if (fieldName == 'toppingsMeat' || fieldName == 'toppingsMisc'){
            let index = pizzaOrder[fieldName].indexOf(choice);
            if (index >= 0) {
                pizzaOrder[fieldName].splice(index, 1);
            }else {
                pizzaOrder[fieldName].push(choice);
            }
        }else {
            pizzaOrder[fieldName] = choice;
        }
        updatePrice(pizzaOrder);
        saveOrder(pizzaOrder);
    });
});

function checkOrder(order) {
    for (let choice in order) {
        let picks = order[choice];
        if (picks == null || picks == [] || picks >= 0.00) {
            continue;
        }else if (picks == "thin" || picks == "deep") {
            $("#crust-choice").val(picks).find("option[picks]").attr('selected', true);
            $("#pizza-size-container").removeClass("hidden");        
        } else if (picks == "sm" || picks == "md" || picks == "lg") {
            $("#pizza-size").val(picks).find("option[picks]").attr('selected', true);
            $(".toppings-container").removeClass("hidden");   
        } else if (picks) {
            for (let pick of picks){
                if (pick != "") {
                    $("#" + pick).attr("Checked", true);
                }
            }
        } 
    }
}

function updatePrice(order) {
    order.pizzaPrice = 0.00;
    if (order.crustChoice == "deep"){
        order.pizzaPrice += 5.00;
        console.log(order.pizzaPrice);
    }

    switch(order.pizzaSize){
        case 'sm':
            order.pizzaPrice += 7.99;
            console.log("small");
            console.log(order.pizzaPrice);
            break;

        case 'md':
            order.pizzaPrice += 11.99;
            console.log("medium");
            console.log(order.pizzaPrice);
            break;

        case 'lg':
            order.pizzaPrice += 15.99;
            console.log("large");
            console.log(order.pizzaPrice);
            break;
    }

    if (order.toppingsMeat !== null){
        for (let topping of order.toppingsMeat){
            if (topping == "bacon" || topping == "meat-lover"){
                order.pizzaPrice += 2.50;
                console.log(order.pizzaPrice);
            }else {
                order.pizzaPrice += 1.50;
                console.log(order.pizzaPrice);
            }
        }
    }

    if (order.toppingsMisc !== null){
        for (let topping of order.toppingsMisc){
            if (topping == "olives-black" || topping == "olives-green"){
                order.pizzaPrice += 2.00;
                console.log(order.pizzaPrice);
            }else {
                order.pizzaPrice += 1.00;
                console.log(order.pizzaPrice);
            }
        }
    }
    addPrice(order.pizzaPrice);
}

function addPrice(price) {
    $(".price-container h4").remove();
    let $newPrice = $("<h4>").text("PRICE: $" + price.toFixed(2));
    $(".price-container").append($newPrice);
}

function createOrder() {
    return {
        crustChoice: null,
        pizzaSize: null,
        pizzaPrice: 0.00,
        toppingsMeat: [],
        toppingsMisc: []
    };
}

function saveOrder(pizzaOrder) {
    sessionStorage.pizza_order = JSON.stringify(pizzaOrder);
}

function getOrder() {
    return (sessionStorage['pizza_order'])
        ? JSON.parse(sessionStorage['pizza_order'])
        : createOrder();
}

// function sayHello() {
//     alert("Hello!");
// }
//
// sayHello();

// let sayHello = function(name) {
//     alert("hello " + name);
// };
//
// sayHello(sayHello);

// let sum = (a, b) => {return a + b;}


// let donnaAge = 23;
// let donnaName = "Donna";
// let favColor = "brown";
//
// let donna = {
//     age: 23,
//     name: "Donna",
//     favColor: "brown",
// };
//
// console.log(donna);
//
//
// let i;
// for (i = 0; i < 10; i++) {
//
//     console.log("i is : " + i);
// }
// console.log("Done iteration, i is: " + i);

//
// let obj1 = {};
// let obj2 = {};
// let obj3 = {};
// let obj4 = {};
// let obj5 = {};
//
// let myObjects = [
//     28,
//     13,
//     "hello",
//     'c',
//     12.3,
//     -18,
//     {
//         age: 23,
//         name: "Donna",
//         favColor: "brown"
//     }
// ];
//

// let donna = {
//     name: "Donna",
//     favSongGenre: 'jazz'
// };

// localStorage['donna'] = JSON.stringify(donna);
//
//
// let elly = JSON.parse(localStorage['donna']);
//
// elly.name = "Elly";
// console.log(elly);









