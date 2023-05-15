import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Accident Injury Types',
    },
  },
};

const AccidentTypes = () => {
    const data = {
        labels: ['High Injuries','Low Injuries','No Injuries','Death'],
        datasets: [
          {
            label: 'Accidents',
            data: [43,34,55,45],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgb(75, 192, 192,0.2)',
              ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
              ],
            borderWidth: 1,
          },
        ],
      };
  return (
    <div className='w-[32rem] bg-white rounded-md p-4 shadow mx-4 mt-4'>
      <Line options={options} data={data} />
    </div>
  )
}

export default AccidentTypes
