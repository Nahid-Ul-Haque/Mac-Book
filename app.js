// memory price
var bestPrice = 1299;
var eMemPrice = 0;
var eStPrice = 0;
var delivCost = 200;
var total = 0;
var offer = 0.2;//20%
var promoCode = 'stevekaku';
var usedPromo = '';
var manageTotal = 0;



function setStaticValues() {
    total = bestPrice + eMemPrice + eStPrice + delivCost
    driver()
}
function driver() {
    document.getElementById("price-input").innerHTML = '$' + bestPrice;
    document.getElementById("memory-cost").innerHTML = '$' + eMemPrice;
    document.getElementById("storage-cost").innerHTML = '$' + eStPrice;
    document.getElementById("delivery-cost").innerHTML = '$' + delivCost;
    document.getElementById("total-cost1").innerHTML = '$' + total;
    document.getElementById("total-cost2").innerHTML = '$' + total;
}


function memoryFree() {
    eMemPrice = 0;
    setStaticValues()
}


function memoryCost() {
    eMemPrice = 180;
    setStaticValues()
}






//
// // Storage price
//
function storageFree() {
    eStPrice = 0;
    setStaticValues()

}
function storageHalfCost() {
    eStPrice = 100;
    setStaticValues()

}
function storageFullCost() {
    eStPrice = 180;
    setStaticValues()

}
//
// // Delivery Cost
//
function deliveryFree() {
    delivCost = 200;
    setStaticValues()
}
function deliveryCost() {
    delivCost = 220;
    setStaticValues()

}
//
// // Total Price
//
// function updateTotal() {
//     const bestPrice = document.getElementById('price-input').value;
//     console.log(bestPrice);
//     const memoryPrice = document.getElementById('memory-cost').innerText;
//     const storagePrice = document.getElementById('storage-cost').innerText;
//     const deliveryPrice = document.getElementById('delivery-cost').innerText;
//     const totalPrice = bestPrice + memoryPrice + storagePrice + deliveryPrice;
//     document.getElementById('total-cost').innerHTML = totalPrice;
//
//
// };
//
//
// // promo code    stevekaku
function applyButton() {
    const typedWords = document.getElementById('typed-words').value;
    if (typedWords == promoCode) {
        if (total > total * offer && usedPromo != promoCode) {
            manageTotal = total;
            total = total - (total * offer);
            usedPromo = promoCode;
            driver()
        }
    }
    else if (manageTotal != 0 && typedWords != promoCode) {
        console.log(typedWords)
        total = manageTotal;
        driver()

    }
}
// typedWords.innerText = '';
//
