import React from "react";

import StoreData from "material-table";

const empList = [
  {
    id: 1,
    name: "Neeraj",
    email: "neeraj@gmail.com",
    phone: 9876543210,
    age: 23,
  },
  { id: 2, name: "Raj", email: "raj@gmail.com", phone: 6678901234, age: 17 },
  {
    id: 3,
    name: "David",
    email: "david342@gmail.com",
    phone: 6312345678,
    age: 34,
  },
  {
    id: 4,
    name: "Vikas",
    email: "vikas75@gmail.com",
    phone: 9787654321,
    age: 20,
  },
];

function Data() {
  const columns = [
    { title: "ID", field: "id" },
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "Phone Number", field: "phone" },
    { title: "Age", field: "age" },
  ];

  return (
    <div className="App">
      <h1 align="center">React-App</h1>
      <h4 align="center">
        Hide or Disable action buttons conditionally in Material Table
      </h4>
      <StoreData
        title="Employee Data"
        data={empList}
        columns={columns}
        editable={{
          isDeleteHidden: (row) => row.age < 18,
          isDeletable: (row) => row.id % 2 === 0,
          isEditable: (row) => row.id % 2 !== 0,
        }}
      />
    </div>
  );
}

export default Data;
