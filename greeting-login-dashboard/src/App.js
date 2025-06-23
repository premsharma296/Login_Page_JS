import React, { useState } from 'react';
import Greeting from './Greeting';
import LoginPage from './LoginPage';
import WelcomePage from './WelcomePage';

function App() {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState('');
  const [userList, setUserList] = useState([]);

  const handleLogin = (name) => {
    setUsername(name);
    setUserList((prev) => [...prev, name]);
    setStep(3);
  };

  return (
    <div className="app">
      {step === 1 && <Greeting next={() => setStep(2)} />}
      {step === 2 && <LoginPage onLogin={handleLogin} userList={userList} />}
      {step === 3 && <WelcomePage username={username} userList={userList} />}
    </div>
  );
}

export default App;
