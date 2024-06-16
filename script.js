function calculateTotal() {
    // Get the quantities and prices of each item
    let polos = parseInt(document.getElementById("polos").value) || 0;
    let tshirts = parseInt(document.getElementById("tshirts").value) || 0;
    let shoes = parseInt(document.getElementById("shoes").value) || 0;
    let sandals = parseInt(document.getElementById("sandals").value) || 0;
    let bags120 = parseInt(document.getElementById("bags120").value) || 0;
    let bags160 = parseInt(document.getElementById("bags160").value) || 0;
    let sweaters75 = parseInt(document.getElementById("sweaters75").value) || 0;
    let sweaters60 = parseInt(document.getElementById("sweaters60").value) || 0;
    let pants60 = parseInt(document.getElementById("pants60").value) || 0;
    let pants50 = parseInt(document.getElementById("pants50").value) || 0;
    let watchPrice = parseFloat(document.getElementById("watchPrice").value) || 0;
    let socks7_5 = parseInt(document.getElementById("socks7_5").value) || 0;
    let socks5 = parseInt(document.getElementById("socks5").value) || 0;
    let socks10 = parseInt(document.getElementById("socks10").value) || 0;
    let glasses = parseInt(document.getElementById("glasses").value) || 0;
    let clearanceItems = parseInt(document.getElementById("clearanceItems").value) || 0;

    // Prices of each item
    let poloPrice = 49.99;
    let tshirtPrice = 39.99;
    let shoesPrice = 69.99;
    let sandalPrice = 19.99;
    let bag120Price = 120;
    let bag160Price = 160;
    let sweater75Price = 75;
    let sweater60Price = 60;
    let pant60Price = 60;
    let pant50Price = 50;
    let sock7_5Price = 7.50;
    let sock5Price = 5.00;
    let sock10Price = 10.00;
    let glassesPrice = 30.00;
    let clearanceItemPrice = 20.00;

    // Calculate subtotal
    let subtotal = (polos * poloPrice) + (tshirts * tshirtPrice) + 
        (shoes * shoesPrice) + (sandals * sandalPrice) + 
        (bags120 * bag120Price) + (bags160 * bag160Price) + 
        (sweaters75 * sweater75Price) + (sweaters60 * sweater60Price) + 
        (pants60 * pant60Price) + (pants50 * pant50Price) + 
        (socks7_5 * sock7_5Price) + (socks5 * sock5Price) + (socks10 * sock10Price) + 
        (glasses * glassesPrice) + (clearanceItems * clearanceItemPrice);

    // Apply shoe discount
    if (shoes >= 3) {
        subtotal -= shoes * 20;  // Apply $20 discount per pair if 3 or more pairs
    } else if (shoes == 2) {
        subtotal -= shoes * 10;  // Apply $10 discount per pair if 2 pairs
    }

    // Get the base discount (if any)
    let baseDiscount = parseFloat(document.getElementById("discount").value) || 0;

    // Apply additional discount if subtotal > $150
    const additionalDiscountRate = 25;
    let additionalDiscount = 0;
    if (subtotal > 150) {
        additionalDiscount = additionalDiscountRate;
    }

    // Calculate total discount
    let totalDiscountRate = baseDiscount + additionalDiscount;
    let discountAmount = subtotal * (totalDiscountRate / 100);
    let discountedPrice = subtotal - discountAmount;

    // Calculate tax
    const taxRate = 8.0; // Fixed tax rate
    let taxAmount = discountedPrice * (taxRate / 100);
    let totalPrice = discountedPrice + taxAmount;

    // Calculate discount and tax on watch
    let watchDiscount = watchPrice * 0.40;
    let watchDiscountedPrice = watchPrice - watchDiscount;
    let watchTax = watchDiscountedPrice * (taxRate / 100);
    let watchFinalPrice = watchDiscountedPrice + watchTax;

    // Display the results
    document.getElementById("subtotal").textContent = "Subtotal: $" + subtotal.toFixed(2);
    document.getElementById("discountAmount").textContent = "Discount (" + totalDiscountRate + "%): -$" + discountAmount.toFixed(2);
    document.getElementById("taxAmount").textContent = "Tax: $" + taxAmount.toFixed(2);
    document.getElementById("totalPrice").textContent = "Total Price: $" + totalPrice.toFixed(2);
    document.getElementById("watchFinalPrice").textContent = "Watch Final Price: $" + watchFinalPrice.toFixed(2);

    // Show results
    document.querySelectorAll('.result').forEach(el => el.style.display = 'block');
}

function displaySaleCount() {
    let itemCount = parseInt(document.getElementById("polos").value) || 0;
    itemCount += parseInt(document.getElementById("tshirts").value) || 0;
    itemCount += parseInt(document.getElementById("shoes").value) || 0;
    itemCount += parseInt(document.getElementById("sandals").value) || 0;
    itemCount += parseInt(document.getElementById("bags120").value) || 0;
    itemCount += parseInt(document.getElementById("bags160").value) || 0;
    itemCount += parseInt(document.getElementById("sweaters75").value) || 0;
    itemCount += parseInt(document.getElementById("sweaters60").value) || 0;
    itemCount += parseInt(document.getElementById("pants60").value) || 0;
    itemCount += parseInt(document.getElementById("pants50").value) || 0;
    itemCount += parseInt(document.getElementById("socks7_5").value) || 0;
    itemCount += parseInt(document.getElementById("socks5").value) || 0;
    itemCount += parseInt(document.getElementById("socks10").value) || 0;
    itemCount += parseInt(document.getElementById("glasses").value) || 0;
    itemCount += parseInt(document.getElementById("clearanceItems").value) || 0;

    let totalSale = parseFloat(document.getElementById("totalPrice").textContent.split('$')[1]) || 0;
    let commission = totalSale * 0.01;

    document.getElementById("itemCount").textContent = "Total Items Sold: " + itemCount;
    document.getElementById("commission").textContent = "Commission Earned: $" + commission.toFixed(2);

    document.querySelectorAll('.sale-result').forEach(el => el.style.display = 'block');
}
