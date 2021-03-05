import React, { useMemo, useState, useEffect } from "react";
import Table from "./components/Table";
import "./App.css";
import axios from "axios";
// import API from "../utils/API";
// import EmployeeDirectoryContainer from "./components/EmployeeDirectoryContainer";

const BASEURL = "https://randomuser.me/api/?results=25&nat=us";

function App() {
  const [data, setData] = useState([]);

  //calling API
  useEffect(() => {
    (async () => {
      const { data } = await axios(BASEURL);
      // console.log(data)
      // console.log(data.results)
      setData(data.results);
    })();
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "Employee Directory",
        columns: [
          {
            Header: "Picture",
            // accessor: "picture.thumbnail",
            Cell:(row)=>{
              console.log(row)
              return <img alt="profile" src={row.row.original.picture.thumbnail} />
            }
          },
          {
            Header: "Name",
            // accessor: "name.last"
            Cell: (row)=> {
              return <span>{row.row.original.name.first} {row.row.original.name.last}</span>
            }
          },
          {
            Header: "Phone",
            accessor: "phone"
          },
          {
            Header: "email",
            accessor: "email"
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
