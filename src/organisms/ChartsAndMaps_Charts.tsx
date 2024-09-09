import { useQuery } from "@tanstack/react-query";
import { CovidData } from "../types";
import { fetchCovidData } from "../apiRequests";
import Loading from "../molecules/Loading";
import ErrorFallback from "../molecules/ErrorFallback";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function ChartsAndMaps_Charts() {
  const { data, error, isLoading, refetch } = useQuery<CovidData>({
    queryKey: ["covidData"],
    queryFn: fetchCovidData,
    retry: 1,
    staleTime: 30000,
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <Loading />;
  if (error) return <ErrorFallback error={error} refetch={refetch} />;
  if (!data) return <div>No data available</div>;

  const dates = Object.keys(data.cases);
  const cases = Object.values(data.cases);
  const deaths = Object.values(data.deaths);
  const recovered = Object.values(data.recovered);

  const chartData = {
    labels: dates,
    datasets: [
      {
        label: "Cases",
        data: cases,
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        fill: true,
      },
      {
        label: "Deaths",
        data: deaths,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
      },
      {
        label: "Recovered",
        data: recovered,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };
  return (
    <div>
      <h2 className="text-3xl font-bold">Charts and Maps</h2>
      <Line data={chartData} />
    </div>
  );
}
