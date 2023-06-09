import React, {useState} from "react";
import { Doughnut} from "react-chartjs-2";
import { CategoryScale, Chart, registerables } from "chart.js";

Chart.register(CategoryScale);
Chart.register(...registerables);

const data={
    // x-axis label values
    labels: ["Direct", "Search"],
    datasets: [
      {
        label: ["Direct", "Search"],
        // y-axis data plotting values
        data: [50, 50],
        fill: false,
        borderWidth:4,
        backgroundColor: [
            '#4CD7F6',
            '#E17CFD',
        ],
        responsive:true
      },
    ],
}
const Tdata = [
    { id: 1, column1: "Direct", column2: "50" },
    { id: 2, column1: "Search", column2: "50" },
  ];
function Graph() {
    // const [Gdata, setData] = useState([]);
    // setData(data.datasets.data);
  return (
    <div className="md:max-w-[40vw] w-full max-h-[20vh] flex mt-2">
        <div className="container mx-auto">
      <table className="table-fixed w-full border-none">
        <thead>
          <tr className="text-gray-600/50 bg-gray-400/50 ">
            <th className="w-1/2 px-4 py-2 rounded-2xl font-bold">Sources</th>
            <th className="w-1/2 px-4 py-2 rounded-2xl font-bold">Traffice source%</th>
          </tr>
        </thead>
        <tbody className="text-center" >
          {Tdata.map((row) => (
            <tr key={row.id}>
              <td className="border px-4 py-2 border-none font-bold">{row.column1}</td>
              <td className="border px-4 py-2 border-none font-bold">{row.column2}</td>
            </tr>
          ))}
        </tbody>
        </table>
        </div>
      <Doughnut
        data={data}
      />
      
    </div>
  );
}

export default Graph;