function toggleUnits() {
    const isChecked = document.getElementById('unitToggle').checked;
    // This is a simplified example. You would wrap your table data in spans:
    // <span class="metric">63.7 m</span> <span class="imperial hidden">(209 ft)</span>
    
    const metrics = document.querySelectorAll('.metric');
    const imperials = document.querySelectorAll('.imperial');

    if (isChecked) {
        metrics.forEach(el => el.style.display = 'none');
        imperials.forEach(el => el.style.display = 'inline');
    } else {
        metrics.forEach(el => el.style.display = 'inline');
        imperials.forEach(el => el.style.display = 'none');
    }
}