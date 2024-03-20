const studentForm = document.getElementById('student-form');
const studentsContainer = document.querySelector('.students-container');
const nameInput = studentForm["name"]
const emailInput = studentForm["email"]
const classInput = studentForm["class"]
const ageInput = studentForm["age"]
// console.log(studentName)

const students = JSON.parse(localStorage.getItem("students")) || []

const addStudent = (name, age, email, claxx) => {
    students.push({
        name,
        age,
        claxx,
        email
    });

    //  set the item into a local storage and convert the array value into string with `JSON.stringify() method`
    localStorage.setItem("students", JSON.stringify(students))


    return { name, age, email, claxx };

}


// create a function and destruture the properties
const createStudentElement = ({ name, email, age, claxx }) => {
    const studentDiv = document.createElement('div');
    const studentName = document.createElement('h4');
    const studentAge = document.createElement('p');
    const studentClass = document.createElement('p');
    const studentEmail = document.createElement('span');

    studentName.innerText = "Student name: " + name;
    studentAge.innerText = "Student Age: " + age;
    studentEmail.innerText = "Student Email: " + email;
    studentClass.innerText = "Student class: " + claxx

    // `append` method for appendind multiple elements
    studentDiv.append(studentName, studentAge, studentEmail, studentClass);

    // `appendChild` method for only one element
    studentsContainer.appendChild(studentDiv);
}
students.forEach(createStudentElement)



// create student when the is fill and submitted

studentForm.onsubmit = (e) => {
    e.preventDefault();

    const newStudent = addStudent(nameInput.value, ageInput.value, emailInput.value, classInput.value)

    createStudentElement(newStudent)

    nameInput.value = "";
    ageInput.value = ""
    emailInput.value = ""
    classInput.value = ""
}