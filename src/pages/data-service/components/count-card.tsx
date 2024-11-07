export default function CountCard() {
  return (
    <div className="flex w-full flex-col rounded-3xl bg-background shadow-xl md:w-1/2 xl:m-7">
      <h1 className="p-5 text-xl font-extrabold">Count</h1>
      <div className="m-3 flex flex-wrap justify-around gap-4 md:flex-nowrap">
        <div className="w-full rounded-2xl border-b-4 border-lime-500 bg-secondary p-4 shadow-xl md:w-1/3">
          <h1 className="text-2xl font-bold text-gray-500">Books</h1>
          <div className="flex justify-around text-sm ">
            Completed{' '}
            <span className="text-2xl font-extrabold text-lime-600">50</span>
          </div>
          <div className="flex justify-around text-sm">
            On-going{' '}
            <span className="text-2xl font-semibold text-lime-600">5</span>
          </div>
        </div>
        <div className="flex w-full items-center justify-between rounded-2xl border-b-4 border-red-500 bg-secondary p-4 shadow-xl md:w-1/3">
          <div className="text-gray-500">
            <p className="text-2xl font-bold">Videos</p>
            <p className="text-2xl font-bold">Watched</p>
          </div>
          <div className="text-right">
            <span className="text-2xl font-extrabold text-red-400">10</span>
          </div>
        </div>
      </div>
      <div className="m-3 mt-4 flex flex-wrap justify-around gap-4 md:flex-nowrap">
        <div className="w-full rounded-2xl border-b-4 border-cyan-600 bg-secondary p-4 shadow-xl md:w-1/3">
          <h1 className="text-2xl font-bold text-gray-500">Task</h1>
          <div className="flex justify-around text-sm">
            Completed{' '}
            <span className="text-2xl font-extrabold text-lime-600">5</span>
          </div>
          <div className="flex justify-around text-sm">
            Not completed{' '}
            <span className="text-2xl font-semibold text-lime-600">2</span>
          </div>
        </div>
        <div className="flex w-full items-center justify-between rounded-2xl border-b-4 border-amber-300 bg-secondary p-4 shadow-xl md:w-1/3">
          <div className="text-gray-500">
            <p className="text-2xl font-bold">Word</p>
            <p className="text-2xl font-bold">Count</p>
          </div>
          <div className="text-right">
            <span className="text-2xl font-extrabold text-red-400">710</span>
          </div>
        </div>
      </div>
    </div>
  );
}
