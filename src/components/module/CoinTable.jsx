import { RotatingLines } from "react-loader-spinner";

import chartdown from "../../assets/chart-down.svg";
import chartup from "../../assets/chart-up.svg";

import styles from "./CoinTable.module.css";

function CoinTable({ coins, loading, currency, setChart }) {
  // console.log(coins);
  return loading ? (
    <RotatingLines color="gray" />
  ) : (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Name</th>
            <th>Price</th>
            <th>24h</th>
            <th>Total volume</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <Table
              coin={coin}
              key={coin.id}
              currency={currency}
              setChart={setChart}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CoinTable;

const Table = ({
  coin: {
    image,
    name,
    symbol,
    current_price,
    price_change_percentage_24h,
    total_volume,
  },
  currency,
  setChart,
}) => {
  // console.log(currency);
  const chartHandler = () => {
    setChart(true);
  };
  return (
    <tr>
      <th>
        <div className={styles.symbol} onClick={chartHandler}>
          <img src={image} alt={name} />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </th>
      <th>{name}</th>
      <th>
        {currency === "eur" ? "€" : currency === "jpy" ? "¥" : "$"}
        {current_price.toLocaleString()}
      </th>
      <th
        className={price_change_percentage_24h > 0 ? styles.true : styles.fale}>
        {price_change_percentage_24h?.toFixed(2)}%
      </th>
      <th>
        {currency === "eur" ? "€" : currency === "jpy" ? "¥" : "$"}
        {total_volume.toLocaleString()}
      </th>
      <th>
        <img
          src={price_change_percentage_24h > 0 ? chartup : chartdown}
          alt=""
        />
      </th>
    </tr>
  );
};
