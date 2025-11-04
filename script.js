document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('success-msg').style.display = 'block';
    this.reset();
    setTimeout(() => {
        document.getElementById('success-msg').style.display = 'none';
    }, 3000);
});
