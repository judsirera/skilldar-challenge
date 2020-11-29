import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

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

const RESULTS_PER_PAGE = 5;

interface myParams {
    page: string;
};

const Search = () => {

    const useURLQuery = new URLSearchParams(useLocation().search);
    let filterLocation: any = useURLQuery.has("location") ? useURLQuery.get("location") : "All";
    let page: any = useURLQuery.has("page") ? useURLQuery.get("page") : 1; page = parseInt(page);


    const [locations] = useState(Array.from(new Set(users.map(user => user.location))));
    const [currentPage, setCurrentPage] = useState(page);
    const [searchParams, setSearchParams] = useState({ qs: "", filterByLocation: filterLocation });


    const handleSearch = (query: string) => {
        setSearchParams({ qs: query, filterByLocation: searchParams.filterByLocation });
        setCurrentPage(1);
    }

    const handleFilterByLocation = (location: string) => {
        setSearchParams({ qs: searchParams.qs, filterByLocation: location });
        setCurrentPage(1);
    }

    const handlePagination = (page: number) => {
        setCurrentPage(page);
    }

    let results = users;
    const filter = ({ qs, filterByLocation }: { qs: String, filterByLocation: String }) => {
        if (qs !== "") {
            results = users.filter(user => user.fullName.toUpperCase().includes(qs.toUpperCase()));
        }
        if (filterByLocation !== "All") {
            results = results.filter(user => user.location === filterByLocation);
        }

        const from = (currentPage - 1) * RESULTS_PER_PAGE;
        const to = currentPage * RESULTS_PER_PAGE
        return results.slice(from, to);
    }

    return (
        <>
            <TopBar />
            <Row className="my-2 my-md-5" noGutters={true}>
                <Col xs={10} md={6} className="mx-auto">
                    <SearchBar onSearch={handleSearch} />
                    <DefinitionBox />
                </Col>
            </Row>
            <Row noGutters={true}>
                <Col xs={6} md={3} className="pr-md-4">
                    <RelatedSearch terms={['term1', 'term2', 'term3']} />
                </Col>
                <Col xs={{ span: 10, order: 'last' }} md={6} className="mx-auto mx-md-0 mt-3 mt-md-0">
                    <UserList users={filter(searchParams)} />
                </Col>
                <Col xs={{ span: 6, order: 2 }} md={{ span: 3, order: 'last' }} className="pl-md-4">
                    <FilterMenu locations={['All', ...locations]} active={filterLocation} onFilter={handleFilterByLocation} />
                </Col>
            </Row>
            <Row noGutters={true}>
                <Col xs={10} md={6} className="mx-auto">
                    <Pagination active={currentPage} total={Math.ceil(results.length / RESULTS_PER_PAGE)} handlePagination={handlePagination} />
                </Col>
            </Row>

            <Footer />
        </>
    )
}

export default Search;