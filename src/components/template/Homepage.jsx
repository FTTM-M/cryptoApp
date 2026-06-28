import { useEffect, useState } from "react";
import CoinTable from "../module/CoinTable";
import Pagination from "../module/Pagination";
import { getApi } from "../../services/cryptoApi";


function Homepage() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch(getApi());
      const json = await res.json();
      setCoins(json);
      setLoading(false);
    };

    fetchApi();
  }, []);

  return (
    <div>
      <Pagination />
      <CoinTable coins={coins} loading={loading} />
    </div>
  );
}

export default Homepage;
