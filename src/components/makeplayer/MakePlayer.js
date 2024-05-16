import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import styles from './MakePlayer.module.scss';

const {
  header,
  'table-container': tableContainer,
  'table-row': tableRow,
  'table-cell': tableCell,
  input,
} = styles;

const MakePlayer = ({ onAdd }) => {
  console.log('onSave: ', onAdd);
  // 각 능력치의 초기 상태를 설정합니다.

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [acceleration, setAcceleration] = useState('');
  const [sprintSpeed, setSprintSpeed] = useState('');
  const [positioning, setPositioning] = useState('');
  const [finishing, setFinishing] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const formSubmitHandler = (e) => {
    e.preventDefault();

    // 사용자가 입력한 데이터 수집
    const playerData = {
      name,
      surname,
      acceleration,
      sprintSpeed,
      positioning,
      finishing,
      position: selectedOption,
    };

    // 데이터를 저장하는 함수 호출
    onAdd(playerData);
    // localStorage.setItem('playerData', JSON.stringify([])); //이미 Form에서 저장함 -> 호출만 해주면 됨 a1
  };
  return (
    <div>
      <h2 className={header}>선수_능력치_관리</h2>
      <div className="table-container">
        <div className="table-row">
          <div className="table-header">능력치</div>
          <div className="table-header">값_입력</div>
        </div>
        <div className="table-row">
          <div className="table-cell">Name</div>
          <div className="table-cell">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="table-row">
          <div className="table-cell">Surname</div>
          <div className="table-cell">
            <input
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>
        </div>
        <div id="Position" className="table-row">
          <div className="table-cell">Position</div>
          <div className="table-cell">
            <select
              aria-label="Default select example"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option>Select your Position</option>
              <option value="1">FW</option>
              <option value="2">MF</option>
              <option value="3">DF</option>
              <option value="4">GK</option>
            </select>
          </div>
        </div>
        {selectedOption === '1' && (
          <>
            <div className="table-row">
              <div className="table-cell">ACCELERATION</div>
              <div className="table-cell">
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={acceleration}
                  onChange={(e) => setAcceleration(e.target.value)}
                />
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell">SPRINT_SPEED</div>
              <div className="table-cell">
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={sprintSpeed}
                  onChange={(e) => setSprintSpeed(e.target.value)}
                />
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell">POSITIONING</div>
              <div className="table-cell">
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={positioning}
                  onChange={(e) => setPositioning(e.target.value)}
                />
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell">FINISHING</div>
              <div className="table-cell">
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={finishing}
                  onChange={(e) => setFinishing(e.target.value)}
                />
              </div>
            </div>
          </>
        )}
      </div>
      <Button variant="primary" onClick={formSubmitHandler}>
        저장
      </Button>
    </div>
  );
};

export default MakePlayer;
