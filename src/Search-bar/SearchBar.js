import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Image, InputGroup, FormControl } from "react-bootstrap";

import logo from '../img/skilldar.png';


const SearchBar = () => (
    <Row className="justify-content-between align-items-center">
        <Col xs={12} md={3} className="mb-3 mb-md-0">
            <Image src={logo} fluid></Image>
        </Col>
        <Col xs={12} md={7}>
            <InputGroup >
                <FormControl
                    placeholder="Search"
                />
                <InputGroup.Append>
                    <InputGroup.Text><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>
        </Col>
    </Row>
)


export default SearchBar;