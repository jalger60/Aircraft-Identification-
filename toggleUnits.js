function toggleUnits() {
    const isChecked = document.getElementById('unitToggle').checked;
    
    // We only need to target the metric units to hide/show them
    const metrics = document.querySelectorAll('.metric');

    metrics.forEach(el => {
        if (isChecked) {
            // If checked, HIDE metric (Imperial stays visible)
            el.style.display = 'none';
        } else {
            // If unchecked, SHOW metric (Imperial stays visible)
            el.style.display = 'inline';
        }
    });
}