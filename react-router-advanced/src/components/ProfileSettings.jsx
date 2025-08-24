import React from 'react'

const ProfileSettings = () => {
  return (
    <div>
      <h2>Profile Settings</h2>
      <form className="settings-form">
        <div className="form-group">
          <label>Username:</label>
          <input type="text" defaultValue="johndoe" />
        </div>
        <div className="form-group">
          <label>Email Notifications:</label>
          <input type="checkbox" defaultChecked />
        </div>
        <button type="submit" className="save-btn">Save Settings</button>
      </form>
    </div>
  )
}

export default ProfileSettings