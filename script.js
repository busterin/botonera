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

    // Check if all 4 correct buttons are selected and no incorrect buttons are pressed
    if (correctLetters.every(letter => selectedButtons.includes(letter)) &&
        selectedButtons.length === correctLetters.length) {
        setTimeout(() => {
            document.getElementById('screen-text').textContent = "TESORO";
        }, 300);  // Delay to allow the button press effect to finish
    } else {
        // Clear the screen if there are incorrect buttons selected
        document.getElementById('screen-text').textContent = '';
    }
};

// Add event listeners to all buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', handleButtonClick);
});