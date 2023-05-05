import { Route, Routes } from 'react-router-dom';
import './styles/App.scss';
import Page404 from './routes/Page404';
import HomePage from './routes/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App wrapper">
      <Header />
      <div className="appContent">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
