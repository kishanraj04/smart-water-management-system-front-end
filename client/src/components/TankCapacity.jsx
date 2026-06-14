export default function TankCapacity() {
   const tankCapacity = 1000;

  return (
    <div className="w-[250px] h-[300px] p-2 rounded-2xl shadow-lg border border-gray-100 text-center flex flex-col justify-center items-center">


        <h2 className="text-sm text-gray-500 mb-2">
          Tank Information
        </h2>

        <h1 className="text-sm font-bold text-blue-600">
          Your Tank Capacity is
        </h1>

        <p className="text-3xl font-extrabold text-green-600 mt-3">
          {tankCapacity} L
        </p>

      </div>
  );
}