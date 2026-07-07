import { useEffect, useState } from "react";
import CoinTable from "../module/CoinTable";
import Pagination from "../module/Pagination";
import Search from "../module/Search";
import { getApi } from "../../services/cryptoApi";
import Chart from "../module/Chart";

function Homepage() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("usd");
  const [chart, setChart] = useState(null);

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
      <CoinTable
        coins={coins}
        loading={loading}
        currency={currency}
        setChart={setChart}
      />
      <Pagination page={page} setPage={setPage} />
      {!!chart && <Chart chart={chart} setChart={setChart} />}
    </div>
  );
}

export default Homepage;
