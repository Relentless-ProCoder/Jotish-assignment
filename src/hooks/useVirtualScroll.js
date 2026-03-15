import { useMemo, useState } from 'react';

function useVirtualScroll(data, rowHeight, containerHeight) {
    const [scrollTop, setScrollTop] = useState(0);
    
    const visibleCount = Math.ceil(containerHeight / rowHeight);
    const buffer = 5;
    
    const startIndex = Math.max(0, Math.floor(scrollTop / rowHeight) - buffer);
    const endIndex = Math.min(
        data.length,
        startIndex + visibleCount + buffer * 2
    );
    
    const visibleRows = useMemo(() => {
        return data.slice(startIndex, endIndex);
    }, [data, startIndex, endIndex]);
    
    console.log('useVirtualScroll called with data length:', visibleRows.length);
  const offsetY = startIndex * rowHeight;

  return {
    visibleRows,
    offsetY,
    totalHeight: data.length * rowHeight,
    setScrollTop,
  };
}

export default useVirtualScroll;