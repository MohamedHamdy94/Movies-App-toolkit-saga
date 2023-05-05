import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Rating from './Rating';
import { Container } from 'react-bootstrap';

const CarouselComponent = ({ movie }) => {
  return (
    <>
      <Container  className=" h-50">
        <div
      className="bgCarousel h-100"
      style={{
            height: '500px',
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 1),  rgba(0, 0, 0, 0.64)), url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`,
          }}
        >
          <Row>
            <Col md={4}>
              <div className=" img">
                <Card.Img
                  variant="top"
                  className="h-75 w-75  mx-5"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                />
              </div>
            </Col>
            <Col md={8}>
              <Card.Body>
                <div className="text-light my-3">
                  <div className="d-flex justify-content-between">
                    <Card.Title className="text-light mt-5">
                      <h1> {movie.original_title}</h1>
                    </Card.Title>
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
      </Container>
    </>
  );
};

export default CarouselComponent;
