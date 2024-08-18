let selectedHotel = '';
let pricePerNight = 0;

function bookHotel(hotelName, price) {
    selectedHotel = hotelName;
    pricePerNight = price;
    document.getElementById('selected-hotel').innerText = `Selected Hotel: ${selectedHotel}`;
    openModal();
    calculatePrice(); // Calculate initial price after opening the modal
}

function openModal() {
    document.getElementById('checkout-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('checkout-modal').style.display = 'none';
}

function calculatePrice() {
    const numPeople = document.getElementById('num-people').value;
    const checkInDate = new Date(document.getElementById('checkin-date').value);
    const checkOutDate = new Date(document.getElementById('checkout-date').value);
    
    // Calculate the number of nights
    const timeDiff = checkOutDate - checkInDate;
    const numberOfNights = timeDiff / (1000 * 3600 * 24); // Convert time difference to days

    if (numberOfNights > 0 && numPeople > 0) {
        // Calculate total price
        const totalPrice = pricePerNight * numPeople * numberOfNights;
        document.getElementById('total-price').innerText = `$${totalPrice.toFixed(2)}`;
    } else {
        document.getElementById('total-price').innerText = "$0.00"; // Handle invalid input case
    }
}

function proceedToPayment() {
    alert('Proceeding to payment...');
    // Add your payment logic here
}

// Ensure the modal opens properly by attaching event listeners to DOM elements
document.getElementById('num-people').addEventListener('input', calculatePrice);
document.getElementById('checkin-date').addEventListener('change', calculatePrice);
document.getElementById('checkout-date').addEventListener('change', calculatePrice);

// Ensure modal can close if clicked outside
window.onclick = function(event) {
    const modal = document.getElementById('checkout-modal');
    if (event.target === modal) {
        closeModal();
    }
}

// Optional: Attach close modal function to a close button within the modal
document.getElementById('close-modal-btn').addEventListener('click', closeModal);
