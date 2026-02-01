import styles from "../css/Container.module.css"
const Container = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.containerTitle}>{title}</h2>
      {children}
    </div>
  );
};

export default Container;