// Function to update the footer with current year and last modified date
function updateFooter() {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    document.getElementById("year").textContent = currentYear;
    document.getElementById("lastModified").textContent = lastModified;
}

// Function to calculate wind chill
function calculateWindChill(temp, windSpeed) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1);
}

// Function to display wind chill
function displayWindChill() {
    const temperature = 10; // Static value for temperature in °C
    const windSpeed = 5; // Static value for wind speed in km/h
    let windChill = "N/A";

    if (temperature <= 10 && windSpeed > 4.8) {
        windChill = calculateWindChill(temperature, windSpeed) + " °C";
    }

    document.getElementById("windChill").textContent = windChill;
}

// Run functions on page load
document.addEventListener("DOMContentLoaded", function() {
    updateFooter();
    displayWindChill();
});
