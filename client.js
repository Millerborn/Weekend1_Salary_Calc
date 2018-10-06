console.log('Salary Calculator');

let employees = [];
// let annualSalary = 0;

class Employee {
    constructor(firstName, lastName, id, title, annualSalary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.title = title;
        this.annualSalary = parseFloat(annualSalary).toFixed(2);
    }
}

$(document).ready(onReady);

function onReady(){
    console.log('jQ');
    $('#submitInformation').on('click', addEmployee);
    $('#deleteEmpl').on('click', '.deleteEmployee', deleteEmployee);
}


function addEmployee(){
    event.preventDefault();
    console.log('Button Clicked!');
    let empFirstName = $('#firstName').val();
    let empLastName = $('#lastName').val();
    let empId = $('#employeeId').val();
    let empTitle = $('#title').val();
    let empAnnualSalary = $('#annualSalary').val();
    let newEmployee = new Employee(empFirstName, empLastName, empId, empTitle, empAnnualSalary);
    employees.push(newEmployee);
    $('#employeeList').append(newEmployee);   
 
    appendEmployeeList();
    calculateMonthly();

}

// function to add Employee information the the DOM
function appendEmployeeList(){
    let $element = $('#employeeTable');
    console.log('Add Employee Information');
        $element.empty();
        console.log(employees);

    for(let employee of employees){
        console.log('in for loop');
            
        $('#employeeTable').append(`
        <tr><td>${employee.firstName}</td>
        <td>${employee.lastName}</td> 
        <td>${employee.id}</td>
        <td>${employee.title}</td>
        <td>${employee.annualSalary}</td></tr>
        <tr><button class="deleteEmpl">delete employee</button></tr>
        `);        
        }
}

    // calculate monthly budget for employee
function calculateMonthly(monthlyExpense){

    for()

    console.log('Calculate monthly budget');
    let monthlySalary = Number((annualSalary / 12).toFixed(2));    
    let outputDiv = $('#outputDiv')
    outputDiv.empty();
    outputDiv.append('Monthly Budget', monthlySalary)
    console.log('logging');

}

    // append employee table for delete button

    // delete employee function
    function deleteEmployee(){
        console.log('Delete Employee function');
        let $delete = $(this).parent().text();
        console.log('selectedEmployee');
        for(let i = 0; i < employees.length; i++) {
            if($delete.includes(employees[i].firstName)){
                console.log('delete employee');
                employees.splice(i, 1);
                $(this).parent().remove();
                console.log('noice');
                return true;
                
                
            }
        }
        
    }