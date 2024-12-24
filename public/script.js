function updateMessage() {
    const messages = [
        "Hello from GitHub Actions!",
        "Deployment successful!",
        "CI/CD is awesome!",
        "GitHub Actions rocks!", 
        "Serverless is the best!"
    ];
    
    const messageElement = document.getElementById('message');
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    messageElement.textContent = randomMessage;
}
