const ctx = document.getElementById("myChart1").getContext("2d");

const labels = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

const data = {
  labels,
  datasets: [
    {
      data: [
        563000, 473000, 537000, 579000, 487000, 486000, 567000, 1000000, 757000,
        696000, 618000, 736000,
      ],
      // name of the label
      label: "Mievic 2022",
      // fill status
      fill: true,
      // graph background-color
      backgroundColor: "hwb(331 10% 38% / 0.3)",
      // lines border color
      borderColor: "hwb(331 10% 38% / 0.3)",
      // point background-color
      pointBackgroundColor: "hwb(331 10% 38% / 0.6)",
      //point border color
      pointBorderColor: "hwb(331 10% 38% / 0.6)",
      tension: 0.2,
    },
  ],
};

const config = {
  // type of the graph
  type: "bar",
  data: data,
  options: {
    // point size
    radius: 5,
    // the space of the cursor ability to display the float info
    hitRadius: 100,
    hoverRadius: 10,
    // responsive ability
    responsive: true,
    animation: {
      onComplete: () => {
        let delayed;
        const config = {
          type: "line",
          data: data,
          options: {
            animation: {
              onComplete: () => {
                delayed = true;
              },
              delay: (context) => {
                let delay = 0;
                if (
                  context.type === "data" &&
                  context.mode === "default" &&
                  !delayed
                ) {
                  delay = context.dataIndex * 300 + context.datasetIndex * 100;
                }
                return delay;
              },
            },
            scales: {
              x: {
                stacked: true,
              },
              y: {
                stacked: true,
              },
            },
          },
        };
      },
    },
    // function of adding values of the numbers
    scales: {
      y: {
        ticks: {
          callback: function (value) {
            return `${value.toFixed(3)} SAR`;
          },
        },
      },
    },
  },
};

const myChart = new Chart(ctx, config);

const ctx2 = document.getElementById("myChart2").getContext("2d");

const data2 = {
  labels,
  datasets: [
    {
      data: [
        3000, 473000, 537000, 579000, 487000, 486000, 567000, 100, 757000,
        696000, 618000, 736000,
      ],
      // name of the label
      label: "Gate 2022",
      // fill status
      fill: true,
      // graph background-color
      backgroundColor: "hwb(331 10% 38% / 0.3)",
      // lines border color
      borderColor: "hwb(331 10% 38% / 0.3)",
      // point background-color
      pointBackgroundColor: "hwb(331 10% 38% / 0.6)",
      //point border color
      pointBorderColor: "hwb(331 10% 38% / 0.6)",
      tension: 0.2,
    },
  ],
};


const myChart2 = new Chart(ctx2, config);
