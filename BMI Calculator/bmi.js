function calculateBmi() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value / 100; 
    if (!weight || !height) return;

    const bmi = (weight / (height * height)).toFixed(1);
    document.getElementById("yourbmi").innerText = bmi;

    let message = "";
    if (bmi < 18.5) {
        message = "You are underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        message = "You have a normal weight.";
    } else if (bmi >= 25 && bmi <= 29.9) {
        message = "You are overweight.";
    } else {
        message = "You are obese.";
    }
    document.getElementById("evaluationMessage").innerText = message;
}
document.getElementById("calculateButton").addEventListener("click", calculateBmi);
