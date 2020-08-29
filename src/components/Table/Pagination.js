import React from "react";

const Pagination = ({ totalItems, currentPage, setCurrentPage, getData }) => {
  const totalPages = Math.ceil(totalItems / 10);
  const pages = [];

  if (totalPages === 1) return null;

  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <li
        className={`page-item ${i === currentPage ? "active" : ""}`}
        onClick={() => setCurrentPage(i)}
      >
        <span className="page-link">{i}</span>
      </li>
    );
  }

  return (
    <nav>
      <ul className="pagination float-right">
        {currentPage !== 1 && (
          <li
            className="page-item"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <span className="page-link">
              <span>&laquo;</span>
            </span>
          </li>
        )}
        {pages}
        {currentPage !== totalPages && (
          <li
            className="page-item"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <span className="page-link">
              <span>&raquo;</span>
            </span>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
