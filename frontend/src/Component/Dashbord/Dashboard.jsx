import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/chats');
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to the Chat Application!</p>
      <button className="btn btn-primary" onClick={handleNavigate}>Go to Chats</button>
    </div>
  );
}

export default Dashboard;
