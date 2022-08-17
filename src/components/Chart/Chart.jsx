import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import faker from 'faker';
import styles from './Chart.module.css';
import ChartDataLabels from 'chartjs-plugin-datalabels';
// Chart.register(ChartDataLabels);

ChartJS.register(
  ChartDataLabels,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: '',
      padding: 0,
      weight: 'bold',
      color: '#00325c',
      font: {
        size: 13,
      },
      align: 'start',
    },
    datalabels: {
      display: true,
      color: 'black',
      align: 'end',
      labels: {
        title: {
          font: {
            weight: 'bold',
          },
        },
        value: {
          color: 'black',
        },
      },
    },
  },
  scales: {
    x: {
      display: true,
      grid: {
        color: 'transparent',
      },
      ticks: {
        color: '#gold',
        font: {
          size: 12,
          lineHeight: 1.17,
        },
      },
    },
    y: {
      grid: {
        drawBorder: false,
      },
      display: true,
      ticks: {
        font: {
          size: 0,
        },
      },
    },
  },
};

// const options = {
//   maintainAspectRatio: false,
//   scales: {
//     x: {
//       grid: {
//         display: false,
//       },
//     },
//     y: {
//       display: false,
//       grid: {
//         display: false,
//       },
//     },
//   },
//   plugins: {
//     legend: {
//       display: false,
//     },
//     title: {
//       display: true,
//       text: 'Avg interest by month (days)',
//       padding: {
//         bottom: 30,
//       },
//       weight: 'bold',
//       color: '#00325c',
//       font: {
//         size: 13,
//       },
//       align: 'start',
//     },
//     datalabels: {
//       display: true,
//       color: 'black',
//       align: 'end',
//       padding: {
//         right: 2,
//       },
//       labels: {
//         padding: { top: 10 },
//         title: {
//           font: {
//             weight: 'bold',
//           },
//         },
//         value: {
//           color: 'green',
//         },
//       },
//       formatter: function (value) {
//         return '\n' + value;
//       },
//     },
//   },
// };

const labels = [
  'Продукты',
  'Алкоголь',
  'Развлечения',
  'Здоровье',
  'Транспорт',
  'Всё',
  'Техника',
  'Коммун',
  'Спорт',
  'Образование',
  'Прочее',
];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12],
      backgroundColor: [' #FF751D', '#FFDAC0', '#FFDAC0'],
      borderRadius: 10,
      barThickness: 38,
    },
  ],
};

// const data = {
//   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Apr', 'Apr', 'Apr', 'Apr', 'May'],
//   datasets: [
//     {
//       label: 'Avg interest by month',
//       data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
//       fill: false,
//       backgroundColor: 'transparent',
//       borderColor: '#06a1e1',
//       tension: 0.1,
//       borderWidth: 4,
//     },
//   ],
// };

export function Chart() {
  return (
    <div className={styles.chartWrapper}>
      <div className={styles.chartContainer}>
        <Bar options={options} data={data} id="Bar" />
      </div>
    </div>
  );
}
