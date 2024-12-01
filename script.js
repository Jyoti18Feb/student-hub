function showStudyMaterialOptions() {
    document.getElementById('study-material-options').classList.remove('hidden');
}

function hideStudyMaterialOptions() {
    document.getElementById('study-material-options').classList.add('hidden');
}

function openLink(url) {
    window.open(url, '_blank'); // Opens the link in a new tab
}

function navigateTo(section) {
    alert("Navigating to " + section);
    // Here you can implement the actual navigation logic if needed
}

// Optional: Function to show notifications (you can customize this)
function showNotification() {
    alert("You have new notifications!");
}

// Lost and Found Form Handling
document.getElementById('itemForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const type = document.getElementById('type').value;
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const contact = document.getElementById('contact').value;

    const itemCard = document.createElement('div');
    itemCard.innerHTML = `
        <h3>${type === 'lost' ? '<i class="fas fa-exclamation-circle"></i> Lost' : '<i class="fas fa-check-circle"></i> Found'}: ${name}</h3>
        <p><strong>Description:</strong> ${description}</p>
        <p><strong>Contact:</strong> ${contact}</p>
    `;

    const itemsList = document.getElementById('itemsList');
    itemsList.querySelector('.placeholder')?.remove();
    itemsList.prepend(itemCard);

    document.getElementById('itemForm').reset();
});
// Navigate to Lost and Found page
function openLostAndFoundPage() {
    window.location.href = 'lost-and-found.html';
}

// Navigate back to Home Page
function goBackToHome() {
    window.location.href = 'index.html';
}
