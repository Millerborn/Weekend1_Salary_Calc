console.log('Salary Calculator');

let employees = [];
let monthlyBudget = 0;

class Employee {
    constructor(firstName, lastName, id, title, annualSalary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.title = title;
        this.annualSalary = parseInt(annualSalary).toFixed(2);
    }
}

$(document).ready(onReady);

function onReady(){
    console.log('jQ');
    $('#submitInformation').on('click', addEmployee);

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
        <td>${employee.annualSalary}</td></tr>`);        
        }
}

    // calculate monthly budget for employee
function calculateMonthly(monthlyExpense){
    console.log('Calculate monthly budget');
    let monthlySalary = annualSalary / 12;    
    let outputDiv = $('#outputDiv')
    outputDiv.empty();
    outputDiv.append(monthlyBudget + monthlySalary)
    console.log('logging');

}