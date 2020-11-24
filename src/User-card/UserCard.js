import './usercard.scss';

import { Card, Image, Row, Col } from "react-bootstrap";

import img from '../img/user1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag, faCity } from '@fortawesome/free-solid-svg-icons';


const UserCard = (props) => (
    <Card className="user-card p-3">
        <div className="inner-shadow"></div>
        <div className="flex d-flex">
            <Image src={img} className="profile-img" rounded></Image>
            <Card.Body className="py-0 pr-4 flex d-flex flex-column justify-content-between">
                <div className="flex d-flex">
                    <div className="mr-4">
                        <Card.Title className="text-uppercase">Card title</Card.Title>
                        <Card.Text className="introduction">
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                    </div>
                    <div className="align-self-center justify-content-between flex d-flex align-items-center">
                        <div>
                            <div className="rectangle blue"></div>
                            <div className="rectangle red"></div>
                        </div>
                        <div className="ml-2">456</div>
                    </div>
                </div>
                <div className="flex d-flex justify-content-between align-items-center">
                    <div><p><FontAwesomeIcon icon={faHashtag} color="red" /> keywords</p></div>
                    <div><p><FontAwesomeIcon icon={faCity} /> city</p></div>
                </div>
            </Card.Body>
        </div>
    </Card>
)

export default UserCard;
