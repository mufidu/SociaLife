import './App.css';
import Auth from './pages/Auth/Auth';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Chat from './pages/Chat/Chat';
// import { useEffect, useState } from 'react';
// import AlertModal from './components/AlertModal/AlertModal';

function App() {
  const user = useSelector((state) => state.authReducer.authData);
  // const [AlertModalOpened, setAlertModalOpened] = useState(false);

  return (
    <div className="App">
      <div className="blur" style={{ top: '-18%', right: '0' }}></div>
      <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="chat" /> : <Navigate to="auth" />}
        />
        <Route
          path="/auth"
          element={user ? <Navigate to="../chat" /> : <Auth />}
        />
        <Route
          path="/chat"
          element={user ? <Chat /> : <Navigate to="../auth" />}
        />
      </Routes>
    </div>
  );
}

export default App;
