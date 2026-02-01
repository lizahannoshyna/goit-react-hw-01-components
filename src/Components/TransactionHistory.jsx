import styles from "../css/TransactionHistory.module.css"
const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.thead}>
        <tr className={styles.theadRow}>
          <th className={styles.theadTitle}>Type</th>
          <th className={styles.theadTitle}>Amount</th>
          <th className={styles.theadTitle}>Currency</th>
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={styles.row}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
