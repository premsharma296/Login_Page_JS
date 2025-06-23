import React, { useState } from 'react';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [userList, setUserList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() !== '') {
      setUserList([...userList, username]);
      onLogin(username);
      setUsername('');
    }
  };

  return (
    <div className="login-form">
      <h2>Enter Username</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        /><br />
        <button type="submit">Submit</button>
      </form>

      {userList.length > 0 && (
        <div className="user-list">
          <h3>Previously Entered Usernames:</h3>
          <ul>
            {userList.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
