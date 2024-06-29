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
    // Repeat for other products

    // Prices of standard items
    let poloPrice = 49.99;
    let teePrice = 39.99;
    // Repeat for other products

    // Calculate subtotal
    let subtotal = (polos * poloPrice) + (graphicTees * teePrice) +
                   (dressShirts * dressShirtPrice * 0.5) +
                   (sweaters * sweaterPrice * 0.5) +
                   (jackets * jacketPrice * 0.5);
    // Repeat for other products

    // Calculate total
    let baseDiscount = 0; // Replace with your discount logic
    let discountAmount = subtotal * (baseDiscount / 100);
    let discountedPrice = subtotal - discountAmount;
    let taxRate = 8.0;
    let taxAmount = discountedPrice * (taxRate / 100);
    let totalPrice = discountedPrice + taxAmount;

    // Update the header display
    document.getElementById("subtotalDisplay").textContent = "Subtotal: $" + subtotal.toFixed(2);
    document.getElementById("totalDisplay").textContent = "Total: $" + totalPrice.toFixed(2);

    // Show results
    document.getElementById("subtotal").textContent = "Subtotal: $" + subtotal.toFixed(2);
    document.getElementById("discountAmount").textContent = "Discount: -$" + discountAmount.toFixed(2);
    document.getElementById("taxAmount").textContent = "Tax: $" + taxAmount.toFixed(2);
    document.getElementById("totalPrice").textContent = "Total Price: $" + totalPrice.toFixed(2);
}

function displaySaleCount() {
    // Logic for displaying sale count
}

function resetInputs() {
    document.querySelectorAll('input[type="number"]').forEach(input => input.value = 0);
    document.querySelectorAll('.result').forEach(el => el.style.display = 'none');
    calculateTotal();
}
