import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Stat = () => {
  // 각 능력치의 초기 상태를 설정합니다.

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [acceleration, setAcceleration] = useState('');
  const [sprintSpeed, setSprintSpeed] = useState('');
  const [positioning, setPositioning] = useState('');
  const [finishing, setFinishing] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  // 능력치를 저장하는 함수
  const saveStats = () => {
    // 여기서는 예시로 각 능력치를 콘솔에 출력합니다.
    console.log('Name:', name);
    console.log('Surname:', surname);
    console.log('Acceleration:', acceleration);
    console.log('Sprint Speed:', sprintSpeed);
    console.log('Positioning:', positioning);
    console.log('Finishing:', finishing);
    console.log('Selected Option:', selectedOption);
  };

  return (
    <div>
      <h2>선수 능력치 관리</h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>능력치</th>
            <th>값 입력</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Surname</td>
            <td>
              <Form.Control
                type="text"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </td>
          </tr>

          <tr id="Position">
            {' '}
            {/* id는 tr 태그에 설정하는 것이 아니라 Form.Select에 설정해야 합니다. */}
            <td>Position</td>
            <td>
              <Form.Select
                aria-label="Default select example"
                value={selectedOption} // 선택된 옵션을 설정
                onChange={(e) => setSelectedOption(e.target.value)} // 옵션이 변경될 때마다 선택된 옵션을 업데이트
              >
                <option>Select your Position</option>
                <option value="1">FW</option>
                <option value="2">MF</option>
                <option value="3">DF</option>
                <option value="4">GK</option>
              </Form.Select>
            </td>
          </tr>
          {selectedOption === '1' && (
            <>
              <tr>
                <td>ACCELERATION</td>
                <td>
                  <Form.Control
                    type="text"
                    value={acceleration}
                    onChange={(e) => setAcceleration(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>SPRINT SPEED</td>
                <td>
                  <Form.Control
                    type="text"
                    value={sprintSpeed}
                    onChange={(e) => setSprintSpeed(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>POSITIONING</td>
                <td>
                  <Form.Control
                    type="text"
                    value={positioning}
                    onChange={(e) => setPositioning(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>FINISHING</td>
                <td>
                  <Form.Control
                    type="text"
                    value={finishing}
                    onChange={(e) => setFinishing(e.target.value)}
                  />
                </td>
              </tr>
            </>
          )}
        </tbody>
      </Table>
      <Button variant="primary" onClick={saveStats}>
        저장
      </Button>
    </div>
  );
};

export default Stat;
