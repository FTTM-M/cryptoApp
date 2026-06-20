import { useEffect, useState } from "react";
import CoinTable from "../module/CoinTable";
import { getApi } from "../../services/cryptoApi";

function Homepage() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch(getApi());
      const json = await res.json();
      setCoins(json);
    };

    fetchApi();
  }, []);

  return (
    <div>
      <CoinTable coins={coins} />
    </div>
  );
}

export default Homepage;
