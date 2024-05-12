import React from 'react';
import Table from 'react-bootstrap/Table';

const ManagePlayer = () => {
  return <div>ManagePlayer</div>;
  function DarkExample() {
    return (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr id="PACE">
            <th>ACCELERATION</th>
            <th>SPRINT SPEED</th>
          </tr>
        </thead>
        <tbody>
          <tr id="SHOOTING">
            <td>POSITIONING</td>
            <td>FINISHING</td>
            <td>SHOT POWER</td>
            <td>LONG SHOTS</td>
          </tr>
          <tr id="PASSING">
            <td>VISION</td>
            <td>CROSSING</td>
            <td>FREE KICK ACCURACY</td>
            <td>SHORT PASSING</td>
            <td>LONG PASSING</td>
          </tr>
          <tr id="DRIBBLING">
            <td>AGILITY</td>
            <td>BALANCE</td>
            <td>REACTIONS</td>
            <td>BALL CONTROL</td>
            <td>DRIBBLING</td>
          </tr>
        </tbody>
      </Table>
    );
  }
};

export default ManagePlayer;
