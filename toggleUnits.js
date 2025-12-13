/**
 * boeing777.js
 * Handles unit toggling for the specifications table.
 */

// Wait for the HTML to load completely before running this
document.addEventListener('DOMContentLoaded', () => {
    
    // Find the toggle checkbox by its ID
    const toggleButton = document.getElementById('unitToggle');

    // If the button exists, listen for 'change' events (checking/unchecking)
    if (toggleButton) {
        toggleButton.addEventListener('change', toggleUnits);
    }
});

function toggleUnits() {
    // Get the current state of the checkbox
    const isChecked = document.getElementById('unitToggle').checked;
    
    // Select all elements with the 'metric' class
    const metrics = document.querySelectorAll('.metric');

    metrics.forEach(el => {
        if (isChecked) {
            // If checked, HIDE metric (Imperial stays visible)
            el.style.display = 'none';
        } else {
            // If unchecked, SHOW metric
            el.style.display = 'inline';
        }
    });
}