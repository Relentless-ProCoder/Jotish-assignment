import React from 'react';

function SalaryChart({ data }) {
  const chartWidth = 500;
  const chartHeight = 300;
  const barWidth = 60;

  const maxSalary = Math.max(...data.map((item) => item.salary));

  return (
    <svg width={chartWidth} height={chartHeight}>
      {data.map((item, index) => {
        const barHeight = (item.salary / maxSalary) * 200;
        const x = index * 80;
        const y = chartHeight - barHeight;

        return (
          <g key={item.city}>
            <rect
              x={x}
              y={y}
              width={barWidth}
              height={barHeight}
            />
            <text x={x} y={chartHeight - 5}>
              {item.city}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export default SalaryChart;