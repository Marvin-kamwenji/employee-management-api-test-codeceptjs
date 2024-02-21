Feature('addEmployee');

import { addNewEmployee, allEmployeesQuery, deleteAnEmployee, employeeById, updateAnEmployee } from "./queries";


// const assert = require('assert');


//TEST TO CHECK IF ALL EMPLOYEES ARE BEING RETURNED

Scenario('getting all employees',  async ({ I }) => {


const response = await I.sendQuery(allEmployeesQuery);

I.seeResponseContainsKeys(['data']);
I.seeResponseContainsJson({
    "data": {
        "findAllEmployees": [
          {
            "id": "208",
            "firstName": "Pink",
            "lastName": "grey",
            "department": "SE",
            "designation": "SE"
          }]
}
});

});


//TEST TO QUERY AN EMPLOYEE BY ID
Scenario('getting employee by id', async ({I}) => {
    const response = await I.sendQuery(employeeById);

    I.seeResponseContainsJson({
        "data": {
            "findEmployeeById": {
              "id": "260",
              "firstName": "Meshack",
              "lastName": "Karori",
              "department": "Software Engineering department",
              "designation": "Software Engineer"
            }
          }
    })

})


//TEST MUTATION TO ADD A NEW EMPLOYEE
Scenario('adding a new employee', async ({I}) => {
const response = await I.sendMutation(addNewEmployee);
I.seeResponseCodeIsSuccessful();
})


//TEST MUTATION TO UPDATE AN EMPLOYEE
Scenario('updating an employee', async({I}) => {
    const response = await I.sendMutation(updateAnEmployee);
    I.seeResponseCodeIsSuccessful();
    I.seeResponseCodeIs(200);
})


//TEST MUTATION TO DELETE AN EMPLOYEE
Scenario('deleting an employee', async({I}) => {
    const response = await I.sendMutation(deleteAnEmployee);
    I.seeResponseCodeIsSuccessful();
})
