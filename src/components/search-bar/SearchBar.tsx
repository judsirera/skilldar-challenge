import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Image, InputGroup, FormControl } from "react-bootstrap";

import logo from '../../statics/img/skilldar.png';

import './searchbar.scss';

const SearchBar = (props: any) => {
    const handleChange = (event: any) => {
        props.onSearch(event.target.value);
    }

    return (
        <Row className="justify-content-between align-items-center" noGutters={true}>
            <Col xs={12} md={3} className="mb-3 mb-md-0">
                <Image src={logo} fluid></Image>
            </Col>
            <Col xs={12} md={7}>
                <InputGroup className="search-bar">
                    <FormControl placeholder="Search" onChange={handleChange} />
                    <InputGroup.Append>
                        <InputGroup.Text><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                    </InputGroup.Append>
                </InputGroup>
            </Col>
        </Row>
    )
}


export default SearchBar;