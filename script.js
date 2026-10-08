document.getElementById('messageBtn').addEventListener('click', async () => {
    try {
        const response = await fetch('/api/message');
        const data = await response.json();
        document.getElementById('messageDisplay').textContent = data.message;
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('messageDisplay').textContent = 'Failed to load message';
    }
});
