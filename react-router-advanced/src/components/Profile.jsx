import React from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import ProfileDetails from './ProfileDetails'
import ProfileSettings from './ProfileSettings'

const Profile = () => {
  const location = useLocation()

  return (
    <div className="page-container">
      <h1>User Profile</h1>
      
      <nav className="profile-nav">
        <Link 
          to="details" 
          className={location.pathname.includes('details') ? 'active' : ''}
        >
          Details
        </Link>
        <Link 
          to="settings" 
          className={location.pathname.includes('settings') ? 'active' : ''}
        >
          Settings
        </Link>
      </nav>

      <div className="profile-content">
        <Routes>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
          <Route path="/" element={<ProfileDetails />} />
        </Routes>
      </div>
    </div>
  )
}

export default Profile