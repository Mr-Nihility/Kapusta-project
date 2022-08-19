import React, { useEffect } from 'react';
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
import styles from './Chart.module.css';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useSelector } from 'react-redux';
import { getSuccessToken } from 'redux/auth/auth-selectors';
import { useState } from 'react';

ChartJS.register(
  ChartDataLabels,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const Chart = ({ itemEl }) => {
  const itemSliceKeys = Object.keys(itemEl[1]).slice(1);
  const itemSliceValues = Object.values(itemEl[1]).slice(1);

  const [widthScreen, setWidthScreen] = useState(0);

  const token = useSelector(getSuccessToken);

  useEffect(() => {
    const doResize = evt => {
      setWidthScreen(evt.target.outerWidth);
    };
    window.addEventListener('resize', doResize);
    return () => {
      window.removeEventListener('resize', doResize);
    };
  });

  const itemLabels = itemSliceKeys.map(item => {
    return item;
  });
  const itemData = itemSliceValues.map(item => {
    return item;
  });

  useEffect(() => {
    if (!token) {
      return;
    }
  }, [token]);

  const optionsHorizontal = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    keepAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        display: false,
      },
      title: {
        display: true,
        text: '',
        padding: 2,
        weight: 'bold',
        color: '#00325c',
        font: {
          size: 13,
        },
        align: 'start',
      },
      datalabels: {
        anchor: 'end',
        offset: -20,
        align: 'end',
        padding: 25,
        display: true,
        color: 'black',
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
          padding: 0,
          maxRotation: 0,
          minRotation: 0,
          autoSkip: false,
          font: {
            size: 12,
            lineHeight: 1.17,
          },
        },
      },
      y: {
        grid: {
          color: '#F5F6FB',
          lineWidth: 2,
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
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    keepAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        display: false,
      },
      title: {
        display: true,
        text: '',
        padding: 2,
        weight: 'bold',
        color: '#00325c',
        font: {
          size: 13,
        },
        align: 'start',
      },
      datalabels: {
        anchor: 'end',
        offset: -20,
        align: 'end',
        padding: 25,
        display: true,
        color: 'black',
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
          padding: 0,
          maxRotation: 0,
          minRotation: 0,
          autoSkip: false,
          font: {
            size: 12,
            lineHeight: 1.17,
          },
        },
      },
      y: {
        grid: {
          color: '#F5F6FB',
          lineWidth: 2,
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

  const data = {
    labels: itemLabels,
    datasets: [
      {
        label: 'Dataset 1',
        data: itemData,
        backgroundColor: [' #FF751D', '#FFDAC0', '#FFDAC0'],
        borderRadius: 10,
        maxBarThickness: 38,
        barScale: 2,
      },
    ],
  };

  return (
    <div className={styles.chartWrapper}>
      <div className={styles.chartContainer}>
        {widthScreen <= 767 && (
          <Bar
            options={optionsHorizontal}
            data={data}
            id="Bar"
            style={{
              display: 'flex',
              width: '760px',
              maxWidth: '1034px',
              height: '360px',
            }}
            width={'760px'}
          />
        )}{' '}
        {widthScreen >= 768 && (
          <Bar
            options={options}
            data={data}
            id="Bar"
            style={{
              display: 'flex',
              width: '760px',
              maxWidth: '1034px',
              height: '360px',
            }}
            width={'760px'}
          />
        )}
      </div>
    </div>
  );
};
