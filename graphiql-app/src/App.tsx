import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Page404 from './routes/Page404';
import HomePage from './routes/HomePage';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="appContent">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
