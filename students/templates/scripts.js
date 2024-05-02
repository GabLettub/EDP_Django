
const link = document.getElementById("link")


const students = []

const studentTable = document.getElementById('student-table').querySelector('tbody') 
// getElement got the table query selector get whats inside the table//

function generateRows(table, rows) {
    //imagine rows is a students
    //imagine tables is a studentTable
    for (let row of rows) { //for of / 
        const r = table.insertRow()

        // const colName = r.insertCell()
        // const colGender = r.insertCell()
        // const colCourse = r.insertCell()

        // colName.textContent = row.name
        // colGender.textContent = row.gender
        // colCourse.textContent = row.course
        for (let field in row) { //for in / 
            console.log(field)
            const col = r.insertCell()
            col.textContent = row[field]
        }

    }
}

generateRows(studentTable, student)


function addStudent() {
    console.log("hello")
    const form  = document.forms['student-form']
    const student = {
        fullName: `${form['firstName'].value} ${form['lastName'].value}`,
        gender: form['gender'].value,
        age: form['age'].value,
        position: form['position'].value

    }

    /* if (!student.firstName || !student.lastName) {
        alert('Please input both first name and last name.');
        return;
    } */

    // localStorage.setItem('first_name', form)
    addStudentRow(student)
    students.push(student)
    form.reset() // to erase data from form class
}

function addStudentRow(student) {
    const r = studentTable.insertRow()

    for (let field in student) { 
        const col = r.insertCell() //insert to the cell
        col.setAttribute('class', 'px-6 py-3')
        col.textContent = student[field]
        console.log(field)
    }
    const col = r.insertCell() //Way 1:
    //col.innerHTML = '<button class="bg-green-600 px-4 py-2 text-white rounded-md cursor-pointer hover:bg-green-700 hover:shadow-lg">View</button>'
    const actionButton = document.createElement('button')
    //actionButton.textContent = 'View'
    // place a text
    // actionButton.setAttribute('class', 'bg-green-600 px-4 py-2 text-white rounded-md cursor-pointer hover:bg-green-700 hover:shadow-lg')
    //append a button

    actionButton.onclick = function() {
        alert(`${student.name} (${student.gender}) from ${student.age ? student.age: 'N/A'}`) // string interpolation using " ` "
        // ${student.course ? student.course: 'N/A'} -- if course doesn't exist, then result 'N/A'
    }
    col.appendChild(actionButton)
}
function filterStudents() {
    studentTable.innerHTML = ''
    for (let student of students) {
        const txtElement = document.getElementById('search-student')
        if (student.name.includes(txtElement.value)) {
            addStudentRow(student)
        }
    }
}


// function initializeForm() {
//     console.log(localStorage.getItem('first_name'))

//     form['name'].value = localStorage.getItem('first_name')
//     localStorage
// }