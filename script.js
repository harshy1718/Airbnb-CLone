let selectedHotel = '';
let pricePerNight = 0;

function bookHotel(hotelName, price) {
    selectedHotel = hotelName;
    pricePerNight = price;
    document.getElementById('selected-hotel').innerText = Selected Hotel: ${selectedHotel};
    document.getElementById('total-price').innerText = pricePerNight;
    openModal();
}

function openModal() {
    document.getElementById('checkout-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('checkout-modal').style.display = 'none';
}

function calculatePrice() {
    const numPeople = document.getElementById('num-people').value;
    const totalPrice = pricePerNight * numPeople;
    document.getElementById('total-price').innerText = totalPrice;
}

function proceedToPayment() {
    alert('Proceeding to payment...');
    // Add your payment logic here
}

window.onclick = function(event) {
    const modal = document.getElementById('checkout-modal');
    if (event.target === modal) {
        closeModal();
    }
}
