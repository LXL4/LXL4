function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const gender = document.getElementById('gender').value;
    
    const bmi = weight / (height * height);
    document.getElementById('bmiResult').innerText = bmi.toFixed(2);
    
    let verdict = '';
    if (gender === 'male') {
        if (bmi < 20.7) {
            verdict = '过轻';
        } else if (bmi >= 20.7 && bmi <= 26.4) {
            verdict = '正常';
        } else {
            verdict = '超重';
        }
    } else if (gender === 'female') {
        if (bmi < 19.1) {
            verdict = '过轻';
        } else if (bmi >= 19.1 && bmi <= 25.8) {
            verdict = '正常';
        } else {
            verdict = '超重';
        }
    }
    
    document.getElementById('bmiVerdict').innerText = `您的BMI指数为 ${bmi.toFixed(2)}, ${verdict}`;
}
