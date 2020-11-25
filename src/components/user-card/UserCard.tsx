import React from 'react';

import { Card, Image } from "react-bootstrap";
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
            <div className="flex d-flex">
                <Image src={requestImageFile(`./${user.avatar}`).default} className="profile-img" rounded></Image>
                <Card.Body className="py-0 pr-4 flex d-flex flex-column justify-content-between">
                    <div className="flex d-flex">
                        <div className="mr-auto">
                            <Card.Title className="text-uppercase">{user.fullName}</Card.Title>
                            <Card.Text className="introduction">
                                {user.introduction}
                            </Card.Text>
                        </div>
                        <div className="align-self-center justify-content-between flex d-flex align-items-center">
                            <div>
                                <div className="rectangle blue"></div>
                                <div className="rectangle red"></div>
                            </div>
                            <div className="ml-2">{user.value}</div>
                        </div>
                    </div>
                    <div className="flex d-flex justify-content-between align-items-center">
                        <div><p><FontAwesomeIcon icon={faHashtag} color="red" /> {user.keywords.toString()}</p></div>
                        <div><p><FontAwesomeIcon icon={faCity} /> {user.location}</p></div>
                    </div>
                </Card.Body>
            </div>
        </Card>
    );
}

export default UserCard;
