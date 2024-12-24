async function refreshMessage() {
    try {
        const response = await fetch('/');
        const text = await response.text();
        document.getElementById('message').textContent = text;
    } catch (error) {
        document.getElementById('message').textContent = 'Error fetching message';
    }
}

// Load initial message
refreshMessage();
