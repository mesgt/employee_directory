import "./App.css";
import axios from "axios";
// import API from "../utils/API";
import Table from "./Table";
import React, { useMemo, useState, useEffect } from "react";
// import EmployeeDirectoryContainer from "./components/EmployeeDirectoryContainer";

function App() {
  const [data, setData] = useState([]);
  
  useEffect(()=> {
    (async() => {
      const result = await axios("https://randomuser.me/api/?result=25");
      setData(result.data);
    })();
  }, []);

  const columns = useMemo(
    ()=> [
      {
        Header: "Picture",
        columns: [
          {
            Header: "Picture",
            accessor: "data.results[0].picture.thumbnail"
          },
          {
            Header: "Name",
            accessor: "data.results[0].name"
          },
          {
            Header: "Phone",
            accessor: "data.results[0].phone"
          },
          {
            Header: "email",
            accessor: "data.results[0].email"
          }
        ]
      },
    ], []
  );

  return (
  <div className="App">
    <Table columns={columns} data={data} />
  </div>);
}

export default App;
