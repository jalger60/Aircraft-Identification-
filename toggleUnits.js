document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('unitToggle');
    
    // Set initial state: Ensure Metric is hidden and Imperial is shown on load
    // (This prevents both from showing up at the same time if CSS didn't catch it)
    toggleUnits(); 

    if (toggleButton) {
        toggleButton.addEventListener('change', toggleUnits);
    }
});

function toggleUnits() {
    // Check if the box is checked (True = Metric Mode)
    const isMetric = document.getElementById('unitToggle').checked;
    
    const imperialElements = document.querySelectorAll('.imperial');
    const metricElements = document.querySelectorAll('.metric');

    if (isMetric) {
        // METRIC MODE: Show metric, Hide imperial
        imperialElements.forEach(el => el.style.display = 'none');
        metricElements.forEach(el => el.style.display = 'inline');
    } else {
        // IMPERIAL MODE: Show imperial, Hide metric
        imperialElements.forEach(el => el.style.display = 'inline');
        metricElements.forEach(el => el.style.display = 'none');
    }
}