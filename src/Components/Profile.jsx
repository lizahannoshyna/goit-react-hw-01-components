const Profile = ({ data }) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={data.avatar} alt="User avatar" className="avatar" />
        <p className="name">{data.username}</p>
        <p className="tag">@{data.tag}</p>
        <p className="location">{data.location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{data.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{data.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{data.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
