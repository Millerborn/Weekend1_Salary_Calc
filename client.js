let employees = [];
let monthlySalary = [];

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
    $('#submitInformation').on('click', addEmployee);
    // $('#submitInformation').on('click',calculateMonthly.empAnnualSalary);

}


function addEmployee(){
    event.preventDefault();
    console.log('Add employee button clicked');
    let empFirstName = $('#firstName').val();
    let empLastName = $('#lastName').val();
    let empId = $('#employeeId').val();
    let empTitle = $('#title').val();
    let empAnnualSalary = $('#annualSalary').val();
    let newEmployee = new Employee(empFirstName, empLastName, empId, empTitle, empAnnualSalary);
    employees.push(newEmployee);
    $('#employeeList').append(newEmployee);       
    appendEmployeeList();
    console.log('new employee added');
    calculateMonthly();
    console.log('calculate monthly');
    $('#delete').on('click', deleteEmployee);
    console.log('delete emp');
    
    

}

// function to add Employee information the the DOM
function appendEmployeeList(){
    let $element = $('#employeeTable');
    console.log('Add Employee Information');
        $element.empty();
        console.log(employees);
// append employee info with for of loop to table in html
    for(let employee of employees){            
        $('#employeeTable').append(`
        <tr><td>${employee.firstName}</td>
        <td>${employee.lastName}</td> 
        <td>${employee.id}<button id="delete">delete</button></td>
        <td>${employee.title}</td>
        <td>${employee.annualSalary}</td></tr>
        `);        
        }
}

    // calculate monthly budget for employee
function calculateMonthly(){
    console.log('in calculate monthly expense');
    // push employee salary to DOM  
    for(let employee of employees){
         let element = $('#annualSalary');
         element.empty();
         console.log('empty monthly salary'); 
         $('#outputDiv').append(employee.annualSalary);
         log
        }
     // divide employee salary by 12 for monthly budget
    console.log('Calculating monthly budget');
    let monthlySalary = Number((annualSalary / 12).toFixed(2));    
    let outputDiv = $('#outputDiv')
    outputDiv.empty();
    outputDiv.append('Monthly Budget:', monthlySalary)
    console.log('logging');
    overBudget();

}

    // append employee table for delete button

    // delete employee function
    function deleteEmployee(){
        console.log('Delete Employee function');
        let $delete = $(this).closest('tr').find('td').text();
        console.log('selectedEmployee');
        for(let i = 0; i < employees.length; i++) {
            if($delete.includes(employees[i].id)){
                console.log('delete employee');
                employees.splice(i, 1);
                $(this).closest('tr').find('td').remove();
                console.log('delete employee');
                // return true;
                
                
            }
        }
        
    }

    // change background red if monthly is over $20,000
    function overBudget(){
        if(monthlySalary > 20000){
            $('monthlySalary').css('background-color', 'red');
        }
    }

    // alternate red background function
    function altOverBudget(){
        if(monthlySalary > 20000){
            $('#outputdiv').toggleClass('red')
        }
    }