import styles from '../css/FriendsList.module.css';

const FriendList = ({title, friends}) => {

    return (
        <section className={styles.friendsListWrp}>

            <h2 className={styles.friendsListTitle}>{title}</h2>

            <ul className={styles.friendsList}>
                {friends.map(friend => (
                    <li className={styles.item} key={friend.id}>
                        <span className={friend.isOnline ? styles.Online : styles.Offline}></span>
                        <img className={styles.avatar} src={friend.avatar} alt="User avatar" width="48"/>
                        <p className={styles.name}>{friend.name}</p>
                    </li>
                ))}
            </ul>

        </section>
    )

};

export default FriendList;