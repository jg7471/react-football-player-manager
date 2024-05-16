import React, { useState, useEffect } from 'react';
import Form from './Form';

const ShowPlayer = ({ Form }) => {
  const [localStorage, setlocalStorage] = useState(null);
  console.log('localStorage', localStorage);

  useEffect(() => {
    // 컴포넌트가 마운트되면 로컬 스토리지에서 데이터를 가져옵니다.
    const dataFromLocalStorage = localStorage.getItem('yourLocalStorageKey');
    setlocalStorage(dataFromLocalStorage);
  }, []); // 마운트 시에만 실행하도록 빈 배열 전달

  return <Form localStorage={localStorage} />;
};

export default ShowPlayer;
