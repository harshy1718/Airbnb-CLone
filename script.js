let selectedHotel = '';
let pricePerNight = 0;

function bookHotel(hotelName, price) {
    selectedHotel = hotelName;
    pricePerNight = price;
    document.getElementById('selected-hotel').innerText = `Selected Hotel: ${selectedHotel}`;
    document.getElementById('total-price').innerText = `$${pricePerNight.toFixed(2)}`; // Show initial price
    openModal();
    calculatePrice(); // Calculate price based on current inputs
}

function openModal() {
    document.getElementById('checkout-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('checkout-modal').style.display = 'none';
}

function calculatePrice() {
    const numPeople = parseInt(document.getElementById('num-people').value) || 1; // Default to 1 person if empty
    const checkInDate = new Date(document.getElementById('checkin-date').value);
    const checkOutDate = new Date(document.getElementById('checkout-date').value);
    
    const timeDiff = checkOutDate - checkInDate;
    const numberOfNights = timeDiff / (1000 * 3600 * 24); // Convert time difference to days

    if (numberOfNights > 0 && numPeople > 0) {
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

// Event listeners for input changes
document.getElementById('num-people').addEventListener('input', calculatePrice);
document.getElementById('checkin-date').addEventListener('change', calculatePrice);
document.getElementById('checkout-date').addEventListener('change', calculatePrice);

window.onclick = function(event) {
    const modal = document.getElementById('checkout-modal');
    if (event.target === modal) {
        closeModal();
    }
}

// Optional: Attach close modal function to a close button within the modal
document.getElementById('close-modal-btn').addEventListener('click', closeModal);
