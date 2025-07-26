

// First getting hold of data through element ID
const form = document.getElementById("student-registration-form");
// To hold table data we are using this selector
const studentRecordsBody = document.getElementById("studentRecordsBody");


// In students variable we'll store the data from the local storage
let students = JSON.parse(localStorage.getItem("students")) || [];

// To keep track of student we'll be edition
let editingIndex = null;



// Then we need to crete a function in which we'll validate name, id, email and contact
function isValidName(name) {
  return /^[a-zA-Z\s]+$/.test(name);
}

function isValidId(id) {
  return /^\d+$/.test(id);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidContact(contact) {
  return /^\d{10}$/.test(contact);
}

function validateInputs(name, id, email, contact) {
  return (
    isValidName(name) &&
    isValidId(id) &&
    isValidEmail(email) &&
    isValidContact(contact)
  );
}


// Here we are creating a fn to store the data of the registered students that we selected into the table
function renderTable() {
  studentRecordsBody.innerHTML = "";

  if (students.length === 0) {
    studentRecordsBody.innerHTML = `
      <tr>
        <td colspan="5" class="py-4 px-6 text-center text-gray-500 italic">
          No students registered yet.
        </td>
      </tr>`;
    return;
  }

  // Loop through all students
  students.forEach((student, index) => {
    const row = document.createElement("tr");

    // Here we'll add dynamtically change the innerText in order to include the students details and onclick chnage button
    row.innerHTML = `
      <td class="py-3 px-6">${student.name}</td>
      <td class="py-3 px-6">${student.id}</td>
      <td class="py-3 px-6">${student.email}</td>
      <td class="py-3 px-6">${student.contact}</td>
      <td class="py-3 px-6 text-center space-x-2">
        <button onclick="editStudent(${index})" class="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded transition duration-150">Edit</button>
        <button onclick="deleteStudent(${index})" class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition duration-150">Delete</button>
      </td>
    `;

    // adding the student
    studentRecordsBody.appendChild(row);
  });

  localStorage.setItem("students", JSON.stringify(students));
}


// Form submission handler
form.addEventListener("submit", function (e) {
  e.preventDefault();


  // Collect input value
  const name = document.getElementById("studentName").value.trim();
  const id = document.getElementById("studentId").value.trim();
  const email = document.getElementById("emailId").value.trim();
  const contact = document.getElementById("contactNo").value.trim();

  if (!validateInputs(name, id, email, contact)) {
    alert("Please enter valid information in all fields.\n- Name (A-Z)\n- ID (Numbers)\n- Email (Valid)\n- Contact (10-digit number)");
    return;
  }

  const newStudent = { name, id, email, contact };

  // To add new student
  if (editingIndex !== null) {
    students[editingIndex] = newStudent;
    editingIndex = null;
  } else {
    students.push(newStudent);
  }

  form.reset();
  renderTable();
});

// fn to delete student
function deleteStudent(index) {
  if (confirm("Are you sure you want to delete this student?")) {
    students.splice(index, 1);
    renderTable();
  }
}


// To edit students 
function editStudent(index) {
  const student = students[index];
  document.getElementById("studentName").value = student.name;
  document.getElementById("studentId").value = student.id;
  document.getElementById("emailId").value = student.email;
  document.getElementById("contactNo").value = student.contact;
  editingIndex = index;
}


// when page loads we need to render the table 
renderTable();
