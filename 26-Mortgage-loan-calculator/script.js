function calculateLoan() {

    const amount = document.getElementById('amount').value;
    const interestRate = document.getElementById('interest-rate').value;
    const months = document.getElementById('month').value

    const interest = (amount * (interestRate * 0.01)) / months
    let payment = ((amount / months) + interest).toFixed(2) // calculate the monthly payment

    // REGEX to add comma(,) after every three digits
    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") //\B looks for a word boundary, ? says what to look for, \d looks for 3 digits in a row

    document.getElementById("show-payment").innerHTML = `Monthly Payment is = N${payment}`



}