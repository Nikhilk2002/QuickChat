import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Chat() {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-12">
          <h2 className="text-center">Chats Page</h2>
          <p className="text-center">Here are your chats.</p>
        </div>
      </div>
      <div className="row">
        {/* Example chat list */}
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Chat with Alice</h5>
              <p className="card-text">Last message: Hey, how are you?</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Chat with Bob</h5>
              <p className="card-text">Last message: Don't forget the meeting tomorrow.</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Chat with Carol</h5>
              <p className="card-text">Last message: Happy Birthday!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
