function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    if (weight && height) {
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

        let category;
        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal weight';
        } else if (bmi >= 24.9 && bmi < 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obesity';
        }

        const resultElement = document.getElementById('result');
        resultElement.innerHTML = `
            <p>Your BMI: ${bmi}</p>
            <p>Category: ${category}</p>
        `;
    } else {
        alert('Please enter weight and height.');
    }
}
