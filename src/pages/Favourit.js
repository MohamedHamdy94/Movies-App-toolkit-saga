import React from 'react'
import Movie from './Movie';
import { CardGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
const Favourit = () => {
  const movies = useSelector((state) => state.favourits.favourits);
console.log(movies)
  return (
    <>
  <CardGroup className='row d-flex justify-content-start p-5'>
        {movies.map((movie) => {
          return (<>
            {movie.poster_path && 
            <div key={movie.id} className='col-xxl-2 col-xl-3 col-lg-3  col-md-4 col-sm-6 col-xs-10 my-2'>
              <Movie movie={movie}  />
            </div>}
          </>
          );
        })}
 </CardGroup>
    <div className="mt-5">
      {/* <ReactPaginate
        previousLabel={'<<'}
        nextLabel={'>>'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handelPageClick}
        containerClassName={'pagination justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
      /> */}
    </div>
  </> 
  )
}

export default Favourit