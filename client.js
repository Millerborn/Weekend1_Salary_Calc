console.log('Salary Calculator');

let employees = [];

class Employee {
    constructor(firstName, lastName, id, title, annualSalary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.title = title;
        this.annualSalary = annualSalary;
    }
}

$(document).ready(onReady);

function onReady(){
    console.log('jQ');
    $('#submitInformation').on('click', addEmployee);
    appendEmployeeList();
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
    console.log(employees);
    $('.employeeList').append(newEmployee);    

}

function appendEmployeeList(){
    console.log('Add Employee Information');
    $('#submitInformation').on('click', function(){
        $('#form').empty();
        $('.employeeList').append('<li>' + $('#firstName').val() + '</li>')
        $('.employeeList').append('<li>' + $('#lastName').val() + '</li>')
        $('.employeeList').append('<li>' + $('#employeeId').val() + '</li>')
        $('.employeeList').append('<li>' + $('#title').val() + '</li>')
        $('.employeeList').append('<li>' + $('#annualSalary').val() + '</li>')
    });
}

