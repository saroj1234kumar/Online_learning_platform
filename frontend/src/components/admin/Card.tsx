export default function Card({ title, value, icon }: any) {
  return (
    <div className="bg-gradient-to-r from-slate-300 to-slate-400 p-5  rounded-lg shadow-md flex items-center gap-3">
      <div className="text-red-500 text-2xl">{icon}</div>
      <div>
        <h3 className="text-black text-lg font-bold">{title}</h3>
        <h2 className="text-xl text-blue-800 font-bold">{value}</h2>
      </div>
    </div>
  );
}
