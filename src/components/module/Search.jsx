import { useEffect, useState } from "react";

import { searchUrl } from "../../services/cryptoApi";

function Search({ currency, setCurrency }) {
  const [search, setSearch] = useState("");
  const [coins, setCoins] = useState([]);

  // console.log(coins);

  useEffect(() => {
    const controller = new AbortController();
    if (!search) return;
    const searchApi = async () => {
      try {
        const res = await fetch(searchUrl(search), {
          signal: controller.signal,
        });
        const json = await res.json();
        if (json.coins) {
          setCoins(json.coins);
        } else {
          alert(json.status.error_message);
        }
      } catch (error) {
        if (error.name == !"AbortError") alert(error.message);
      }
    };

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
    </div>
  );
}

export default Search;
