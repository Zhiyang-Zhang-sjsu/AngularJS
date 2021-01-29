employeesInfo = [
  {
    empId : 1001,
    name : "Scott",
    sal : 2400,
    deptId : 10,
    hiredate : "",
    dob : ""
  },
  {
    empId : 1002,
    name : "Thomas",
    sal : 3400,
    deptId : 20,
    hiredate : "",
    dob : ""
  },
  {
    empId : 1003,
    name : "Aaron",
    sal : 4600,
    deptId : 10,
    hiredate : "",
    dob : ""
  },
  {
    empId : 1004,
    name : "Jason",
    sal : 3700,
    deptId : 20,
    hiredate : "",
    dob : ""
  },
  {
    empId : 1005,
    name : "Kelvin",
    sal : 7600,
    deptId : 30,
    hiredate : "",
    dob : ""
  },
  {
    empId : 1006,
    name : "Grant",
    sal : 3709,
    deptId : 20,
    hiredate : "",
    dob : ""
  },
  {
    empId : 1007,
    name : "Ivan",
    sal : 2900,
    deptId : 30,
    hiredate : "",
    dob : ""
  },
  {
    empId : 1008,
    name : "Hardy",
    sal : 8700,
    deptId : 20,
    hiredate : "",
    dob : ""
  },
  {
    empId : 1009,
    name : "Peter",
    sal : 5000,
    deptId : 10,
    hiredate : "",
    dob : ""
  },
  {
    empId : 1010,
    name : "Ronald",
    sal : 8200,
    deptId : 30,
    hiredate : "",
    dob : ""
  }
]


let express = require('express');
let cors = require("cors");
let app = express();
app.use(cors())

app.get("/emp", function(req, res) {
  let empno = req.query.id;
  let employees = employeesInfo.filter(emp => emp.empId == parseInt(empno));
  
  res.status(200).json(employees[0]);
});

app.get("/", function(req, res) {
  console.log("Request received");
  res.status(200).json(employeesInfo);
});


app.listen(8000);
console.log("Server running in port 8000");