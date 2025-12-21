import styles from '../css/Statistics.module.css';

const Statistics = ({ title, stats }) => {

  return (
    <section className={styles.statistics}>

      <h2 className={styles.title}>{title}</h2>

      <ul className={styles.statList}>
        {stats.map(item => (
          <li key={item.id} className={styles.item}>
            <span className={styles.label}>{item.label}</span>
            <span className={styles.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>

    </section>
  );

};

export default Statistics;
