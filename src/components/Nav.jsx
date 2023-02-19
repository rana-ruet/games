import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import logo from '../../public/img/logo.svg';

const Nav = () => {
  return (
    <StyledNav>
      <Logo>
        <img src={logo} alt='logo' />
        <h1>Games</h1>
      </Logo>
      <form className='search'>
        <input type='text' />
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
