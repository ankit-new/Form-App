// function Editable() {
//     const { useState } = React;
  
//     const [columns, setColumns] = useState([
//       { title: 'Name', field: 'name' },
//       { title: 'Surname', field: 'surname', initialEditValue: 'initial edit value' },
//       { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
//       {
//         title: 'Birth Place',
//         field: 'birthCity',
//         lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
//       },
//     ]);
  
//     const [data, setData] = useState([
//       { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
//       { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
//     ]);
  
//     return (
//       <MaterialTable
//         title="Editable Preview"
//         columns={columns}
//         data={data}
//         editable={{
//           onRowAdd: newData =>
//             new Promise((resolve, reject) => {
//               setTimeout(() => {
//                 setData([...data, newData]);
                
//                 resolve();
//               }, 1000)
//             }),
//           onRowUpdate: (newData, oldData) =>
//             new Promise((resolve, reject) => {
//               setTimeout(() => {
//                 const dataUpdate = [...data];
//                 const index = oldData.tableData.id;
//                 dataUpdate[index] = newData;
//                 setData([...dataUpdate]);
  
//                 resolve();
//               }, 1000)
//             }),
//           onRowDelete: oldData =>
//             new Promise((resolve, reject) => {
//               setTimeout(() => {
//                 const dataDelete = [...data];
//                 const index = oldData.tableData.id;
//                 dataDelete.splice(index, 1);
//                 setData([...dataDelete]);
                
//                 resolve()
//               }, 1000)
//             }),
//         }}
//       />
//     )
//   }
  

//   import React, { useState } from "react";
// import {
//   Typography,
//   TableContainer,
//   Table,
//   TableHead,
//   TableBody,
//   TableRow,
//   TableCell,
//   Paper,
// } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
// import EditIcon from "@mui/icons-material/Edit";

// const tableData = [
//   {
//     id: 1,
//     first_name: "Pizza",
//     quantity: "2 ",
//     category: "Medium Size",
//     gender: "Male",
//     ip_address: "14.83.9.228",
//   },
//   {
//     id: 2,
//     first_name: "Burger",
//     quantity: "4 ",
//     category: "Crispy Chicken",
//     gender: "Female",
//     ip_address: "255.116.44.39",
//   },
//   {
//     id: 3,
//     first_name: "Sandwich",
//     quantity: "3",
//     category: "ExtraCheese",
//     gender: "Female",
//     ip_address: "168.141.88.36",
//   },
//   {
//     id: 4,
//     first_name: "Pasta",
//     quantity: "2",
//     category: "White Sauce",
//     gender: "Male",
//     ip_address: "98.109.76.248",
//   },
//   {
//     id: 5,
//     first_name: "Fries",
//     quantity: "2",
//     category: "Perri-Perri",
//     gender: "Female",
//     ip_address: "217.112.40.88",
//   },
//   {
//     id: 6,
//     first_name: "Rolls",
//     quantity: "2",
//     category: "Double-Egg",
//     gender: "Female",
//     ip_address: "217.112.40.88",
//   },
// ];
// const Mitable = () => {
//   const [itemData, setItemData] = useState(tableData);

//   const trashIconHandler = (id) => {
//     const newItemData = itemData.filter((item) => item.id !== id);
//     setItemData(newItemData);
//   };

//   // const [addFormData, setAddFormData] = useState({
//   //   first_name: "",
//   //   quantity: "",
//   //   category: "",
//   //   gender: "",
//   // });

//   // const [editFormData, setEditFormData] = useState({
//   //   first_name: "",
//   //   quantity: "",
//   //   category: "",
//   //   gender: "",
//   // });
//   // const handleAddFormChange = (event) => {
//   //   event.preventDefault();

//   //   const fieldName = event.target.getAttribute("name");
//   //   const fieldValue = event.target.value;

//   //   const newFormData = { ...addFormData };
//   //   newFormData[fieldName] = fieldValue;

//   //   setAddFormData(newFormData);
//   // };

//   // const handleEditFormChange = (event) => {
//   //   event.preventDefault();

//   //   const fieldName = event.target.getAttribute("name");
//   //   const fieldValue = event.target.value;

//   //   const newFormData = { ...editFormData };
//   //   newFormData[fieldName] = fieldValue;

//   //   setEditFormData(newFormData);
//   // };

//   return (
//     <TableContainer component={Paper}>
//       <Table aria-label="simple-table">
//         <TableHead>
//           <TableRow>
//             <TableCell>ID</TableCell>
//             <TableCell>Food</TableCell>
//             <TableCell>Quantity</TableCell>
//             <TableCell>Category</TableCell>
//             <TableCell>Edit</TableCell>
//             <TableCell>Delete</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {itemData.map((row) => (
//             <TableRow
//               key={row.id}
//               sx={{ "&:last-child td , &:last-child th": { border: 0 } }}
//             >
//               <TableCell>{row.id}</TableCell>
//               <TableCell>{row.first_name}</TableCell>
//               <TableCell>
//                 <text> {row.quantity} </text>
//               </TableCell>
//               <TableCell>{row.category}</TableCell>
//               <TableCell>
//                 <button>
//                   <EditIcon />
//                 </button>
//               </TableCell>
//               <TableCell>
//                 <button onClick={() => trashIconHandler(row.id)}>
//                   <DeleteIcon />
//                 </button>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default Mitable;
