import React from 'react';

import { Card, Image, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag, faCity } from '@fortawesome/free-solid-svg-icons';

import './usercard.scss';

import { User } from '../../models/User';

interface Params {
    user: User;
}

const requestImageFile = require.context('../../statics/img', true, /.png$/);

const UserCard = (props: Params) => {
    const { user } = props;
    const avatar = require(`../../statics/img/${user.avatar}`);

    return (
        <Card className="user-card p-3">
            <div className="inner-shadow"></div>
            <Row>
                <Col md="auto" className="text-center">
                    <Image src={requestImageFile(`./${user.avatar}`).default} className="profile-img" rounded></Image>
                </Col>
                <Col className="px-0">
                    <Card.Body className="p-md-0 pr-md-4 flex d-flex flex-column justify-content-between h-100">
                        <Row>
                            <Col>
                                <Card.Title className="text-uppercase">{user.fullName}</Card.Title>
                                <Card.Text className="introduction">
                                    {user.introduction}
                                </Card.Text>
                            </Col>
                            <Col md="auto" className="align-self-center flex d-flex align-items-center mt-4 mt-md-0">
                                <div>
                                    <div className="rectangle blue"></div>
                                    <div className="rectangle red"></div>
                                </div>
                                <div className="ml-2">{user.value}</div>
                            </Col>
                        </Row>
                        <Row className="flex d-flex justify-content-between align-items-center mt-4 mt-md-0">
                            <Col><p className="m-0"><FontAwesomeIcon icon={faHashtag} color="red" /> {user.keywords.toString()}</p></Col>
                            <Col md="auto"><p className="m-0"><FontAwesomeIcon icon={faCity} /> {user.location}</p></Col>
                        </Row>
                    </Card.Body>
                </Col>

            </Row>
        </Card>
    );
}

export default UserCard;
