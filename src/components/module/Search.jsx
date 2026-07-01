import { useEffect, useState } from "react";

import { searchUrl } from "../../services/cryptoApi";

function Search({ currency, setCurrency }) {
  const [search, setSearch] = useState("");
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    if (!search) return;
    const searchApi = async () => {
      const res = await fetch(searchUrl(search));
      const json = await res.json();
      if (json.coins) setCoins(json.coins);
    };
    searchApi();
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
