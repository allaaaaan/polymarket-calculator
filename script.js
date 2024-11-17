function calculate() {
    const inputField = document.getElementById('inputField');
    const resultDiv = document.getElementById('result');

    // Get user input and perform calculation
    const inputValue = parseFloat(inputField.value);
    if (isNaN(inputValue)) {
        resultDiv.textContent = 'Please enter a valid number.';
        resultDiv.classList.replace('text-green-500', 'text-red-500');
        return;
    }

    const result = inputValue * 2; // Example calculation
    resultDiv.textContent = `Result: ${result}`;
    resultDiv.classList.replace('text-red-500', 'text-green-500');
}
