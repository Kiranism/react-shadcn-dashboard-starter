import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 }
  //   { name: 'Group C', value: 300 },
  //   { name: 'Group D', value: 200 },
];

const COLORS = ['#EC4D61', '#84BD47'];

const Reward = () => {
  return (
    <div className="mt-7 flex w-full flex-col rounded-3xl bg-background shadow-xl xl:m-7 xl:mt-0 xl:w-1/2">
      <h1 className="p-5 text-xl font-extrabold">Reward</h1>
      <div
        style={{ height: 300 }}
        className="flex flex-col items-end justify-center"
      >
        <div className="mr-5 flex flex-col justify-around gap-3">
          <p className="flex items-center">Spent</p>
          <p className="flex items-center">Earned</p>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Reward;
