import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import styles from './MakePlayer.module.scss';
import PlayerContext from '../config/PlayerContext';

const MakePlayer = ({ onAdd, playerData }) => {
  console.log('onSave: ', onAdd);

  // 각 능력치의 초기 상태를 설정
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [acceleration, setAcceleration] = useState('');
  const [sprintSpeed, setSprintSpeed] = useState('');
  const [positioning, setPositioning] = useState('');
  const [finishing, setFinishing] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const { onAddData } = useContext(PlayerContext); //Provider 호출

  const makePlayerDB = (e) => {
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

    onAddData(playerData); //Provider 이용하여 저장

    // 데이터를 저장하는 함수 호출
    onAdd({ playerData });
    // localStorage.setItem('playerData', JSON.stringify([])); //이미 Form에서 저장함 -> 호출만 해주면 됨 a1
  };

  return (
    <>
      <h2>선수_능력치_관리</h2>
      <div className="groupbox">
        <div className="linebox">
          <div className="header">능력치</div>
          <div className="header">값_입력</div>
        </div>
        <div className="table-row">
          <div className="stat">Name</div>
          <div className="stat">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="table-row">
          <div className="stat">Surname</div>
          <div className="stat">
            <input
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>
        </div>
        <div id="Position" className="table-row">
          <div className="stat">Position</div>
          <div className="stat">
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
            <div className="linebox">
              <div className="stat">ACCELERATION</div>
              <div className="stat">
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={acceleration}
                  onChange={(e) => setAcceleration(e.target.value)}
                />
              </div>
            </div>
            <div className="linebox">
              <div className="stat">SPRINT_SPEED</div>
              <div className="stat">
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={sprintSpeed}
                  onChange={(e) => setSprintSpeed(e.target.value)}
                />
              </div>
            </div>
            <div className="linebox">
              <div className="stat">POSITIONING</div>
              <div className="stat">
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={positioning}
                  onChange={(e) => setPositioning(e.target.value)}
                />
              </div>
            </div>
            <div className="linebox">
              <div className="stat">FINISHING</div>
              <div className="stat">
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
      <Button variant="primary" onClick={makePlayerDB}>
        저장
      </Button>
    </>
  );
};

export default MakePlayer;
