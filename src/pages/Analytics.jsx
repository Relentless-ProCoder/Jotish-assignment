import React, { useEffect, useState } from 'react';
import { fetchEmployeeData } from '../utils/api';
import SalaryChart from '../components/SalaryChart';
import CityMap from '../components/CityMap';

function Analytics() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    async function loadData() {
      const data = await fetchEmployeeData();
      setEmployees(data);
    }

    loadData();
  }, []);

  const citySalaryMap = {};

  employees.forEach((employee) => {
    const city = employee.city || 'Unknown';
    const salary = Number(employee.salary) || 0;

    if (!citySalaryMap[city]) {
      citySalaryMap[city] = 0;
    }

    citySalaryMap[city] += salary;
  });

  const chartData = Object.entries(citySalaryMap).map(([city, salary]) => ({
    city,
    salary,
  }));

  const cityList = chartData.map((item) => item.city);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Analytics</h2>

      <SalaryChart data={chartData} />

      <br /><br />

      <CityMap cities={cityList} />
    </div>
  );
}

export default Analytics;