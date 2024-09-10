export default function StatCard({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <div className="px py-4 sm:py-4 sm:text-2xl max-w-md text-center bg-slate-700 text-white font-black rounded-md shadow-sm">
      <p>
        {title} <br /> {value?.toLocaleString()}
      </p>
    </div>
  );
}
