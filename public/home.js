const dropdown 	= document.querySelector("#burger")
const classes 	= document.querySelector("#menu").classList


dropdown.addEventListener('click',() => {
	classes.toggle("hidden")
})

document.querySelector("#load").addEventListener("click", () => {
    const container = document.querySelector("#card-container");
    const template = document.querySelector("#card-template");
    const numCards = 3; // Number of cards to load per click
    const maxCards = 9; // Set the total number of cards that should be loaded

    // Count the number of existing cards
    const currentCardCount = container.children.length;

    if (currentCardCount >= maxCards) {
        document.querySelector("#load").style.display = "none"; // Hide button when max is reached
        return; // Stop execution
    }

    for (let i = 0; i < numCards; i++) {
        // Ensure we don't exceed the max limit
        if (container.children.length >= maxCards) {
            document.querySelector("#load").style.display = "none"; // Hide button when max is reached
            break;
        }
        
        // Clone template content
        const newCard = template.content.cloneNode(true);
        container.appendChild(newCard);
    }
});
