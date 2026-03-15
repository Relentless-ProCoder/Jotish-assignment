import React, { useEffect, useState } from 'react';
import { fetchEmployeeData } from '../utils/api';
import useVirtualScroll from '../hooks/useVirtualScroll';
import VirtualGrid from '../components/VirtualGrid';

function List() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    async function loadData() {
    const data = await fetchEmployeeData();
    console.log('Fetched employee data:', data.TABLE_DATA.data);
    console.log(typeof data.TABLE_DATA.data);
      setEmployees(data.TABLE_DATA.data);
    }

    loadData();
  }, []);

  const {
    visibleRows,
    offsetY,
    totalHeight,
    setScrollTop,
  } = useVirtualScroll(employees, 50, 500);

  const handleScroll = (e) => {
    setScrollTop(e.target.scrollTop);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Employee List</h2>

      <VirtualGrid
        data={employees}
        visibleRows={visibleRows}
        offsetY={offsetY}
        totalHeight={totalHeight}
        rowHeight={50}
        onScroll={handleScroll}
      />
    </div>
  );
}

export default List;