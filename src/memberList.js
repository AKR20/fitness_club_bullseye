import React from "react";

function MemberList({ members }) {
  return (
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
  );
};

export default MemberList;
