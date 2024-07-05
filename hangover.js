let products = {
    sandals: { originalPrice: 29.99, price: 19.99, quantity: 0 },
    polos: { originalPrice: 70.00, price: 49.99, quantity: 0 },
    graphicTees: { originalPrice: 60.00, price: 39.99, quantity: 0 },
    jeans: { originalPrice: 110.00, price: 59.99, quantity: 0 },
    pimaShirt: { originalPrice: 40.00, price: 29.99, quantity: 0 },
    shoes: { originalPrice: 190.00, price: 69.99, quantity: 0 },
    discount30: { originalPrice: 0, price: 0, quantity: 0 },
    discount40: { originalPrice: 0, price: 0, quantity: 0 },
    discount50: { originalPrice: 0, price: 0, quantity: 0 },
    clearance2999: { originalPrice: 29.99, price: 29.99, quantity: 0 },
    clearance1999: { originalPrice: 19.99, price: 19.99, quantity: 0 },
    clearance3999: { originalPrice: 39.99, price: 39.99, quantity: 0 },
    clearance4999: { originalPrice: 49.99, price: 49.99, quantity: 0 },
    clearance7999: { originalPrice: 79.99, price: 79.99, quantity: 0 }
};

const baseHourlyRate = 16.85;
const commissionRate = 0.01; // 1%

function updateQuantity(product, change, discount = 0) {
    products[product].quantity += change;
    if (products[product].quantity < 0) {
        products[product].quantity = 0;
    }
    if (product === 'shoes') {
        applyShoeDiscount();
    }
    if (discount > 0) {
        updateDiscountedPrice(discount);
    }
    updateTotals();
}

function applyShoeDiscount() {
    const quantity = products.shoes.quantity;
    if (quantity >= 3) {
        products.shoes.price = 49.99;
    } else if (quantity >= 2) {
        products.shoes.price = 59.99;
    } else {
        products.shoes.price = 69.99;
    }
}

function updateTotals() {
    let subtotal = 0;
    let totalSavings = 0;
    for (let key in products) {
        subtotal += products[key].price * products[key].quantity;
        totalSavings += (products[key].originalPrice - products[key].price) * products[key].quantity;
    }
    let tax = subtotal * 0.08;
    let total = subtotal + tax;

    document.getElementById('subtotalDisplay').innerText = `Subtotal: $${subtotal.toFixed(2)}`;
    document.getElementById('taxDisplay').innerText = `Tax: $${tax.toFixed(2)}`;
    document.getElementById('totalDisplay').innerText = `Total: $${total.toFixed(2)}`;
    document.getElementById('totalSavingsDisplay').innerText = `Total Savings: $${totalSavings.toFixed(2)}`;

    let discountedSubtotal = (subtotal - calculateClearanceSubtotal()) * 0.7 + calculateClearanceSubtotal() * 0.5;
    let discountedTax = discountedSubtotal * 0.08;
    let discountedTotal = discountedSubtotal + discountedTax;

    document.getElementById('discountedSubtotalDisplay').innerText = `Subtotal after Discount: $${discountedSubtotal.toFixed(2)}`;
    document.getElementById('newTotalDisplay').innerText = `New Total after 30% Off: $${discountedTotal.toFixed(2)}`;
}

function calculateClearanceSubtotal() {
    let clearanceSubtotal = 0;
    for (let key in products) {
        if (key.startsWith('clearance')) {
            clearanceSubtotal += products[key].price * products[key].quantity;
        }
    }
    return clearanceSubtotal;
}

function updateDiscountedPrice(discount) {
    let priceInputId = `priceInput${discount}`;
    let price = parseFloat(document.getElementById(priceInputId).value);
    if (isNaN(price)) {
        return;
    }
    let discountedPrice = price * ((100 - discount) / 100);
    products[`discount${discount}`].originalPrice = price;
    products[`discount${discount}`].price = discountedPrice;
    updateTotals();
}

function displaySaleCount() {
    let itemCount = 0;
    let totalSales = 0;
    for (let key in products) {
        itemCount += products[key].quantity;
        totalSales += products[key].price * products[key].quantity;
    }

    let commission = totalSales * commissionRate;
    let updatedHourlyRate = baseHourlyRate + commission;

    document.getElementById('itemCount').innerText = `Total Items Sold: ${itemCount}`;
    document.getElementById('hourlyRate').innerText = `Hourly Rate with Commission: $${updatedHourlyRate.toFixed(2)}`;
    document.getElementById('totalSales').innerText = `Total Sales: $${totalSales.toFixed(2)}`;
}

function resetInputs() {
    for (let key in products) {
        products[key].quantity = 0;
    }
    updateTotals();
    document.getElementById('discountedSubtotalDisplay').innerText = 'Subtotal after Discount: $0.00';
    document.getElementById('newTotalDisplay').innerText = 'New Total after 30% Off: $0.00';
    document.getElementById('itemCount').innerText = 'Total Items Sold: 0';
    document.getElementById('hourlyRate').innerText = 'Hourly Rate with Commission: $0.00';
    document.getElementById('totalSales').innerText = 'Total Sales: $0.00';
    document.getElementById('priceInput30').value = '';
    document.getElementById('priceInput40').value = '';
    document.getElementById('priceInput50').value = '';
}

let currentImages = {
    '30': 0,
    '40': 0,
    '50': 0,
    'clearance': 0
};

const images = {
    '30': [
        'https://www.armani.com/variants/images/1647597338852234/F/w960.jpg'
    ],
    '40': [
        'https://www.armani.com/variants/images/1647597326830535/F/w960.jpg',
        'https://www.armani.com/variants/images/1647597284671535/F/w960.jpg',
        'https://www.armani.com/variants/images/1647597338703108/F/w480.jpg'
    ],
    '50': [
        'https://www.armani.com/variants/images/1647597284674571/F/w960.jpg',
        'https://www.armani.com/variants/images/1647597298753123/F/w960.jpg',
        'https://www.armani.com/variants/images/1647597284672681/F/w960.jpg',
        'https://www.armani.com/variants/images/1647597329634501/F/w960.jpg'
    ],
    'clearance': [
        'https://tse2.mm.bing.net/th?id=OIP.blqJyOh9fWHA8VHhS8UFAgHaHX&pid=Api&P=0&h=220'
    ]
};

function nextImage(discount) {
    currentImages[discount] = (currentImages[discount] + 1) % images[discount].length;
    document.getElementById(`image${discount}`).src = images[discount][currentImages[discount]];
}

function prevImage(discount) {
    currentImages[discount] = (currentImages[discount] - 1 + images[discount].length) % images[discount].length;
    document.getElementById(`image${discount}`).src = images[discount][currentImages[discount]];
}
