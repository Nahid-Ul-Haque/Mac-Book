// memory price 

function memoryFree() {
    document.getElementById('memory-cost').innerHTML = "0";

}
function memoryCost() {
    document.getElementById('memory-cost').innerHTML = "180";

}

// Storage price

function storageFree() {
    document.getElementById('storage-cost').innerHTML = '0';

}
function storageHalfCost() {
    document.getElementById('storage-cost').innerHTML = '100';

}
function storageFullCost() {
    document.getElementById('storage-cost').innerHTML = '180';

}

// Delivery Cost

function deliveryFree() {
    document.getElementById('delivery-cost').innerHTML = '0';

}
function deliveryCost() {
    document.getElementById('delivery-cost').innerHTML = '20';

}

// Total Price

function updateTotal() {
    const bestPrice = document.getElementById('price-input').value;
    console.log(bestPrice);
    const memoryPrice = document.getElementById('memory-cost').innerText;
    const storagePrice = document.getElementById('storage-cost').innerText;
    const deliveryPrice = document.getElementById('delivery-cost').innerText;
    const totalPrice = bestPrice + memoryPrice + storagePrice + deliveryPrice;
    document.getElementById('total-cost').innerHTML = totalPrice;


};


// promo code 
function applyButton() {
    const typedWords = document.getElementById('typed-words').innerText;
    if (typedWords == 'stevekaku') {
        totalTax = totalPrice / 20;
    }
}
typedWords.innerText = '';

