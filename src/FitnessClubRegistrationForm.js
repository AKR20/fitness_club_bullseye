import React, { useState } from "react";
import "./App.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import MemberList from "./MemberList"

function FitnessClubRegistrationForm() {
  const [members, setMembers] = useState([]);
  const [showMembers, setShowMembers] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !email || !phone || !address) {
        alert("All fields are mandatory !");
        return;
    }
    setMembers([...members, { name, email, phone, address }]);
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 10000);
  };
  const handleClick = () => {
    setShowMembers(!showMembers);
    if (showMembers) {
      const table = document.querySelector("#member-table");
      if (table) {
        table.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="App">
        <h1 class="fitness-club-registration">FITNESS CLUB REGISTRATION</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
        <button class="add-member" type="submit">Add Member</button>
      </form>
      {showSuccessMessage && (
        <div className="success-message">User added successfully!</div>
      )}
      <button class="view-member-list" onClick={handleClick}>
        View Member List
      </button>
      {showMembers && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr key={index}>
                <td>{member.name}</td>
                <td>{member.email}</td>
                <td>{member.phone}</td>
                <td>{member.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>

  );

}

export default FitnessClubRegistrationForm;
