import React from 'react';

const WelcomePage = ({ username, userList }) => {
  return (
    <div className="welcome">
      <h1>Welcome, {username}!</h1>
      <p>You have successfully logged in.</p>

      {userList.length > 0 && (
        <div className="user-list">
          <h3>All Entered Usernames:</h3>
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

export default WelcomePage;
