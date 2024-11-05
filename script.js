// Set the date and time of the event
const eventDate = new Date("December 12, 2024 18:00:00").getTime();

// Function to update the countdown timer
function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = eventDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Display the result in the #timer element
    document.getElementById("timer").innerText = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is finished, display a message
    if (timeRemaining < 0) {
        clearInterval(countdownInterval);
        document.getElementById("timer").innerText = "The event has started!";
    }
}

// Update the countdown every 1 second
const countdownInterval = setInterval(updateCountdown, 1000);