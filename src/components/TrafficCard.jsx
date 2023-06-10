import Donut from "./Donut"
function TrafficCard(props) {
  const name = props.name;
  return (
    <div className="bg-[#EDEDF6] w-[100vw] lg:w-1/2 md:w-1/2 p-6 rounded-2xl hover:text-white hover:bg-gradient-to-r from-sky-400 from-10% via-sky-500 via-30% to-fuchsia-500 mb-4">
      <h1 className="text-[24px] font-bold">{name}</h1>
      <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <Donut/>
    </div>
  );
}
export default TrafficCard;
