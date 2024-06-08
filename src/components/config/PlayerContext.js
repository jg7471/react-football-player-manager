import React, { createContext, useState, useEffect } from 'react';

const PlayerContext = createContext({
  //로그인 관련
  isLoggedIn: false, // 로그인 했는지의 여부
  userName: '',
  onLogout: () => {},
  onLogin: () => {},
});

export const PlayerContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  // 로그인 핸들러
  const loginHandler = (token, userName, role) => {
    // json에 담긴 인증 정보를 클라이언트에 보관
    // 1. 로컬 스토리지 - 브라우저가 종료되어도 유지됨.
    // 2. 세션 스토리지 - 브라우저가 종료되면 사라짐.
    localStorage.setItem('ACCESS_TOKEN', token.access_token);
    localStorage.setItem('REFRESH_TOKEN', token.refresh_token);
    localStorage.setItem('LOGIN_USERNAME', userName);
    localStorage.setItem('USER_ROLE', role);
    setIsLoggedIn(true);
    setUserName(userName);
  };

  // 로그아웃 핸들러
  const logoutHandler = () => {
    localStorage.clear(); //로컬스토리지 내용 전체 삭제 : sessionStorage 메서드 동일
    setIsLoggedIn(false);
    setUserName('');
  };

  //로그인 했다면 새로고침 해도 로그인 유지됨
  useEffect(() => {
    if (localStorage.getItem('ACCESS_TOKEN')) {
      setIsLoggedIn(true);
      setUserName(localStorage.getItem('LOGIN_USERNAME'));
    }
  }, []); //두번째 의존성 배열

  return (
    <PlayerContext.Provider
      value={{
        isLoggedIn,
        userName,
        onLogout: logoutHandler,
        onLogin: loginHandler,
        // Provider value 설정
      }}
    >
      {props.children}
      {/* Provider children에서 전역적 필요한 것만 사용 하는게 바람직- */}
    </PlayerContext.Provider>
  );
};

export default PlayerContext;
