import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import TopBar from './components/top-bar/TopBar';
import UserList from './components/user-list/UserList'
import SearchBar from './components/search-bar/SearchBar'
import DefinitionBox from './components/definition-box/DefinitionBox';
import FilterMenu from './components/filter-menu/FilterMenu';
import RelatedSearch from './components/related-search/RelatedSearch';


import './scss/main.scss';
import users from './data/users';


const App = () => {

  return (
    <>
      <TopBar />

      <Row className="my-2 mt-5 my-md-5" noGutters={true}>
        <Col xs={10} md={6} className="mx-auto">
          <SearchBar />
          <DefinitionBox />
        </Col>
      </Row>
      <Row noGutters={true}>
        <Col xs={6} md={3} className="pr-md-4">
          <RelatedSearch terms={['hola', 'adeu', 'qe tal']} />
        </Col>
        <Col xs={{ span: 10, order: 'last' }} md={6} className="mx-auto mx-md-0 mt-3 mt-md-0">
          <UserList users={users} />
        </Col>
        <Col xs={{ span: 6, order: 2 }} md={{ span: 3, order: 'last' }} className="pl-md-4">
          <FilterMenu locations={['london', 'berlin', 'barcelona']} />
        </Col>
      </Row>
    </>

  );
}

export default App;
