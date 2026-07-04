import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";

import { searchUrl } from "../../services/cryptoApi";

function Search({ currency, setCurrency }) {
  const [search, setSearch] = useState("");
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  // console.log(coins);

  useEffect(() => {
    const controller = new AbortController();
    setCoins([]);
    if (!search) {
      setLoading(false);
      return;
    }
    const searchApi = async () => {
      try {
        const res = await fetch(searchUrl(search), {
          signal: controller.signal,
        });
        const json = await res.json();
        if (json.coins) {
          setCoins(json.coins);
          setLoading(false);
        } else {
          alert(json.status.error_message);
        }
      } catch (error) {
        if (error.name == !"AbortError") alert(error.message);
      }
    };
    setLoading(true);
    searchApi();

    return () => controller.abort();
  }, [search]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <select
        value={currency}
        onChange={(e) => {
          setCurrency(e.target.value);
        }}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>
      <div>
        {loading && (
          <RotatingLines color="#434975" width="50px" height="50px" />
        )}
        {coins.map((coin) => (
          <ul>
            <li>
              <img src={coin.thumb} alt={coins.name} />
              <p>{coin.name}</p>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Search;
