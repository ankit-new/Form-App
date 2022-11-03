import React from "react";
import MaterialTable from "material-table";
import { useState } from "react";

export const Table = () => {
  const [columns, setColumns] = useState([
    { title: "Food", field: "food" },
    {
      title: "Category",
      field: "category",
      initialEditValue: "initial edit value",
    },
    { title: "Quantity", field: "quantity" },
  ]);

  const [data, setData] = useState([
    { food: "Pizzza", category: "Onion", quantity: 2 },
    { food: "Burger", category: "crispy chicken", quantity: 4 },
    {
      food: "Pasta",
      category: "White Sauce",
      quantity: 3,
    },
    { food: "Rolls", category: "Double Egg", quantity: 6 },
    { food: "Sandwich", category: "Extra Cheese", quantity: 4 },
  ]);

  return (
    <MaterialTable
      title="My new Table"
      data={data}
      columns={columns}
      editable={{
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);

              resolve();
            }, 1000);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);

              resolve();
            }, 1000);
          }),
      }}
      options={{
        search: false,
        paging: false,
      }}
    />
  );
};
