import chartdown from "../../assets/chart-down.svg";
import chartup from "../../assets/chart-up.svg";

function CoinTable({ coins }) {
  // console.log(coins);
  return (
    <div>
      <table>
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
            <Table coin={coin} key={coin.id} />)
          )}
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
}) => {
  return (
    <tr>
      <th>
        <div>
          <img src={image} alt={name} />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </th>
      <th>{name}</th>
      <th>${current_price.toLocaleString()}</th>
      <th>{price_change_percentage_24h?.toFixed(2)}%</th>
      <th>${total_volume.toLocaleString()}</th>
      <th>
        <img
          src={price_change_percentage_24h > 0 ? chartup : chartdown}
          alt=""
        />
      </th>
    </tr>
  );
};
