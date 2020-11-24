import React from 'react';

import { Container } from 'react-bootstrap';
import TopBar from './components/top-bar/TopBar';
import UserCard from './components/user-card/UserCard'
import SearchBar from './components/search-bar/SearchBar'
import DefinitionBox from './components/definition-box/DefinitionBox';

import './scss/main.scss';

function App() {
  return (
    <>
      <TopBar />
      <Container className="my-5 w-75 mx-auto" >
        <SearchBar />
        <DefinitionBox />
        <UserCard />
      </Container>
    </>

  );
}

export default App;
