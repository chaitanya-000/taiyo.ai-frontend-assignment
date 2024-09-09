import { QueryObserverResult } from "@tanstack/react-query";

interface ErrorProps {
  error: Error | null;
  refetch: () => Promise<QueryObserverResult<CovidData, Error>>;
}

interface CovidData {
  cases: Record<string, number>;
  deaths: Record<string, number>;
  recovered: Record<string, number>;
}

export default function ErrorFallback({ error, refetch }: ErrorProps) {
  return (
    <div className='w-full h-screen flex items-center justify-center flex-col'>
      <h1 className='tracking-tight font-bold text-red-600 text-3xl '>
        {error?.message || "An error occurred"}
      </h1>
      <button
        className='mt-3 px-4 py-2.5 border-2 text-green-500 border-green-500 hover:bg-blue-500 hover:border-blue-500 rounded-lg hover:text-white font-bold'
        onClick={() => refetch()}
      >
        Try Again
      </button>
    </div>
  );
}
