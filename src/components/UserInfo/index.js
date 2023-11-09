import './index.css'

const UserInfo = () => (
  <div className="user-info-container">
    <img
      className="profile-img"
      src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
      alt="profile"
    />
    <div className="user-details">
      <h1 className="user-name">Wade Warren</h1>
      <p className="user-designation">Software developer at UK</p>
    </div>
  </div>
)

export default UserInfo
