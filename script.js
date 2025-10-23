// Array to store the letters that have been pressed
let selectedButtons = [];

// Array of the correct letters that trigger "TESORO"
const correctLetters = ['A', 'H', 'K', 'F'];

// Function to handle button click
const handleButtonClick = (event) => {
    const button = event.target;
    const letter = button.dataset.letter;

    // Toggle the button's state (pressed or not pressed)
    if (selectedButtons.includes(letter)) {
        // Remove the letter from the selectedButtons array (unselect it)
        selectedButtons = selectedButtons.filter(l => l !== letter);
        button.classList.remove('pressed'); // Remove the sinking effect
    } else {
        // Add the letter to selectedButtons array (select it)
        selectedButtons.push(letter);
        button.classList.add('pressed'); // Apply the sinking effect
    }

    // If all 4 correct buttons are selected, show "TESORO" on the screen
    if (correctLetters.every(letter => selectedButtons.includes(letter))) {
        setTimeout(() => {
            document.getElementById('screen-text').textContent = "TESORO";
        }, 300);  // Delay to allow the button press effect to finish
    } else {
        // Clear the screen if not all correct buttons are pressed
        document.getElementById('screen-text').textContent = '';
    }
};

// Add event listeners to all buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', handleButtonClick);
});