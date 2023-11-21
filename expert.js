function submitForm() {
    const formData = new FormData(document.getElementById('appointmentForm'));

    fetch('submit_form.php', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Request sent successfully!');
            // reset the form or redirect the user to a thank-you page
        } else {
            alert('Failed to send request. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    });
}
