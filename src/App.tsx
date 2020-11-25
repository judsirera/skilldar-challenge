import React from 'react';

import { Container } from 'react-bootstrap';
import TopBar from './components/top-bar/TopBar';
import UserList from './components/user-list/UserList'
import SearchBar from './components/search-bar/SearchBar'
import DefinitionBox from './components/definition-box/DefinitionBox';

import './scss/main.scss';
import { User } from './models/User';

const App = () => {
  const users = [new User({
    avatar: "user1.png",
    email: "user1@gmail.com",
    first_name: "User",
    last_name: "One",
    introduction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.I’ve worked with many professional film teams.",
    value: 435,
    location: "Germany",
    keywords: "hello, user, challenge"
  }), new User({
    avatar: "user2.png",
    email: "user2@gmail.com",
    first_name: "User",
    last_name: "Two",
    introduction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.I’ve worked with many professional film teams.",
    value: 135,
    location: "London",
    keywords: "hello, user, challenge"
  }), new User({
    avatar: "user3.png",
    email: "user3@gmail.com",
    first_name: "User",
    last_name: "Three",
    introduction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.I’ve worked with many professional film teams.",
    value: 274,
    location: "London",
    keywords: "hello, user, challenge"
  }),
  ];


  return (
    <>
      <TopBar />
      <Container className="my-5 w-75 mx-auto" >
        <SearchBar />
        <DefinitionBox />
        <UserList users={users}></UserList>
      </Container>
    </>

  );
}

export default App;
