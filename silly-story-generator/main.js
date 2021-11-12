const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueArray() {
    const random = Math.floor(Math.random() * Array.length)
    return Array[random]
}