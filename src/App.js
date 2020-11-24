
import { Container } from 'react-bootstrap';
import './App.scss';
import TopBar from './Top-bar/TopBar';
import UserCard from './User-card/UserCard'
import SearchBar from './Search-bar/SearchBar'
import DefinitionBox from './Definition-box/DefinitionBox';

function App() {
  return (
    <>
      <TopBar />
      <Container className="my-5 w-75 mx-auto" >
        <SearchBar />
        <DefinitionBox className="mt-3" />
        <UserCard />
      </Container>
    </>

  );
}

export default App;
