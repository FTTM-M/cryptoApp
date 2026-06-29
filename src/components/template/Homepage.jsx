import { useEffect, useState } from "react";
import CoinTable from "../module/CoinTable";
import Pagination from "../module/Pagination";
import { getApi } from "../../services/cryptoApi";

function Homepage() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchApi = async () => {
      setLoading(true);
      const res = await fetch(getApi(page));
      const json = await res.json();
      setCoins(json);
      setLoading(false);
    };

    fetchApi();
  }, [page]);

  return (
    <div>
      <CoinTable coins={coins} loading={loading} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default Homepage;
