document.addEventListener('DOMContentLoaded', function() {
    const TAX_RATE = 0.08; // Tax rate of 8%
    const COMMISSION_RATE = 0.01; // 1% commission on total sales
    const ADDITIONAL_DISCOUNT_THRESHOLD = 150; // $150 threshold for additional discount
    const ADDITIONAL_DISCOUNT_RATE = 0.25; // 25% additional discount
    const BASE_HOURLY_RATE = 16.85; // Base hourly rate for sales associate

    function calculateTotal() {
        const polos = parseFloat(document.getElementById('polos').value) || 0;
        const tshirts = parseFloat(document.getElementById('tshirts').value) || 0;
        let shoes = parseFloat(document.getElementById('shoes').value) || 0;
        const sandals = parseFloat(document.getElementById('sandals').value) || 0;

        const sweaters = parseFloat(document.getElementById('sweaters').value) || 0;
        const sweaterPrice = parseFloat(document.getElementById('sweaterPrice').value) || 0;
        const pants = parseFloat(document.getElementById('pants').value) || 0;
        const pantsPrice = parseFloat(document.getElementById('pantsPrice').value) || 0;
        const dresses = parseFloat(document.getElementById('dresses').value) || 0;
        const dressesPrice = parseFloat(document.getElementById('dressesPrice').value) || 0;
        const dressyShirts = parseFloat(document.getElementById('dressyShirts').value) || 0;
        const dressyShirtsPrice = parseFloat(document.getElementById('dressyShirtsPrice').value) || 0;
        const shorts = parseFloat(document.getElementById('shorts').value) || 0;
        const shortsPrice = parseFloat(document.getElementById('shortsPrice').value) || 0;

        const socks = parseFloat(document.getElementById('socks').value) || 0;
        const socksPrice = parseFloat(document.getElementById('socksPrice').value) || 0;
        const hats = parseFloat(document.getElementById('hats').value) || 0;
        const hatsPrice = parseFloat(document.getElementById('hatsPrice').value) || 0;
        const underwear = parseFloat(document.getElementById('underwear').value) || 0;
        const underwearPrice = parseFloat(document.getElementById('underwearPrice').value) || 0;

        const socks7_5 = parseFloat(document.getElementById('socks7_5').value) || 0;
        const socks5 = parseFloat(document.getElementById('socks5').value) || 0;
        const socks10 = parseFloat(document.getElementById('socks10').value) || 0;

        const bags40 = parseFloat(document.getElementById('bags40').value) || 0;
        const bagsPrice40 = parseFloat(document.getElementById('bagsPrice40').value) || 0;
        const glasses40 = parseFloat(document.getElementById('glasses40').value) || 0;
        const glassesPrice40 = parseFloat(document.getElementById('glassesPrice40').value) || 0;
        const watches40 = parseFloat(document.getElementById('watches40').value) || 0;
        const watchesPrice40 = parseFloat(document.getElementById('watchesPrice40').value) || 0;

        // Standard items prices
        const polosPrice = 49.99;
        const tshirtsPrice = 39.99;
        const sandalsPrice = 19.99;

        // Calculate discounted items prices
        const sweatersTotal = sweaters * (sweaterPrice * 0.5);
        const pantsTotal = pants * (pantsPrice * 0.5);
        const dressesTotal = dresses * (dressesPrice * 0.5);
        const dressyShirtsTotal = dressyShirts * (dressyShirtsPrice * 0.5);
        const shortsTotal = shorts * (shortsPrice * 0.5);
        const socksTotal = socks * (socksPrice * 0.5);
        const hatsTotal = hats * (hatsPrice * 0.5);
        const underwearTotal = underwear * (underwearPrice * 0.5);

        // Calculate 40% off items
        const bags40Total = bags40 * (bagsPrice40 * 0.6);
        const glasses40Total = glasses40 * (glassesPrice40 * 0.6);
        const watches40Total = watches40 * (watchesPrice40 * 0.6);

        // Calculate shoes promotion
        let shoesTotal = 0;
        if (shoes === 1) {
            shoesTotal = shoes * 69.99;
        } else if (shoes === 2) {
            shoesTotal = shoes * 59.99;
        } else if (shoes >= 3) {
            shoesTotal = shoes * 49.99;
        }

        // Calculate subtotal
        const subtotal = (polos * polosPrice) + (tshirts * tshirtsPrice) + shoesTotal + (sandals * sandalsPrice) +
                         sweatersTotal + pantsTotal + dressesTotal + dressyShirtsTotal + shortsTotal +
                         socksTotal + hatsTotal + underwearTotal + (socks7_5 * 7.5) + (socks5 * 5) +
                         (socks10 * 10) + bags40Total + glasses40Total + watches40Total;

        // Apply additional discount if applicable
        let totalAfterDiscount = subtotal;
        if (subtotal > ADDITIONAL_DISCOUNT_THRESHOLD) {
            totalAfterDiscount *= (1 - ADDITIONAL_DISCOUNT_RATE);
        }

        // Calculate tax
        const taxAmount = totalAfterDiscount * TAX_RATE;

        // Calculate final total
        const totalPrice = totalAfterDiscount + taxAmount;

        // Display results
        document.getElementById('subtotal').innerText = `Subtotal: $${subtotal.toFixed(2)}`;
        document.getElementById('taxAmount').innerText = `Tax: $${taxAmount.toFixed(2)}`;
        document.getElementById('totalPrice').innerText = `Total Price: $${totalPrice.toFixed(2)}`;
    }

    function displaySaleCount() {
        const itemCount = (parseInt(document.getElementById('polos').value) || 0) +
                          (parseInt(document.getElementById('tshirts').value) || 0) +
                          (parseInt(document.getElementById('shoes').value) || 0) +
                          (parseInt(document.getElementById('sandals').value) || 0) +
                          (parseInt(document.getElementById('sweaters').value) || 0) +
                          (parseInt(document.getElementById('pants').value) || 0) +
                          (parseInt(document.getElementById('dresses').value) || 0) +
                          (parseInt(document.getElementById('dressyShirts').value) || 0) +
                          (parseInt(document.getElementById('shorts').value) || 0) +
                          (parseInt(document.getElementById('socks').value) || 0) +
                          (parseInt(document.getElementById('hats').value) || 0) +
                          (parseInt(document.getElementById('underwear').value) || 0) +
                          (parseInt(document.getElementById('socks7_5').value) || 0) +
                          (parseInt(document.getElementById('socks5').value) || 0) +
                          (parseInt(document.getElementById('socks10').value) || 0) +
                          (parseInt(document.getElementById('bags40').value) || 0) +
                          (parseInt(document.getElementById('glasses40').value) || 0) +
                          (parseInt(document.getElementById('watches40').value) || 0);

        const totalSales = parseFloat(document.getElementById('totalPrice').innerText.split('$')[1]) || 0;
        const commission = totalSales * COMMISSION_RATE;
        const hourlyRateIncrease = BASE_HOURLY_RATE + (commission / 8);

        document.getElementById('itemCount').innerText = `Total Items Sold: ${itemCount}`;
        document.getElementById('commission').innerText = `Commission: $${commission.toFixed(2)}`;
        document.getElementById('hourlyRateIncrease').innerText = `Hourly Rate Increase: $${hourlyRateIncrease.toFixed(2)}`;

        // Make commission and hourly rate increase visible
        document.getElementById('commission').style.display = 'block';
        document.getElementById('hourlyRateIncrease').style.display = 'block';
    }

    function resetInputs() {
        document.querySelectorAll('input[type="number"]').forEach(input => input.value = 0);
        document.getElementById('subtotal').innerText = '';
        document.getElementById('taxAmount').innerText = '';
        document.getElementById('totalPrice').innerText = '';
        document.getElementById('itemCount').innerText = '';
        document.getElementById('commission').innerText = '';
        document.getElementById('hourlyRateIncrease').innerText = '';
        document.getElementById('commission').style.display = 'none';
        document.getElementById('hourlyRateIncrease').style.display = 'none';
    }

    // Attach the calculateTotal function to the form submit event
    document.querySelector('form').addEventListener('submit', calculateTotal);

    // Attach the displaySaleCount function to the button click event
    document.querySelector('button[onclick="displaySaleCount()"]').addEventListener('click', displaySaleCount);

    // Attach the resetInputs function to the button click event
    document.querySelector('button[onclick="resetInputs()"]').addEventListener('click', resetInputs);
});
