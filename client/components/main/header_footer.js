// Menu items data
const menuItems = [
    { id: "collections", text: "COLLECTIONS", link: "../../collections/collections.html" },
    { id: "general", text: "GENERAL", link: "../../general/general.html" },
    { id: "order", text: "ORDER", link: "../../order/order.html" },
    { id: "shop", text: "SHOP", link: "../../shop/shop.html" }
];

// Function to create menu items
function createMenu() {
    const menuContainer = document.getElementById('menuContainer');

    // Create logo link and image
    const logoLink = document.createElement('a');
    logoLink.classList.add('logo_link');
    logoLink.href = '../index.html';
    const logoImg = document.createElement('img');
    logoImg.src = '/client/image/logo.png';
    // logoImg.alt = 'Logo';
    logoImg.classList.add('logo');
    logoLink.appendChild(logoImg);
    menuContainer.appendChild(logoLink);

    // Create menu toggle button
    const menuToggle = document.createElement('div');
    menuToggle.classList.add('menu_toggle');
    menuToggle.innerHTML = '&#9776;';
    menuContainer.appendChild(menuToggle);

    // Create menu items container
    const menuItemsContainer = document.createElement('div');
    menuItemsContainer.classList.add('menu_items');

    menuItems.forEach(item => {
        const menuItem = document.createElement('a');
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
    menuToggle.addEventListener('click', function() {
        menuItemsContainer.classList.toggle('active');
    });
}

// Function to set active menu item
function setActiveMenuItem(itemId) {
    const menuItems = document.querySelectorAll('.menu_item');

    menuItems.forEach(item => {
        item.classList.remove('active');
        if (item.textContent.toUpperCase() === itemId.toUpperCase()) {
            item.classList.add('active');
        }
    });
}

// Call createMenu() function to initialize the menu
if (document.getElementById("menuContainer")) {
    createMenu();
}