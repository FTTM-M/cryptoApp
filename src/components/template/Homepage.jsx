import { useEffect, useState } from "react";
import CoinTable from "../module/CoinTable";
import Pagination from "../module/Pagination";
import Search from "../module/Search";
import { getApi } from "../../services/cryptoApi";

function Homepage() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("usd");

  useEffect(() => {
    const fetchApi = async () => {
      setLoading(true);
      const res = await fetch(getApi(page, currency));
      const json = await res.json();
      setCoins(json);
      setLoading(false);
    };

    fetchApi();
  }, [page, currency]);

  return (
    <div>
      <Search currency={currency} setCurrency={setCurrency} />
      <CoinTable coins={coins} loading={loading} currency={currency} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default Homepage;
