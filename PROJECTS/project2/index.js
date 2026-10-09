const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const heightInput = document.querySelector('#height').value;
    const weightInput = document.querySelector('#weight').value;

    const height = parseFloat(heightInput);
    const weight = parseFloat(weightInput);

    const results = document.querySelector('#results');

    if (heightInput.trim() === '' || height <= 0 || isNaN(height)) {
        results.innerHTML = 'Please give a valid height';
    } 
    else if (weightInput.trim() === '' || weight <= 0 || isNaN(weight)) {
        results.innerHTML = 'Please give a valid weight';
    } 
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        results.innerHTML = `<span>${bmi}</span>`;
    }
});
