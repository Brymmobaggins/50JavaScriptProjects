function calculateLoan() {

    const amount = document.getElementById('amount').value;
    const interestRate = document.getElementById('interest-rate').value;
    const months = document.getElementById('month').value

    const interest = (amount * (interestRate * 0.01)) / months
    let payment = ((amount / months) + interest).toFixed(2) // calculate the monthly payment
    // payment = payment.toString().toReplace

    document.getElementById("show-payment").innerHTML = `Monthly Payment is N${payment}`


}