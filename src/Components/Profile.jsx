import styles from '../css/Profile.module.css';

const Profile = ({ data }) => {
  return (
    <section className={styles.profile}>
      <div className={styles.profileDescription}>
        <div className={styles.avatarWrp}>
        <img src={data.avatar} alt="User avatar" className={styles.avatar} />
        </div>
        <h2 className={styles.name}>{data.username}</h2>
        <h4 className={styles.tag}>@{data.tag}</h4>
        <h3 className={styles.location}>{data.location}</h3>
      </div>

      <ul className={styles.stats}>
        <li className={styles.statsItem}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{data.stats.followers}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{data.stats.views}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{data.stats.likes}</span>
        </li>
      </ul>
    </section>
  );
};

export default Profile;
