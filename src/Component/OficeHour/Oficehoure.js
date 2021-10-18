import React from 'react';
import "./Hours.css";

const Oficehoure = () => {
    return (
      <div className="hours p-4 my-5">
        <div className="container">
         <table className="table table-bordered my-5 p-5">
  <thead>
    <tr>
      <th scope="col">TIME AND DAY</th>
      <th scope="col">SAT</th>
      <th scope="col">SAN</th>
      <th scope="col">MON</th>
      <th scope="col">TUE</th>
      <th scope="col">WED</th>
      <th scope="col">THU</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">08:30-12:30</th>
      <td>&#9678;</td>
      <td>&#9678;</td>
      <td>&#9678;</td>
      <td>&#9678;</td>
      <td>&#9678;</td>
      <td>&#9678;</td>
    </tr>
    <tr>
      <th scope="row">14:00-18:00</th>
      <td></td>
      <td>&#9678;</td>
      <td>&#9678;</td>
      <td>&#9678;</td>
      <td>&#9678;</td>
      <td>&#9678;</td>
    </tr>
  </tbody>
</table>
      <p>NOTE :- Closed days: Saturday afternoons, Fridays and public holidays

</p>
        </div>
        </div>
    );
};

export default Oficehoure;