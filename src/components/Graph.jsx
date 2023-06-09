import React from "react";
import { Line } from "react-chartjs-2";
import { CategoryScale, Chart, registerables } from "chart.js";

Chart.register(CategoryScale);
Chart.register(...registerables);
function Graph() {
  return (
    <div className="w-full md:min-w-[100%] md:min-h-[50vh] min-h-[100%]">
      <Line
        data={{
          // x-axis label values
          labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"],
          datasets: [
            {
              label: "# of Calories Lost",
              // y-axis data plotting values
              data: [200, 300, 1300, 520, 2000, 350,150],
              fill: false,
              borderWidth:4,
              backgroundColor: "rgb(255, 99, 132)",
              borderColor:'#8E7CFD',
              responsive:true
            },
          ],
        }}
      />
    </div>
  );
}

export default Graph;