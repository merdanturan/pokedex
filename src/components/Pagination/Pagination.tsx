import React from 'react';

interface IPaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<IPaginationProps> = ({ totalPages, currentPage, onPageChange }) => {

    // Visible page numbers in the middle of pagination bar
    const getPageItems = () => {
        const items = [];

        const visiblePages = 4;
        const delta = 2;

        let start = Math.max(1, currentPage - delta);
        let end = Math.min(totalPages, currentPage + delta);

        if (currentPage - delta <= 1) {
            end = visiblePages;
        }

        if (currentPage + delta >= totalPages) {
            start = totalPages - visiblePages + 1;
        }

        for (let number = start; number <= end; number++) {
            items.push(
                <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                    <button
                        className={`page-link bg-warning text-dark ${currentPage === number ? 'border-dark' : ''}`}
                        onClick={() => onPageChange(number)}
                    >
                        {number}
                    </button>
                </li>
            );
        }

        if (start > 1) {
            items.unshift(
                <li key="ellipsis-start" className="page-item disabled">
                    <span className="page-link bg-warning text-dark">...</span>
                </li>
            );
            items.unshift(
                <li key="page-1" className="page-item">
                    <button className="page-link bg-warning text-dark" onClick={() => onPageChange(1)}>1</button>
                </li>
            );
        }

        if (end < totalPages) {
            items.push(
                <li key="ellipsis-end" className="page-item disabled">
                    <span className="page-link bg-warning text-dark">...</span>
                </li>
            );
            items.push(
                <li key={`page-${totalPages}`} className="page-item">
                    <button className="page-link bg-warning text-dark" onClick={() => onPageChange(totalPages)}>{totalPages}</button>
                </li>
            );
        }

        return items;
    };

    return (
        <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button
                        className={`page-link bg-warning text-dark ${currentPage === 1 ? 'opacity-50' : ''}`}
                        onClick={() => onPageChange(currentPage - 1)}
                        tabIndex={currentPage === 1 ? -1 : undefined}
                    >
                        Previous
                    </button>
                </li>
                {getPageItems()}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <button
                        className={`page-link bg-warning text-dark ${currentPage === totalPages ? 'opacity-50' : ''}`}
                        onClick={() => onPageChange(currentPage + 1)}
                        tabIndex={currentPage === totalPages ? -1 : undefined}
                    >
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
