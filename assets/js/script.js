// Function to load common components
function includeHTML() {
    document.querySelectorAll('[data-include]').forEach(el => {
        fetch(el.getAttribute('data-include'))
            .then(response => response.text())
            .then(data => el.innerHTML = data);
    });
}

// Load components when DOM is ready
document.addEventListener("DOMContentLoaded", includeHTML);
