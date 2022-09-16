import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Movie from './Movie';
import'./Home.css';
import { CardGroup } from 'react-bootstrap';

import { useParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import SpinnerComponent from '../components/Spinner';

import { getMovies, getSearchMovies, setMoviesPage } from '../redux/movieSlice';
import { useEffect } from 'react';

const Home = () => {
  const { id } = useParams();

  let movies = useSelector((state) => state.movies.movies);
  console.log(movies)
  const [pageCount, setPageCount] = useState(100);
  const dispatch = useDispatch();
  const {page}=useSelector((state)=>({...state.movies}))
  const {lang}=useSelector((state)=>({...state.movies}))
  const {search}=useSelector((state)=>({...state.movies}))
  const {loading}=useSelector((state)=>({...state.movies}))

 const handelPageClick =(data)=>{
  let currentPage=data.selected + 1 ;
  dispatch(setMoviesPage(currentPage)) 
 }
 useEffect(() => {
  if(!search){

    dispatch(getMovies({page:page,lang:lang}));
  } dispatch(getSearchMovies({ page: page, lang: lang, search: search }));

}, [page,lang]);
// useEffect(() => {
//   dispatch(getSearchMovies({page:page,lang:lang,search:search}));
// }, [page,lang,search]);
  return (
<div className='h-100 home' style={{height:'100%'}}>
{loading ? (<SpinnerComponent className='home'/>):(
  <>
  
  <CardGroup className='row h-100 d-flex justify-content-center p-5'>
   {movies.map((movie,i) => {

     return (<>
       {movie.poster_path && 
       <div key={i}  className='col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-10 my-2'>
         <Movie movie={movie} />
       </div>}
     </>

     );
   })}
</CardGroup>

<div className="mt-5">
 <ReactPaginate
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
 />
     {/* <ButtonToolbar aria-label="Toolbar with button groups">
 <ButtonGroup className="me-2" aria-label="First group">
   <Button>1</Button> <Button>2</Button> <Button>3</Button>{' '}
   <Button>4</Button>
 </ButtonGroup>
 <ButtonGroup className="me-2" aria-label="Second group">
   <Button>5</Button> <Button>6</Button> <Button>7</Button>
 </ButtonGroup>
 <ButtonGroup aria-label="Third group">
   <Button>8</Button>
 </ButtonGroup>
</ButtonToolbar> */}
</div>
</> 
) }
</div>

   )
}

export default Home