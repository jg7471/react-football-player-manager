import './App.css';
import Header from './components/header/Header';
// import NavBar from './components/NavBar/NavBar';
import Main from './components/mainpage/MainPage';

function App() {
  return (
    <>
      <Header />;{/* <NavBar />; */}
      <div id="main">
        <Main />;
      </div>
    </>
  );
}

export default App;
