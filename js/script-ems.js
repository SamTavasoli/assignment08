// CREATE AN ARRAY OF EMPLOYEES
let employeeList = [];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
if (localStorage.getItem('employeeList')) {
    employeeList = JSON.parse(localStorage.getItem('employeeList'));
}

// GET DOM ELEMENTS
const form = document.getElementById('addEmployeeForm');
const empTable = document.getElementById('employeesTable');
const empCount = document.getElementById('employeeCount');

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
document.addEventListener('DOMContentLoaded', buildGrid);

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let employee = {
        id: document.getElementById('employeeID').value,
        name: document.getElementById('fullName').value,
        ext: document.getElementById('extension').value,
        email: document.getElementById('email').value,
        dept: document.getElementById('department').value
    };

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    employeeList.push(employee);

    // BUILD THE GRID
    buildGrid();

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('employeeID').focus();
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        if (confirm('Are you sure you want to delete this employee?')) {
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            let rowIndex = e.target.parentNode.parentNode.rowIndex;
            employeeList.splice(rowIndex - 1, 1);

            // BUILD THE GRID
            buildGrid();
        }
    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    let tbody = empTable.getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';

    // REBUILD THE TBODY FROM SCRATCH
    employeeList.forEach((employee, index) => {
        let row = tbody.insertRow();
        Object.values(employee).forEach(text => {
            let cell = row.insertCell();
            cell.appendChild(document.createTextNode(text));
        });

        // Add Delete Button
        let deleteCell = row.insertCell();
        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.className = 'btn btn-danger';
        deleteButton.onclick = function() {
            if (confirm('Are you sure you want to delete this employee?')) {
                employeeList.splice(index, 1);
                buildGrid();
            }
        };
        deleteCell.appendChild(deleteButton);
    });

    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(tbody);
    console.log(document.getElementById('employeeCount'));
    // UPDATE EMPLOYEE COUNT
    document.getElementById('employeeCount').innerText = employeeList.length;


    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employeeList));
};
