import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

const CustomPagination = ({ currentPage, totalPages, onPageChange }) => {

  const renderPaginationItems = () => {
    let items = [];

    // Previous button
    items.push(
      <Pagination.Prev 
        key="prev" 
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)} 
        disabled={currentPage === 1} 
      />
    );

    // First page
    items.push(
      <Pagination.Item 
        key={1} 
        active={currentPage === 1} 
        onClick={() => onPageChange(1)}
      >
        1
      </Pagination.Item>
    );

    // Pages between
    if (currentPage > 3) {
      items.push(<Pagination.Ellipsis key="start-ellipsis" />);
    }

    for (let number = Math.max(2, currentPage - 1); number <= Math.min(totalPages - 1, currentPage + 1); number++) {
      items.push(
        <Pagination.Item 
          key={number} 
          active={currentPage === number} 
          onClick={() => onPageChange(number)}
        >
          {number}
        </Pagination.Item>
      );
    }

    if (currentPage < totalPages - 2) {
      items.push(<Pagination.Ellipsis key="end-ellipsis" />);
    }

    // Last page
    items.push(
      <Pagination.Item 
        key={totalPages} 
        active={currentPage === totalPages} 
        onClick={() => onPageChange(totalPages)}
      >
        {totalPages}
      </Pagination.Item>
    );

    // Next button
    items.push(
      <Pagination.Next 
        key="next" 
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)} 
        disabled={currentPage === totalPages} 
      />
    );

    return items;
  };

  return (
    <Pagination>
      {renderPaginationItems()}
    </Pagination>
  );
};

export default CustomPagination;
