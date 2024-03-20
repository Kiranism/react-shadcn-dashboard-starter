import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const data = [
  {
    name: 'Reading',
    total: Math.floor(Math.random() * 6)
  },
  {
    name: 'Watching Videos',
    total: Math.floor(Math.random() * 6)
  },
  {
    name: 'App',
    total: Math.floor(Math.random() * 6)
  }
];

export default function Overview() {
  const colors = ['#adfa1d', '#faad1d', '#1dcaff'];

  return (
    <>
      <div className="flex justify-between">
        <h1 className="p-5 text-xl font-extrabold">Time Spent (Today)</h1>
      </div>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <XAxis
            dataKey="name"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}`}
            domain={[0, 5]}
            ticks={[0, 1, 2, 3, 4, 5]}
          />
          <Bar
            dataKey="total"
            fill={colors[0]}
            radius={[4, 4, 0, 0]}
            barSize={30}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
