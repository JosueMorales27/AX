function calculateTotal() {
    // Get the quantities and prices of each item
    let polos = parseInt(document.getElementById("polos").value) || 0;
    let tshirts = parseInt(document.getElementById("tshirts").value) || 0;
    let shoes = parseInt(document.getElementById("shoes").value) || 0;
    let sandals = parseInt(document.getElementById("sandals").value) || 0;
    let bags120 = parseInt(document.getElementById("bags120").value) || 0;
    let bags160 = parseInt(document.getElementById("bags160").value) || 0;
    let socks7_5 = parseInt(document.getElementById("socks7_5").value) || 0;
    let socks5 = parseInt(document.getElementById("socks5").value) || 0;
    let socks10 = parseInt(document.getElementById("socks10").value) || 0;
    let glasses = parseInt(document.getElementById("glasses").value) || 0;
    let clearanceItems = parseInt(document.getElementById("clearanceItems").value) || 0;
    let watchPrice = parseFloat(document.getElementById("watchPrice").value) || 0;

    let sweaters = parseInt(document.getElementById("sweaters").value) || 0;
    let sweaterPrice = parseFloat(document.getElementById("sweaterPrice").value) || 0;
    let pants = parseInt(document.getElementById("pants").value) || 0;
    let pantsPrice = parseFloat(document.getElementById("pantsPrice").value) || 0;
    let dresses = parseInt(document.getElementById("dresses").value) || 0;
    let dressesPrice = parseFloat(document.getElementById("dressesPrice").value) || 0;
    let dressyShirts = parseInt(document.getElementById("dressyShirts").value) || 0;
    let dressyShirtsPrice = parseFloat(document.getElementById("dressyShirtsPrice").value) || 0;
    let shorts = parseInt(document.getElementById("shorts").value) || 0;
    let shortsPrice = parseFloat(document.getElementById("shortsPrice").value) || 0;

    let regularPolos = parseInt(document.getElementById("regularPolos").value) || 0;
    let regularPolosPrice = parseFloat(document.getElementById("regularPolosPrice").value) || 0;
    let denimGraphicTees = parseInt(document.getElementById("denimGraphicTees").value) || 0;
    let denimGraphicTeesPrice = parseFloat(document.getElementById("denimGraphicTeesPrice").value) || 0;

    let clearanceShirts = parseInt(document.getElementById("clearanceShirts").value) || 0;
    let clearanceJackets = parseInt(document.getElementById("clearanceJackets").value) || 0;
    let clearanceJeans30 = parseInt(document.getElementById("clearanceJeans30").value) || 0;
    let clearanceJeans40 = parseInt(document.getElementById("clearanceJeans40").value) || 0;

    // Prices of standard items
    let poloPrice = 49.99;
    let tshirtPrice = 39.99;
    let shoesPrice = 69.99;
    let sandalPrice = 19.99;
    let bag120Price = 120;
    let bag160Price = 160;
    let sock7_5Price = 7.50;
    let sock5Price = 5.00;
    let sock10Price = 10.00;
    let glassesPrice = 30.00;
    let clearanceItemPrice = 20.00;

    let clearanceShirtPrice = 29.99;
    let clearanceJacketPrice = 79.99;
    let clearanceJean30Price = 29.99;
    let clearanceJean40Price = 39.99;

    // Calculate subtotal for standard items
    let subtotal = (polos * poloPrice) + (tshirts * tshirtPrice) + 
        (shoes * shoesPrice) + (sandals * sandalPrice) + 
        (bags120 * bag120Price) + (bags160 * bag160Price) + 
        (socks7_5 * sock7_5Price) + (socks5 * sock5Price) + (socks10 * sock10Price) + 
        (glasses * glassesPrice) + (clearanceItems * clearanceItemPrice) + 
        (clearanceShirts * clearanceShirtPrice) + (clearanceJackets * clearanceJacketPrice) + 
        (clearanceJeans30 * clearanceJean30Price) + (clearanceJeans40 * clearanceJean40Price);

    // Calculate subtotal for discounted items
    let discountedSubtotal = (sweaters * sweaterPrice * 0.5) + (pants * pantsPrice * 0.5) + 
        (dresses * dressesPrice * 0.5) + (dressyShirts * dressyShirtsPrice * 0.5) + (shorts * shortsPrice * 0.5);

    let regularSubtotal = (regularPolos * poloPrice) + (denimGraphicTees * tshirtPrice);

    subtotal += discountedSubtotal + regularSubtotal;

    // Apply shoe discount
    if (shoes >= 3) {
        subtotal -= shoes * 20;  // Apply $20 discount per pair if 3 or more pairs
    } else if (shoes == 2) {
        subtotal -= shoes * 10;  // Apply $10 discount per pair if 2 pairs
    }

    // Calculate total discount
    let baseDiscount = parseFloat(document.getElementById("discount").value) || 0;
    let additionalDiscount = 0;

    if (subtotal > 150) {
        additionalDiscount = 25;
    }

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

    // Calculate savings
    let totalSavings = (sweaters * sweaterPrice * 0.5) + (pants * pantsPrice * 0.5) + 
        (dresses * dressesPrice * 0.5) + (dressyShirts * dressyShirtsPrice * 0.5) + (shorts * shortsPrice * 0.5) +
        ((regularPolos * regularPolosPrice) - (regularPolos * poloPrice)) + 
        ((denimGraphicTees * denimGraphicTeesPrice) - (denimGraphicTees * tshirtPrice));

    // Display the results
    document.getElementById("subtotal").textContent = "Subtotal: $" + subtotal.toFixed(2);
    document.getElementById("discountAmount").textContent = "Discount (" + totalDiscountRate + "%): -$" + discountAmount.toFixed(2);
    document.getElementById("taxAmount").textContent = "Tax: $" + taxAmount.toFixed(2);
    document.getElementById("totalPrice").textContent = "Total Price: $" + totalPrice.toFixed(2);
    document.getElementById("watchFinalPrice").textContent = "Watch Final Price: $" + watchFinalPrice.toFixed(2);
    document.getElementById("savings").textContent = "Total Savings: $" + totalSavings.toFixed(2);

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
    itemCount += parseInt(document.getElementById("sweaters").value) || 0;
    itemCount += parseInt(document.getElementById("pants").value) || 0;
    itemCount += parseInt(document.getElementById("dresses").value) || 0;
    itemCount += parseInt(document.getElementById("dressyShirts").value
