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
// ready to run
function onReady(){
    $('#submitInformation').on('click', addEmployee);
    $('#submitInformation').on('click', appendEmployeeList);
    $('#submitInformation').on('click', calculateMonthly);
    $('#employeeTable').on('click', ('.deleteEmp'), deleteEmployee);
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
        <td>${employee.id}</td>
        <td>${employee.title}</td>
        <td>${employee.annualSalary}</td>
        <td><button class="deleteEmp">delete</button></td>
        </tr>`);        
    }
}

    // calculate monthly budget for employee
function calculateMonthly(){
    let monthlySal = 0;
    // why is it not pushing employee salary to DOM  
    // divide employee salary by 12 for monthly budget
    console.log('Calculating monthly budget');
    for(let sal of employees){
        monthlySal += sal.annualSalary/12; 
        $('#outputDiv').empty(); 
        $('#outputDiv').append('Monthly Budget: ', '', monthlySal.toFixed(2));
        console.log('output div: Monthly Budget');
        // change background red if monthly is over $20,000
        if(monthlySal >= 20000){
            $('#outputDiv').css('background-color', 'red');
            console.log('ran through color if statement');
            
        }
    } 
}

    // append employee table for delete button

    // delete employee function
    function deleteEmployee(){
        console.log('clicking delete');
        $(this).closest('tr').remove();

        // console.log('Delete Employee function');
        // let $delete = $(this).closest('tr').find('td').text();
        // console.log('selectedEmployee');
        // for(let i = 0; i < employees.length; i++) {
        //     if($delete.includes(employees[i].firstName)){
        //         console.log('running $delete employee if statement');
        //         employees.splice(i, 1);
        //         $(this).closest('tr').find('td').remove();
        //         console.log('delete employee');
                
        //     }
        // }
        
    }