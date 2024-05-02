const students = [
    {
        name: "Juan",
        gender: "M",
        course: "BS-IT",
        hobbies: "Computer"
    },
    {
        name: "Sophia",
        gender: "F",
        course: "BS-CS",
        hobbies: "Shat"
    },
    {
        name: "Clark",
        gender: "M",
        course: "BS-IS",
        hobbies: "Driving"
    },
]

const studentTable = document.getElementById('student-table').querySelector('tbody')

function generateRows(table, rows) {
    // Imaging rows is a students 
    // Imagine table is a studentTable
    for(let row of rows) {
        const r = table.insertRow()

        for(let field in row) {
            const col = r.insertCell()
            col.textContent = row[field]
        }

    }
}

/* generateRows(studentTable, students) */

function addStudent() {
    const form = document.forms['student-form']

    const student = {
        name: form['name'].value,
        gender: form['gender'].value,
        course: form['course'].value
    }

    if(!student.name) {
        alert('Please Input Name')
        return
    }

    const r = studentTable.insertRow()

    for(let field in student) {
        const col = r.insertCell()
        col.setAttribute('class', 'px-6 py-3')
        col.textContent = student[field]
    }

    form.reset()
}