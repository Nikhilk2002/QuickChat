import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Settings() {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-12">
          <h2 className="text-center mb-4">Settings Page</h2>
          <p className="text-center mb-4">Here are your settings.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Profile Settings</h5>
              <p className="card-text">Manage your profile information and preferences.</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Notification Settings</h5>
              <p className="card-text">Configure your notification preferences and alerts.</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Privacy Settings</h5>
              <p className="card-text">Adjust your privacy settings and security options.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
