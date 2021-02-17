import { Row, Col, Pagination } from "react-bootstrap";
import ReactPaginate from 'react-paginate';

const Paginate = ({ next, prev, handlerPages, pages, count }) => {
  const handlerNext = () => {
    const [, query] = next.split("?");
    handlerPages(query);
  };

  const handlerPrev = () => {
    const [, query] = prev.split("?");
    handlerPages(query);
  };

  const handlePageClick = (e) =>{
      console.log(e)
  }
  return (
    <Row>
      <Col>
      <ReactPaginate
          previousLabel={prev}
          nextLabel={next}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={count}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
        <Pagination>
          {!!prev && <Pagination.Prev onClick={handlerPrev} />}
          <Pagination.Next onClick={handlerNext} />
        </Pagination>
      </Col>
    </Row>
  );
};

export default Paginate;
