import React from "react";

class Pagination extends React.Component {
  handlePrevious = () => {
    const { currentPage, onPageChange } = this.props;
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  handleNext = () => {
    const { currentPage, totalPages, onPageChange } = this.props;
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  render() {
    const { currentPage, totalPages } = this.props;

    return (
      <div className="pagination">
        <button onClick={this.handlePrevious} disabled={currentPage === 1}>
          Previous Page
        </button>
        <span className="page-info">
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={this.handleNext} disabled={currentPage === totalPages}>
          Next Page
        </button>
      </div>
    );
  }
}

export default Pagination;
