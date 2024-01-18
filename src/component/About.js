import React from "react";
import { Table } from "react-bootstrap";
import { orgData } from "./Data";

const About = () => {
  let data = orgData;
  return (
    <div className="container">
      <h1>Medicine</h1>
      <Table striped bordered hover variant="secondary">
        <thead>
          <tr>
            <th className="bg-secondary">Id</th>
            <th className="bg-secondary">Name</th>
            <th className="bg-secondary">Quantity</th>
            <th className="bg-secondary">Price</th>
            <th className="bg-secondary">Expiry</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, ind) => (
            <tr key={ind}>
              <td>{val.id}</td>
              <td>{val.name}</td>
              <td>{val.quantity}</td>
              <td>{val.price}</td>
              <td>{val.expiry}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default About;
