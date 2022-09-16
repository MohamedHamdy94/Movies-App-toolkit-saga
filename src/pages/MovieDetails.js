import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMovie } from '../redux/movieSlice';
import Rating from '../components/Rating';
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { addToFavourits, removeFavourit } from '../redux/favouritsSlice';
import SpinnerComponent from '../components/Spinner';

const MovieDetails = () => {
  const { id } = useParams();
  const {favourits} = useSelector((state) => state.favourits);
  const { loading } = useSelector((state) => ({ ...state.movies }));
  const dispatch = useDispatch();
  
  const { movie } = useSelector((state) => ({ ...state.movies }));
  const { lang } = useSelector((state) => ({ ...state.movies }));
  const fav = favourits.find((item) => item.id === movie.id); 

  useEffect(() => {
    console.log(id);
    if (id) {
      dispatch(getMovie({ id: id, lang: lang }));
    }
  }, [id, lang]);
  useEffect(() => {
    console.log(movie.genres);
  }, []);
  // adult: false
  // backdrop_path: "/vvObT0eIWGlArLQx3K5wZ0uT812.jpg"
  // belongs_to_collection:
  // backdrop_path: "/3KL8UNKFWgIKXzLHjwY0uwgjzYl.jpg"
  // id: 131296
  // name: "Thor Collection"
  // poster_path: "/yw7gr7DhHHVTLlO8Se8uH17TDMA.jpg"
  // [[Prototype]]: Object
  // budget: 250000000
  // genres: Array(3)
  // 0: {id: 28, name: 'Action'}
  // 1: {id: 12, name: 'Adventure'}
  // 2: {id: 14, name: 'Fantasy'}
  // length: 3
  // [[Prototype]]: Array(0)
  // homepage: "https://www.marvel.com/movies/thor-love-and-thunder"
  // id: 616037
  // imdb_id: "tt10648342"
  // original_language: "en"
  // original_title: "Thor: Love and Thunder"
  // overview: "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Relatively Mighty Girl Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late."
  // popularity: 3887.402
  // poster_path: "/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg"
  // production_companies: Array(2)
  // 0: {id: 420, logo_path: '/hUzeosd33nzE5MCNsZxCGEKTXaQ.png', name: 'Marvel Studios', origin_country: 'US'}
  // 1: {id: 176762, logo_path: null, name: 'Kevin Feige Productions', origin_country: 'US'}
  // length: 2
  // [[Prototype]]: Array(0)
  // production_countries: Array(1)
  // 0: {iso_3166_1: 'US', name: 'United States of America'}
  // length: 1
  // [[Prototype]]: Array(0)
  // release_date: "2022-07-06"
  // revenue: 746900000
  // runtime: 119
  // spoken_languages: Array(1)
  // 0: {english_name: 'English', iso_639_1: 'en', name: 'English'}
  // length: 1
  // [[Prototype]]: Array(0)
  // status: "Released"
  // tagline: "The one is not the only."
  // title: "Thor: Love and Thunder"
  // video: false
  // vote_average: 6.735
  // vote_count: 2264
  return (
    // <div className='bg h-100' style={ {  backgroundImage:` url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})` }} >
    <>
    {loading ? (
      <SpinnerComponent className="home" />
    ) : (
      
    <div
      className="bg h-100"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 1),  rgba(0, 0, 0, 0.84)), url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`,
      }}
    >
      <Row>
        <Col md={4}>
          <div className="img">
            <Card.Img
              variant="top"
              className="h-100 w-75  img mx-5"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            />
          </div>
        </Col>
        <Col md={8}>
          <Card.Body>
            <div className="text-light my-5">
              <div  className="d-flex justify-content-between">
                <Card.Title className="text-light mt-5">
              <h1>  {movie.original_title}</h1> 
                </Card.Title>
                <div>
                  {fav ? (
                    <h1  className="d-flex justify-content-around  align-items-center pe-5" onClick={() => dispatch(removeFavourit(movie))}>
                      <AiFillHeart className=" text-danger " />
                    </h1>
                  ) : (
                    <h1 className="d-flex justify-content-around  align-items-center pe-5" onClick={() => dispatch(addToFavourits(movie))}>
                      <AiOutlineHeart className=" text-danger " />
                    </h1>
                  )}
                </div>
              </div>
              <div className="text-white">
                {movie.release_date} .{' '}
                {movie.genres &&
                  movie.genres.map((item) => {
                    return <span> {item.name} , </span>;
                  })}
                <Rating className="text-left" rating={movie.vote_average} />
              </div>
            </div>
            <Card.Text className="text-light pe-5">
              <h4>Overview</h4>
              {movie.overview}
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </div>
    )}
    </>
    
  );
};

export default MovieDetails;
