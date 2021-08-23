import React, { useState } from 'react';
// import '../../App.css';
// import Table from '@material-ui/core/Table';

// const empList = [
//   { id: 1, name: "Neeraj", email: 'neeraj@gmail.com', phone: 9876543210, city: "Bangalore" },
//   { id: 2, name: "Raj", email: 'raj@gmail.com', phone: 9812345678, city: "Chennai" },
//   { id: 3, name: "David", email: 'david342@gmail.com', phone: 7896536289, city: "Jaipur" },
//   { id: 4, name: "Vikas", email: 'vikas75@gmail.com', phone: 9087654321, city: "Hyderabad" },
// ]

// function App() {

//   const [data, setData] = useState(empList)
//   const columns = [
//     { title: "ID", field: "id", editable: false },
//     { title: "Name", field: "name" },
//     { title: "Email", field: "email" },
//     { title: "Phone Number", field: 'phone', },
//     { title: "City", field: "city", }
//   ]


//   return (
//     <div className="App">
//       <h1 >React-App</h1>
//       <h4 >Material Table with CRUD operation</h4>
//       <Table>
//         title="Employee Data"
//         data={data}
//         columns={columns}
//         editable={{
//           onRowAdd: (newRow:any) => new Promise((resolve, reject) => {
//             const updatedRows = [...data, { id: Math.floor(Math.random() * 100), ...newRow }]
//             setTimeout(() => {
//               setData(updatedRows)
//               resolve(true)
//             }, 2000)
//           }),
//           onRowDelete: (selectedRow: { tableData: { id: any; }; }) => new Promise((resolve, reject) => {
//             const index = selectedRow.tableData.id;
//             const updatedRows = [...data]
//             updatedRows.splice(index, 1)
//             setTimeout(() => {
//               setData(updatedRows)
//               resolve('void')
//             }, 2000)
//           }),
//           onRowUpdate:(updatedRow:any,oldRow:any)=>new Promise((resolve,reject)=>{
//             const index=oldRow.tableData.id;
//             const updatedRows=[...data]
//             updatedRows[index]=updatedRow
//             setTimeout(() => {
//               setData(updatedRows)
//               resolve('void')
//             }, 2000)
//           })

//         }}
//         options={{
//           actionsColumnIndex: -1, addRowPosition: "first"
//         }}
//       </Table>
//     </div>
//   );
// }

// export default App;