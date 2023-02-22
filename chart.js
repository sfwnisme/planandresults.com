const ctx = document.getElementById("myChart").getContext("2d");

/* const labels = [
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
      // backgroundColor: "hwb(331 10% 38% / 0.3)",
      backgroundColor: [
        "hsl(334deg 62% 64%/ 50%)",
        "hsl(37deg 96% 64% / 50%)",
        "hwb(209deg 10% 38% / 70%)",
      ],
      // backgroundColor: ["#ff6384", "#36a2eb", "#cc65fe", "#ffce56"],
      // lines border color
      borderColor: "hwb(331 10% 38% / 0.3)",
      // point background-color
      pointBackgroundColor: "hwb(331 10% 38% / 0.6)",
      //point border color
      pointBorderColor: "hwb(331 10% 38% / 0.6)",
      tension: 0.2,
      // color: 'red'
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
    // title font style
    plugins: {
      legend: {
        labels: {
          // This more specific font property overrides the global property
          font: {
            size: 15,
            weight: "900",
          },
        },
      },
    },
    // padding of the full chart
    layout: {
      // padding: {
      //   left: 50,
      // },
      backgroundColor: "#000",
    },
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
 */

// const DATA_COUNT = 7;
// const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

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
  labels: labels,
  datasets: [
    {
      label: "Dataset 1",
      // K = 3 numbers | M = 4 numbers
      data: [563, 420, 136, 670, 583, 465, 543, 170, 732, 290, 20, 340],
      // name of the label
      label: "Hunger 2021",
      // fill status
      fill: false,
      // graph background-color
      // backgroundColor: "hwb(331 10% 38% / 0.3)",
      backgroundColor: ["hsl(37deg 96% 64%/ 50%)"],
      // backgroundColor: ["#ff6384", "#36a2eb", "#cc65fe", "#ffce56"],
      // lines border color
      borderColor: ["hsl(37deg 96% 64%/ 30%)"],
      // point background-color
      pointBackgroundColor: ["hsl(37deg 96% 64%/ 100%)"],
      //point border color
      pointBorderColor: "hwb(331 10% 38% / 0.6)",
      // color: 'red'
      pointRadius: 2,
    },
    {
      label: "Dataset 2",
      data: [523, 472, 516, 540, 423, 360, 503, 200, 752, 690, 890, 730],
      // name of the label
      label: "Hunger 2022",
      // fill status
      fill: false,
      // graph background-color
      // backgroundColor: "hwb(331 10% 38% / 0.3)",
      backgroundColor: ["hsl(37deg 96% 64%/ 100%)"],
      // backgroundColor: ["#ff6384", "#36a2eb", "#cc65fe", "#ffce56"],
      // lines border color
      borderColor: ["hsl(37deg 96% 64%/ 70%)"],
      // point background-color
      pointBackgroundColor: ["hsl(37deg 96% 64%/ 100%)"],
      //point border color
      // color: 'red'
      pointBorderColor: "hwb(331 10% 38% / 0.6)",
      pointRadius: 2,
    },
    {
      label: "Dataset 3",
      data: [533, 430, 536, 230, 483, 40, 503, 120, 722, 695, 845, 704],
      // name of the label
      label: "Mievic 2021",
      // fill status
      fill: false,
      // graph background-color
      // backgroundColor: "hwb(331 10% 38% / 0.3)",
      backgroundColor: ["hsl(141deg 100% 67%/ 50%)"],
      // backgroundColor: ["#ff6384", "#36a2eb", "#cc65fe", "#ffce56"],
      // lines border color
      borderColor: ["hsl(141deg 100% 67%/ 30%)"],
      // point background-color
      pointBackgroundColor: ["hsl(141deg 100% 67%/ 100%)"],
      //point border color
      pointBorderColor: "hwb(331 10% 38% / 0.6)",
      pointRadius: 2,
    },
    {
      label: "Dataset 4",
      data: [563, 470, 536, 570, 1483, 460, 503, 100, 752, 690, 800, 700],
      // name of the label
      label: "Mievic 2022",
      // fill status
      fill: false,
      // graph background-color
      // backgroundColor: "hwb(331 10% 38% / 0.3)",
      backgroundColor: ["hsl(141deg 100% 67%/ 100%)"],
      // backgroundColor: ["#ff6384", "#36a2eb", "#cc65fe", "#ffce56"],
      // lines border color
      borderColor: ["hsl(141deg 100% 67%/ 70%)"],
      // point background-color
      pointBackgroundColor: ["hsl(141deg 100% 67%/ 100%)"],
      //point border color
      pointBorderColor: "hwb(331 10% 38% / 0.6)",
      tension: 0.2,
      // color: 'red'
      pointRadius: 2,
    },
  ],
};

let documentWidth = document.documentElement.clientWidth;
let chartType = "";
if (documentWidth >= 800) {
  chartType = "bar";
} else {
  chartType = "line";
}
const config = {
  // type of the graph

  type: chartType,

  data: data,
  options: {
    // point size
    radius: 5,
    // the space of the cursor ability to display the float info
    hitRadius: 100,
    hoverRadius: 10,
    // responsive ability
    responsive: true,
    // title font style
    plugins: {
      // the title of the chart.js
      title: {
        // disabled the title due to get more HIEGHT for the chart on mobile
        display: false,
        text: "احصائيات خطة ونتائج",
        font: {
          size: 15,
          weight: 400,
        },
      },
      legend: {
        labels: {
          // This more specific font property overrides the global property
          font: {
            size: 12,
            weight: "100",
          },
          usePointStyle: true,
        },
      },
    },
    // padding of the full chart
    layout: {
      // padding: {
      //   left: 50,
      // },
      backgroundColor: "#000",
    },
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
            value.length = 1;
            // console.log(+value.toString());
            if (value >= 1000) {
              // this process to get the first number and the second number to the short million format
              return `${+value.toString().slice(0, 1)}.${+value
                .toString()
                .slice(1, 2)}M SAR`;
            } else {
              return `${value}K SAR`;
            }
          },
        },
      },
    },
  },
};

const myChart = new Chart(ctx, config);
