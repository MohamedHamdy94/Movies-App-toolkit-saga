import React, { useState } from 'react';
import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import { addToFavourits, removeFavourit } from '../redux/favouritsSlice';
import './Movie.css';
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';

const Movie = (props) => {
  const { movie } = props;
  const { favourits } = useSelector((state) => state.favourits);

  const dispatch = useDispatch();
  const fav = favourits.find((item) => item.id === movie.id);
  const [image, setEmage] = useState('./images/loading_noehu7zw.gif');
  // useEffect(()=>{
  // console.log( "fav")
  // },[fav,favourits])

  const setSrc = () => {
    setEmage(`https://image.tmdb.org/t/p/w500/${movie.poster_path}`);
  };

  return (
    <>
      <div
        style={{
          borderRadius: '50px',
          borderColor: 'black',
          position: 'relative',
          borderRadius: '2rem',
        }}
      >
        <Link to={`movie/${movie.id}`}>
          <Card.Img
            src={image}
            style={{
              borderRadius: '2rem',
              background: 'black',
              borderColor: 'black',
            }}
            onLoad={() => setSrc()}
          />
        </Link>

        <div style={{ position: 'absolute', top: '5px', right: '5px' }}>
          {fav ? (
            <h1 onClick={() => dispatch(removeFavourit(movie))}>
              <AiFillHeart className=" text-danger " />
            </h1>
          ) : (
            <h1 onClick={() => dispatch(addToFavourits(movie))}>
              <AiOutlineHeart className=" text-danger " />
            </h1>
          )}
        </div>
        <div
          className="mx-auto"
          style={{ position: 'absolute', left: '15px', bottom: 0 }}
        >
          <Rating className="text-left" rating={movie.vote_average} />
        </div>

        {/* 
        <Card.Body  className='content darkMod ' style={{ borderRadius: ' 0 0 50px 50px ' ,  backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
        <div className='d-flex align-items-center justify-content-between'> */}
        {/* <Card.Title className=' darkMod p-2'	>{movie.title}</Card.Title> */}
        {/* 
        </div>
          <Card.Text className='darkMod'>
          </Card.Text >

        </Card.Body> */}
        {/* <Card.Footer className='black'>
        </Card.Footer> */}
      </div>
    </>
  );
};

export default Movie;
