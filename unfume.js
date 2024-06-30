function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

function updateQuantity(productId, change) {
    let input = document.getElementById(productId);
    let currentValue = parseInt(input.value) || 0;
    let newValue = currentValue + change;
    if (newValue >= 0) {
        input.value = newValue;
        calculateTotal();
    }
}

function calculateTotal() {
    // Get the quantities and prices of each item
    let polos = parseInt(document.getElementById("polos").value) || 0;
    let graphicTees = parseInt(document.getElementById("graphicTees").value) || 0;
    let dressShirts = parseInt(document.getElementById("dressShirts").value) || 0;
    let dressShirtPrice = parseFloat(document.getElementById("dressShirtPrice").value) || 0;
    let sweaters = parseInt(document.getElementById("sweaters").value) || 0;
    let sweaterPrice = parseFloat(document.getElementById("sweaterPrice").value) || 0;
    let jackets = parseInt(document.getElementById("jackets").value) || 0;
    let jacketPrice = parseFloat(document.getElementById("jacketPrice").value) || 0;
    let shorts = parseInt(document.getElementById("shorts").value) || 0;
    let shortsPrice = parseFloat(document.getElementById("shortsPrice").value) || 0;
    let skirts = parseInt(document.getElementById("skirts").value) || 0;
    let skirtPrice = parseFloat(document.getElementById("skirtPrice").value) || 0;
    let coats = parseInt(document.getElementById("coats").value) || 0;
    let coatPrice = parseFloat(document.getElementById("coatPrice").value) || 0;
    let socks = parseInt(document.getElementById("socks").value) || 0;
    let belts = parseInt(document.getElementById("belts").value) || 0;
    let beltPrice = parseFloat(document.getElementById("beltPrice").value) || 0;
    let hats = parseInt(document.getElementById("hats").value) || 0;
    let bags = parseInt(document.getElementById("bags").value) || 0;
    let bagPrice = parseFloat(document.getElementById("bagPrice").value) || 0;
    let glasses = parseInt(document.getElementById("glasses").value) || 0;
    let glassesPrice = parseFloat(document.getElementById("glassesPrice").value) || 0;
    let watches = parseInt(document.getElementById("watches").value) || 0;
    let watchPrice = parseFloat(document.getElementById("watchPrice").value) || 0;
    let clearanceItems = parseInt(document.getElementById("clearanceItems").value) || 0;
    let clearanceItemPrice = parseFloat(document.getElementById("clearanceItemPrice").value) || 0;

    // Prices of standard items
    let poloPrice = 49.99;
    let teePrice = 39.99;
    let sockPrice = 9.99;
    let hatPrice = 19.99;

    // Calculate subtotal before any discounts
    let subtotalBeforeDiscount = (polos * poloPrice) + (graphicTees * teePrice) +
                                 (dressShirts * dressShirtPrice * 0.5) +
                                 (sweaters * sweaterPrice * 0.5) +
                                 (jackets * jacketPrice * 0.5) +
                                 (shorts * shortsPrice * 0.5) +
                                 (skirts * skirtPrice * 0.5) +
                                 (coats * coatPrice * 0.5) +
                                 (socks * sockPrice) +
                                 (belts * beltPrice * 0.5) +
                                 (hats * hatPrice) +
                                 (bags * bagPrice * 0.6) +
                                 (glasses * glassesPrice * 0.6) +
                                 (watches * watchPrice * 0.6) +
                                 (clearanceItems * clearanceItemPrice * 0.3);

    // Apply 30% additional discount
    let additionalDiscount = 0.3;
    let subtotalAfterDiscount = subtotalBeforeDiscount * (1 - additionalDiscount);

    // Calculate tax and total
    let taxRate = 0.08;
    let taxAmount = subtotalAfterDiscount * taxRate;
    let totalPrice = subtotalAfterDiscount + taxAmount;

    // Update the header display
    document.getElementById("subtotalDisplay").textContent = "Subtotal: $" + subtotalBeforeDiscount.toFixed(2);
    document.getElementById("discountedSubtotalDisplay").textContent = "Subtotal After 30% Discount: $" + subtotalAfterDiscount.toFixed(2);
    document.getElementById("taxDisplay").textContent = "Tax: $" + taxAmount.toFixed(2);
    document.getElementById("savingsDisplay").textContent = "Savings: $" + (subtotalBeforeDiscount - subtotalAfterDiscount).toFixed(2);
    document.getElementById("totalDisplay").textContent = "Total: $" + totalPrice.toFixed(2);

    // Show results
    document.getElementById("subtotal").textContent = "Subtotal: $" + subtotalBeforeDiscount.toFixed(2);
    document.getElementById("taxAmount").textContent = "Tax: $" + taxAmount.toFixed(2);
    document.getElementById("totalPrice").textContent = "Total Price: $" + totalPrice.toFixed(2);
    document.getElementById("discountedTotal").textContent = "Total After 30% Discount: $" + subtotalAfterDiscount.toFixed(2);
}

function displaySaleCount() {
    let items = document.querySelectorAll('.quantity-input');
    let totalItems = 0;
    items.forEach(item => {
        totalItems += parseInt(item.value) || 0;
    });
    document.getElementById('itemCount').textContent = `Total Items Sold: ${totalItems}`;
}

function resetInputs() {
    document.querySelectorAll('input[type="number"]').forEach(input => input.value = 0);
    document.querySelectorAll('.result').forEach(el => el.style.display = 'none');
    calculateTotal();
}

