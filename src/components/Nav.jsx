import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import logo from '../../public/img/logo.svg';
import { searchedGame } from '../actions/gamesAction';
import { fadeIn } from '../utils';

const Nav = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');

  const handleInput = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchedGame(searchText));
    setSearchText('');
  };

  return (
    <StyledNav variants={fadeIn} initial='hidden' animate='show'>
      <Logo onClick={() => dispatch({ type: 'CLEAR_SEARCHED' })}>
        <img src={logo} alt='logo' />
        <h1>Games</h1>
      </Logo>
      <form onSubmit={handleSubmit} className='search'>
        <input value={searchText} onChange={handleInput} type='text' />
        <button type='submit'>Search</button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #d6a8a8;
  input {
    width: 15rem;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
  }
  form {
    display: flex;
    align-items: center;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
    margin-right: 0.5rem;
  }
`;
export default Nav;
