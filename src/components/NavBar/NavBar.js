import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { AiFillHeart } from 'react-icons/ai';
// import { AiOutlineHeart } from 'react-icons/ai';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  getSearchMovies,
  setMoviesLang,
  setSearch,
  setSearchMovies,
} from '../../redux/movieSlice';
import { Button } from 'react-bootstrap';

function NavBar() {
  const [name,setName]=useState('')
  const { lang } = useSelector((state) => ({ ...state.movies }));
  const { page } = useSelector((state) => ({ ...state.movies }));
  const { search } = useSelector((state) => ({ ...state.movies }));

  // const {movies}=useSelector((state)=>({...state.movies}))

  const dispatch = useDispatch();
  const { favourits } = useSelector((state) => state.favourits);
  let cont = favourits.length;
  let navgate = useNavigate();

  useEffect(() => {
      dispatch(getSearchMovies({ page: page, lang: lang, search: search }));
  }, [page, lang, search]);
  
  const searchSubmit = (e)=>{
    e.preventDefault();
    navgate('/')
if(name){

  dispatch(setSearch(name)) 
}
navgate('/')

  }
  return (
    <Navbar  collapseOnSelect expand="lg" bg="black" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">
          <h2 className="text-light">Movie App</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse  id="basic-navbar-nav">

          <Nav
            className="me-5 my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/" className="fs-5 mt-xxl-2 mt-lg-0  mt-xl-0 text-light ">
              {lang === 'en' ? <h3>Home</h3> : <h3>الرئيسية</h3>}
            </Nav.Link>
            <Nav.Link as={Link} to="/favourit" className="fs-5 mt-xxl-2 mt-lg-0  mt-xl-0 text-light">
              {lang === 'en' ? <h3>Favourits</h3> : <h3>المفضلة</h3>}
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/favourit"
              className="fs-5 text-light d-flex align-items-center"
            >
              <h2 className="d-inline">
                <AiFillHeart className=" text-danger " />
              </h2>

              <h4 className=" text-light d-inline" href="/favourit">
                {cont}
              </h4>
            </Nav.Link>
            <Nav.Link>
              <div
                id="movies"
                className={`container-fluid${
                  lang === 'en' ? 'text-left' : 'text-right'
                }`}
                dir={lang === 'en' ? 'ltr' : 'rtl'}
              >
                {lang === 'en' ? (
                  <button
                    onClick={() => dispatch(setMoviesLang('ar'))}
                    className="btn btn-dark"
                  >
                    <h4>{lang}</h4>
                  </button>
                ) : (
                  <button
                    onClick={() => dispatch(setMoviesLang('en'))}
                    className="btn btn-dark"
                  >
                    <h5>{lang}</h5>
                  </button>
                )}{' '}
              </div>
            </Nav.Link>
          </Nav>
          <Form className="d-flex w-100" onSubmit={(e)=> searchSubmit(e)} >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 w-50"
              aria-label="Search"
              value={name}
              onChange={(e) => setName(e.target.value)}

            />
            {/* <Button variant="outline-success">Search</Button> */}
            <Button type='submit' variant="outline-light">Search</Button>

          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
