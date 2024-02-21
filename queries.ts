export const allEmployeesQuery = `
query allEmployees{
    findAllEmployees {
        id
        firstName
        lastName
        department
        designation
    }
}
`

export const employeeById = `
query employee {
    findEmployeeById(id: "260") {
       id
       firstName
       lastName
       department
       designation
  
     }
   }
`

export const addNewEmployee = `
 mutation employeeAddition {
       createEmployee (addedEmployee:{
         firstName:"Kimani"
         lastName: "Ichungwa"
         department:"Project management department"
         designation:"Project management in test"
       }
       ) {
         id
         firstName
         lastName
         department
         designation
      }
     }
`

export const updateAnEmployee = `
mutation employeeUpdate {
    updateEmployee(id:"303", updatedEmployee: {
      firstName:"Duncan"
      lastName: "Karani"
      department:"Technical department"
      designation:"Assistant Manager"
    }){
      id
      firstName
      lastName
      department
      designation
    }
  }
`


export const deleteAnEmployee = `
mutation employeeDeletion {
    deleteEmployee(id: "304")
  }
`