import { useState } from "react";
import styles from "./Chart.module.css";
import Convert from "../../helpers/Convert";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  CartesianGrid,
  YAxis,
  XAxis,
  Legend,
  Tooltip,
} from "recharts";

function Chart({ chart, setChart }) {
  const [type, setType] = useState("prices");
  console.log(Convert(chart, type));
  return (
    <div className={styles.container}>
      <span className={styles.cross} onClick={() => setChart(null)}>
        X
      </span>
      <div className={styles.chart}>
        <div className={styles.graph}>
          <ChartGraph type={type} data={Convert(chart, type)} />
        </div>
      </div>
    </div>
  );
}

export default Chart;

const ChartGraph = ({type, data}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={400} height={400} data={data}>
        <Line
          type="monotone"
          dataKey={type}
          stroke="#495ac8"
          strokeWidth="2px"
        />
        <YAxis dataKey={type} domain={["auto", "auto"]} />
        <XAxis dataKey="date" hide />
        <Legend />
        <Tooltip />
        <CartesianGrid stroke="#404042" />
      </LineChart>
    </ResponsiveContainer>
  );
};
