function showCustomAlert() {
    // Create the alert window
    var alertWindow = document.createElement('div');
    alertWindow.classList.add('alert-window');

    // Add the alert content
    var alertContent = document.createElement('div');
    alertContent.classList.add('alert-content');
    alertContent.innerHTML = `
        <span class="close-btn" onclick="closeCustomAlert()">×</span>
        <p>Your order confirmed.</p>
    `;

    // Append content to the alert window
    alertWindow.appendChild(alertContent);

    // Append the alert window to the body
    document.body.appendChild(alertWindow);
}

function closeCustomAlert() {
    let inputText = document.getElementsByClassName('text')[0];
    inputText.value = ' ';
    var alertWindow = document.querySelector('.alert-window');
    if (alertWindow) {
        alertWindow.parentNode.removeChild(alertWindow);
    }
}
