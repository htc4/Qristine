// Menu items data
let menuItems = [
    { id: "collections", text: "COLLECTIONS", link: "../collections/collections.html" },
    { id: "general", text: "GENERAL", link: "../index.html" },
    { id: "order", text: "ORDER", link: "../order/order.html" },
    { id: "shop", text: "SHOP", link: "../shop/shop.html" }
];

// Function to create menu items
function createMenu() {
    let menuContainer = document.getElementById('menuContainer');

    // Create logo link and image
    let logoLink = document.createElement('a');
    logoLink.classList.add('logo_link');
    logoLink.href = '../index.html';
    let logoImg = document.createElement('img');
    logoImg.src = '../image/logo.png';
    // logoImg.alt = 'Logo';
    logoImg.classList.add('logo');
    logoLink.appendChild(logoImg);
    menuContainer.appendChild(logoLink);

    // Create menu toggle button
    let menuToggle = document.createElement('div');
    menuToggle.classList.add('menu_toggle');
    menuToggle.innerHTML = '&#9776;';
    menuContainer.appendChild(menuToggle);

    // Create menu items container
    let menuItemsContainer = document.createElement('div');
    menuItemsContainer.classList.add('menu_items');

    menuItems.forEach(item => {
        let menuItem = document.createElement('a');
        menuItem.classList.add('menu_item');
        menuItem.textContent = item.text;
        menuItem.href = item.link;

        // Add click event listener to each menu item
        menuItem.addEventListener('click', () => {
            setActiveMenuItem(item.id);
        });

menuItemsContainer.appendChild(menuItem);
});

    menuContainer.appendChild(menuItemsContainer);

    // Toggle menu items on mobile
    menuToggle.addEventListener('click', function () {
        menuItemsContainer.classList.toggle('active');
    });
}

// Function to set active menu item
function setActiveMenuItem(itemId) {
    let menuItems = document.querySelectorAll('.menu_item');

    menuItems.forEach(item => {
        item.classList.remove('active');
        if (item.textContent.toUpperCase() === itemId.toUpperCase()) {
            item.classList.add('active');
        }
    });
}
function createFooter() {
    let footerContainer = document.getElementById('footerContainer');
    let divgeneral = document.createElement('div');
    divgeneral.classList.add('divgeneral');

    let div_1 = document.createElement('div');
    div_1.classList.add('div_1');
    // Create the map image element
    let map = document.createElement('img');
    map.src = '../image/Location.png';
    map.alt = 'Map';
    div_1.appendChild(map);

    // Create the paragraph element for the location
    let location = document.createElement('p');
    location.textContent = "Tigran Mets 7/2";
    location.classList.add('textcolor');
    div_1.appendChild(location);
    divgeneral.appendChild(div_1);

    let div_2 = document.createElement('div')
    div_2.classList.add('div_2');
    // Create the call image element
    let call = document.createElement('img');
    call.src = '../image/Call.png'; // Fix the typo here
    call.alt = 'Call';
    div_2.appendChild(call);

    // Create the paragraph element for the phone number
    let phoneNumber = document.createElement('p'); // Fix the variable name here
    phoneNumber.textContent = "37499102030";
    phoneNumber.classList.add('textcolor');
    div_2.appendChild(phoneNumber);
    divgeneral.appendChild(div_2);

    let div_3 = document.createElement('div');
    div_3.classList.add('div_3');
    div_3.classList.add('container');
    let instagram = document.createElement('img');
    instagram.src = '../image/Instagram.png';
    instagram.alt = 'Instagram';
    let tiktok = document.createElement('img');
    tiktok.src = '../image/TikTok.png';
    tiktok.alt = 'TikTok'; // Corrected the alt attribute
    let facebook = document.createElement('img');
    facebook.src = '../image/Facebook.png'; // Added a slash before 'image'
    facebook.alt = 'Facebook';
    div_3.appendChild(instagram);
    div_3.appendChild(tiktok);
    div_3.appendChild(facebook);
    footerContainer.appendChild(div_3);
    footerContainer.appendChild(divgeneral);


}



// Call createMenu() function to initialize the menu
if (document.getElementById("menuContainer")) {
    createMenu();
}
if (document.getElementById("footerContainer")) {
    createFooter();
}
