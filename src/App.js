import "./styles.css";
import React, { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import UserList from "./components/UserList/UserList";

export default function App() {
  const [UserDetails, setUserDetails] = useState([
    {
      id: 1,
      username: "Harini",
      age: "22",
      gender: "female",
      mobileno: "9080506723",
    },
    {
      id: 2,
      username: "Deva",
      age: 56,
      gender: "male",
      mobileno: "9347586920",
    },
  ]);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}> My Friends Directory</h1>
      <AddUser setUserDetails={setUserDetails} />
      <UserList userData={UserDetails} />
    </div>
  );
}
