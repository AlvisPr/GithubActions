function updateMessage() {
    const messages = [
        "Hello from GitHub Actions!",
        "Deployment successful!",
        "CI/CD is awesome!",
        "GitHub Actions rocks!"
    ];
    
    const messageElement = document.getElementById('message');
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    messageElement.textContent = randomMessage;
}
