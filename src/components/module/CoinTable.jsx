import chartdown from "../../assets/chart-down.svg"
import chartup from "../../assets/chart-up.svg"


function CoinTable({ coins }) {
  console.log(coins);
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
          {coins.map(coin=>( 
            <tr key={coin.id}>
              <th>
                <div>
                  <img src={coin.image} alt={coin.name} />
                  <span>{coin.symbol.toUpperCase()}</span>
                </div>
              </th>
              <th>{coin.name}</th>
              <th>${coin.current_price.toLocaleString()}</th>
              <th>{coin.price_change_percentage_24h.toFixed(2)}%</th>
              <th>${coin.total_volume.toLocaleString()}</th>
              <th><img src={coin.price_change_percentage_24h >0 ? chartup:chartdown} alt="" /></th>
            </tr>
          ))}
            </tbody>
       
      </table>
    </div>
  );
}

export default CoinTable;
