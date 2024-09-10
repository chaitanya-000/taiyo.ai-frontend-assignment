import { useQuery } from "@tanstack/react-query";
import Loading from "../molecules/Loading";
import StatCard from "../molecules/StatCard";
import ErrorFallback from "../molecules/ErrorFallback";
import { fetchWorldCovidStats } from "../apiRequests";

export default function Statistics() {
  const {
    data: worldData,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["getWorldWideData"],
    queryFn: fetchWorldCovidStats,
    retry: 1,
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <Loading />;
  if (error) return <ErrorFallback error={error} refetch={refetch} />;
  return (
    <div className="w-full flex flex-row flex-wrap items-center gap-5 mt-32 mb-32">
      <h2 className="text-3xl font-bold ">Global Statistics</h2>

      <div className="grid w-full grid-cols-2 sm:grid-cols-3 justify-start gap-3 items-center flex-wrap">
        <StatCard title="Total Cases" value={worldData?.cases} />
        <StatCard title="Deaths" value={worldData?.deaths} />
        <StatCard title="Recovered" value={worldData?.recovered} />
        <StatCard title="Active Cases" value={worldData?.active} />
        <StatCard title="Critical Cases" value={worldData?.critical} />
        <StatCard title="Today's Cases" value={worldData?.todayCases} />
        <StatCard title="Today's Deaths" value={worldData?.todayDeaths} />
        <StatCard title="Today's Recovered" value={worldData?.todayRecovered} />
        <StatCard title="Total Tests" value={worldData?.tests} />
        <StatCard
          title="Tests per Million"
          value={worldData?.testsPerOneMillion}
        />
        <StatCard title="Population" value={worldData?.population} />
        <StatCard
          title="Affected Countries"
          value={worldData?.affectedCountries}
        />
      </div>
      <p className="w-full text-center">Covid 19 Global Stats</p>
    </div>
  );
}
