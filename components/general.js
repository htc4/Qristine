function createMainElements() {
    // Get the main element
    const mainElement = document.getElementById("new_class_1");

    // Check if the main element exists
    if (!mainElement) {
        console.error("Main element not found.");
        return;
    }

    // Array of element details to create
    const elementsToCreate = [
        { tag: "div", className: "new_class_1" },
        { tag: "div", className: "new_class_1" },
        { tag: "div", className: "new_class_4" },
        { tag: "div", className: "new_class_5" },
        { tag: "div", className: "new_class_6" },
        { tag: "div", className: "new_class_7" },
        { tag: "div", className: "new_class_8" },
        { tag: "span", className: "new_class_9", innerHTML: 'OUR SERVICES' },
        { tag: "div", className: "new_class_10" },
        { tag: "div", className: "new_class_11" },
        { tag: "div", className: "new_class_12" },
        { tag: "div", className: "new_class_13", innerHTML: '<div class="new_class_14"></div> <span class="new_class_15">SHOP</span>' },
        { tag: "span", className: "new_class_16", innerHTML: 'FLOWERS BOUTIQUE' },
        { tag: "div", className: "new_class_17" },
        { tag: "div", className: "new_class_18" },
        { tag: "div", className: "new_class_19" },
        { tag: "div", className: "new_class_20", innerHTML: '<div class="new_class_21"></div> <span class="new_class_22">Lets talk</span>' },
        { tag: "span", className: "new_class_23", innerHTML: 'Talk to our staff' },
        { tag: "span", className: "new_class_24", innerHTML: 'Realize your ideas with us' },
        { tag: "div", className: "new_class_25" }
    ];

    // Create and append elements
    elementsToCreate.forEach(elementDetails => {
        const newElement = document.createElement(elementDetails.tag);
        newElement.className = elementDetails.className;
        if (elementDetails.innerHTML) {
            newElement.innerHTML = elementDetails.innerHTML;
        }
        mainElement.appendChild(newElement);
    });
}

// Call the function
createMainElements();
