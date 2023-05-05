import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Movie from './Movie';
import './Home.css';
import { CardGroup, Carousel } from 'react-bootstrap';

import { useParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import SpinnerComponent from '../components/Spinner';

import { getMovies, getSearchMovies, setMoviesPage } from '../redux/movieSlice';
import { useEffect } from 'react';
import CarouselComponent from '../components/CarouselComponent';

const Home = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [total_pages, settotal_pages] = useState(100);
  const { movies } = useSelector((state) => ({ ...state.movies }));

  const { lang } = useSelector((state) => ({ ...state.movies }));
  const { loading } = useSelector((state) => ({ ...state.movies }));
  // const { total_pages } = useSelector((state) => ({ ...state.movies }));

  const handelPageClick = (data) => {
    let currentPage = data.selected + 1;
    setPage(currentPage);
  };

  // useEffect(() => {
  //   dispatch(getMovies({ page: page, lang: lang }));
  // }, []);
  useEffect(() => {
    dispatch(getMovies({ lang: lang, page: page }));
  }, [page, lang]);
  return (
    <div className="h-100 home" style={{ height: '100%' }}>
      {loading ? (
        <SpinnerComponent className="home" />
      ) : (
        <>
          <Carousel style={{ height: '500px' }} className=" h-50 mt-3">
            {movies.map((movie, i) => {
              return (
                <Carousel.Item key={i}>
                  <CarouselComponent movie={movie} />
                  {/* <img
        style={{width:'50%',height:'50%'}}
          className="d-block w-100"
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
                </Carousel.Item>
              );
            })}
          </Carousel>
          <CardGroup className="row h-100 d-flex justify-content-start p-3">
            {movies.map((movie, i) => {
              return (
                <div
                  key={i}
                  className="image d-flex justify-content-center col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-10 my-2"
                >
                  <Movie movie={movie} />
                </div>
              );
            })}
          </CardGroup>

          <div className="mt-5">
            <ReactPaginate
              previousLabel={'<<'}
              nextLabel={'>>'}
              breakLabel={'...'}
              pageCount={total_pages}
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
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
