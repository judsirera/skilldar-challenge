import React from 'react';
import { Row, Col } from 'react-bootstrap';
import TopBar from './../components/top-bar/TopBar';
import UserList from './../components/user-list/UserList'
import SearchBar from './../components/search-bar/SearchBar'
import DefinitionBox from './../components/definition-box/DefinitionBox';
import FilterMenu from './../components/filter-menu/FilterMenu';
import RelatedSearch from './../components/related-search/RelatedSearch';
import Pagination from './../components/pagination/Pagination';
import Footer from './../components/footer/Footer'

import users from './../data/users';
import { User } from '../models/User';

interface State {
    locations: string[],
    searchResults: User[]
}

class Search extends React.Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            locations: Array.from(new Set(users.map(user => user.location))),
            searchResults: users
        }

        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(searchValue: string) {
        let results = users;
        if (searchValue !== "") {
            results = users.filter(user => user.fullName.toUpperCase().includes(searchValue.toUpperCase()));
        }

        this.setState({
            searchResults: results,
            locations: Array.from(new Set(results.map(user => user.location))),
        })
    }

    render() {
        const { searchResults, locations } = this.state;
        return (
            <>
                <TopBar />
                <Row className="my-2 my-md-5" noGutters={true}>
                    <Col xs={10} md={6} className="mx-auto">
                        <SearchBar onSearch={this.handleSearch} />
                        <DefinitionBox />
                    </Col>
                </Row>
                <Row noGutters={true}>
                    <Col xs={6} md={3} className="pr-md-4">
                        <RelatedSearch terms={['term1', 'term2', 'term3']} />
                    </Col>
                    <Col xs={{ span: 10, order: 'last' }} md={6} className="mx-auto mx-md-0 mt-3 mt-md-0">
                        <UserList users={searchResults} />
                    </Col>
                    <Col xs={{ span: 6, order: 2 }} md={{ span: 3, order: 'last' }} className="pl-md-4">
                        <FilterMenu locations={['All', ...locations]} />
                    </Col>
                </Row>

                <Row noGutters={true}>
                    <Col xs={10} md={6} className="mx-auto">
                        <Pagination active={1} total={3} />
                    </Col>
                </Row>

                <Footer />
            </>
        )
    }
}

export default Search;