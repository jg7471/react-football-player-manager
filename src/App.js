import './App.css';
import Header from './header/Header';
import NavBar from './components/NavBar';
import Main from './main/mainpage/MainPage';

function App() {
  return (
    <>
      <Header />;
      <NavBar />;
      <div id="main">
        <Main />;
      </div>
    </>
  );
}

export default App;
