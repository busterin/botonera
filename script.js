// Array to store the letters that have been pressed
let selectedButtons = [];

// Function to handle button click
const handleButtonClick = (event) => {
    const button = event.target;
    const letter = button.dataset.letter;

    // Add button letter to selectedButtons
    if (!selectedButtons.includes(letter)) {
        selectedButtons.push(letter);
    }

    // Apply the sinking effect to the button
    button.classList.add('pressed');

    // If 4 buttons are selected, show "TESORO" on the screen
    if (selectedButtons.length === 4) {
        setTimeout(() => {
            document.getElementById('screen-text').textContent = "TESORO";
        }, 300);  // Delay to allow the button press effect to finish
    }
};

// Add event listeners to all buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', handleButtonClick);
});
