import React from 'react';

function VirtualGrid({ data, visibleRows, offsetY, totalHeight, rowHeight, onScroll }) {
  return (
    <div
      style={{
        height: '500px',
        overflowY: 'auto',
        border: '1px solid black',
        position: 'relative',
      }}
      onScroll={onScroll}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        <div
          style={{
            transform: `translateY(${offsetY}px)`,
            position: 'absolute',
            width: '100%',
          }}
        >
          {visibleRows.map((row, index) => (
            <div
              key={index}
              style={{
                height: rowHeight,
                borderBottom: '1px solid gray',
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '10px',
              }}
            >
              {JSON.stringify(row)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VirtualGrid;