const studentForm = document.getElementById('student-form');
const studentsContainer = document.querySelector('.students-container');
const nameInput = studentForm["name"]
const emailInput = studentForm["email"]
const classInput = studentForm["class"]
const ageInput = studentForm["age"]
const genderInput = studentForm["gender"]
// console.log(studentName)

const students = JSON.parse(localStorage.getItem("students")) || []

const addStudent = (name, age, email, clas, gender) => {
    students.push({
        name,
        age,
        clas,
        email,
        gender
    });

    //  set the item into a local storage and convert the array value into string with `JSON.stringify() method`
    localStorage.setItem("students", JSON.stringify(students))

    return { name, age, email, clas, gender };
}


// create a function and destructure the properties
const createStudentElement = ({ name, email, age, clas, gender }) => {
    const studentDiv = document.createElement('div');
    const studentName = document.createElement('h4');
    const studentAge = document.createElement('p');
    const studentClass = document.createElement('p');
    const studentEmail = document.createElement('span');
    const studentGender = document.createElement("p")

    studentName.innerText = "Student name: " + name;
    studentAge.innerText = "Student Age: " + age;
    studentEmail.innerText = "Student Email: " + email;
    studentClass.innerText = "Student class: " + clas
    studentGender.innerText = "Student gender: " + gender;

    // `append` method for appending multiple elements
    studentDiv.append(studentName, studentAge, studentEmail, studentClass, studentGender);

    // `appendChild` method for only one element
    studentsContainer.appendChild(studentDiv);
}
students.forEach(createStudentElement)



// create student when the is fill and submitted
studentForm.onsubmit = (e) => {
    e.preventDefault();

    const newStudent = addStudent(nameInput.value, ageInput.value, emailInput.value, classInput.value, genderInput.value);

    createStudentElement(newStudent)

    nameInput.value = "";
    ageInput.value = ""
    emailInput.value = ""
    classInput.value = ""
    genderInput.value = ""
}