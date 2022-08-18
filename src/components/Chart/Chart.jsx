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
import { useDispatch, useSelector } from 'react-redux';
import { getExpenceList } from 'redux/transaction/transactions-selectors';
import { getSuccessToken } from 'redux/auth/auth-selectors';
import { getExpanses } from 'redux/transaction/transaction-operations';

ChartJS.register(
  ChartDataLabels,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const Chart = () => {
  const expence = useSelector(getExpenceList);
  const dispatch = useDispatch();

  const token = useSelector(getSuccessToken);

  useEffect(() => {
    if (!token) {
      return;
    }
    dispatch(getExpanses());
  }, [dispatch, token]);

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
    labels: expence.map(el => el.description),
    datasets: [
      {
        label: 'Dataset 1',
        data: expence.map(el => el.amount),
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
  );
};
