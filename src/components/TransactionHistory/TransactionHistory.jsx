import PropTypes from "prop-types";
import style from "./TransactionHistory.module.css";

function TransactionHistory({ items }) {
  return (
    <table className="transaction">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item, index) => (
          <tr key={item.id}>
            <td className={index % 2 !== 0 ? style.odd : ""}>{item.type}</td>
            <td className={index % 2 !== 0 ? style.odd : ""}>{item.amount}</td>
            <td className={index % 2 !== 0 ? style.odd : ""}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TransactionHistory;
