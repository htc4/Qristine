function openShop(){
    window.location.href = "./shop/shop.html"
} 
function openChat() {
    document.getElementById("chatbotContainer").style.display = "block";
}

function closeChat() {
    document.getElementById("chatbotContainer").style.display = "none";
}
function shop() {
    // Open the chatbot
    document.getElementById("chatbotContainer").style.display = "block";
}

function closeChat() {
    // Close the chatbot
    document.getElementById("chatbotContainer").style.display = "none";
}

function sendMessage() {
    // Implement functionality to send message
    // For demonstration, you can log the message to console
    var userInput = document.getElementById("userInput").value;
    console.log("Message sent: " + userInput);

    // Clear input field after sending message
    document.getElementById("userInput").value = "";
}