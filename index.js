// Write your solution in this file!
const employee = {
    name: "Tyler Smith",
    streetAddress: "123 Fee Lane",
};

function updateEmployeeWithKeyAndValue() {
    const newEmployee = {
        ...employee,
        name: "Sam",
        streetAddress: "11 Broadway",
    };
    return newEmployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue() {
    employee.name = "Sam";
    employee.streetAddress = "12 Broadway";
    return employee;
};

function deleteFromEmployeeByKey() {
    const newEmployeeTwo = {
        ...employee,

    };
    delete newEmployeeTwo.name;
    return newEmployeeTwo;
};

function destructivelyDeleteFromEmployeeByKey() {
    delete employee.name;
    return employee;
}