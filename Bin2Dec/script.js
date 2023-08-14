const binaryInput = document.getElementById('binary')
const button = document.querySelector('#btn')


button.addEventListener("click", () => {

    const inputValue = parseInt(binaryInput.value, 2)
    console.log(inputValue)


})
