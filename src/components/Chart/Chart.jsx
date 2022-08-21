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

export const Chart = ({ itemEl, arrow }) => {
  const itemSliceKeys = Object.keys(itemEl[1]).slice(1);
  const itemSliceValues = Object.values(itemEl[1]).slice(1);

  const [widthScreen, setWidthScreen] = useState(window.screen.width);

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
      datalabels: {
        anchor: 'end',
        offset: 10,
        align: 'top',
        padding: 0,
        display: true,
        color: '#52555F',
        font: {
          size: 10,
          letterSpacing: '0.02em',
          lineHeight: 1.2,
        },
      },
    },
    scales: {
      xAxes: {
        grid: {
          drawBorder: false,
          color: 'transparent',
        },
        ticks: { display: false },
        gridLines: {
          display: false,
          drawBorder: false,
        },
      },
      yAxes: {
        grid: {
          drawBorder: false,
          color: 'transparent',
        },
        ticks: {
          padding: 0,
          mirror: true,
          labelOffset: -16,
          color: '#52555F',
          display: true,
          font: {
            size: 10,
            letterSpacing: '0.02em',
            lineHeight: 1.2,
          },
        },
        gridLines: {
          display: false,
          drawBorder: false,
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
        display: false,
      },
      title: {
        display: false,
        text: '',
      },
      datalabels: {
        anchor: 'end',
        offset: -20,
        align: 'end',
        padding: { top: 40 },
        display: true,
        color: 'black',
        labels: {
          title: {
            font: {
              size: 12,
              color: '#52555F',
            },
          },
        },
      },
    },
    scales: {
      x: {
        display: true,
        grid: {
          offset: false,
          color: 'transparent',
        },
        ticks: {
          padding: 0,
          maxRotation: 0,
          minRotation: 0,
          autoSkip: false,
          font: {
            color: 'red',
            size: 12,
            lineHeight: 1.17,
          },
        },
      },
      y: {
        grid: {
          offset: false,
          color: '#F5F6FB',
          lineWidth: 2,
          drawBorder: false,
        },
        display: true,
        ticks: {
          display: false,
        },
      },
    },
  };

  const data = {
    labels: itemLabels,
    datasets: [
      {
        label: 'Price',
        data: itemData,
        backgroundColor: [' #FF751D', '#FFDAC0', '#FFDAC0'],
        borderRadius: 10,
        maxBarThickness: 38,
        barScale: 2,
      },
    ],
  };

  const dataHorizontal = {
    labels: itemLabels,
    datasets: [
      {
        label: 'Price',
        data: itemData,
        backgroundColor: [' #FF751D', '#FFDAC0', '#FFDAC0'],
        borderRadius: 10,
        maxBarThickness: 15,
        barScale: 2,
      },
    ],
  };

  return (
    <>
      {widthScreen <= 767 && (
        <div className={styles.chartWrapper}>
          <div className={styles.chartContainer}>
            <Bar
              options={optionsHorizontal}
              data={dataHorizontal}
              id="Bar"
              style={{
                display: 'flex',
                width: '760px',
                // maxWidth: '1034px',
                height: '360px',
              }}
              width={'760px'}
            />
          </div>
        </div>
      )}
      {widthScreen >= 768 && (
        <div className={styles.chartWrapper}>
          <div className={styles.chartContainer}>
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
          </div>
        </div>
      )}
    </>
  );
};
