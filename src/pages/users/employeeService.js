const KEYS ={
    employees:'employees',
    employeeId:'employeeId',
    departments:'departments',

}

export const getDepartmentCollection = ()=>([
    { id: '1', title: 'Flutter' },
    { id: '2', title: 'Python' },
    { id: '3', title: 'MERN' },
    { id: '4', title: 'C#/.Net' },
])

export function insertDepartmentsCollection(data) {
    let departments=getAllDepartments();
    data['id'] = generateDepartmentsId()
    departments.push(data)
    localStorage.setItem(KEYS.departments,JSON.stringify(departments))
}

export function generateDepartmentsId() {
    if (localStorage.getItem(KEYS.departmentsId) == null)
        localStorage.setItem(KEYS.departmentsId, '0')
    var id = parseInt(localStorage.getItem(KEYS.departmentsId))
    localStorage.setItem(KEYS.departmentsId, (++id).toString())
    return id;
}

export function getAllDepartments() {
    if (localStorage.getItem(KEYS.departments) == null)
        localStorage.setItem(KEYS.departments, JSON.stringify([]))
    return JSON.parse(localStorage.getItem(KEYS.departments));
}

export function insertEmployee(data) {
    let employees=getAllEmployees();
    data['id'] = generateEmployeeId()
    employees.push(data)
    localStorage.setItem(KEYS.employees,JSON.stringify(employees))
}

export function generateEmployeeId() {
    if (localStorage.getItem(KEYS.employeeId) == null)
        localStorage.setItem(KEYS.employeeId, '0')
    var id = parseInt(localStorage.getItem(KEYS.employeeId))
    localStorage.setItem(KEYS.employeeId, (++id).toString())
    return id;
}

export function getAllEmployees() {
    if (localStorage.getItem(KEYS.employees) == null)
        localStorage.setItem(KEYS.employees, JSON.stringify([]))
    return JSON.parse(localStorage.getItem(KEYS.employees));
}